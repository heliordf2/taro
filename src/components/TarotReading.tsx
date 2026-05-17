import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { tarotCards, type TarotCard } from '../data/tarotCards'
import { specialCard, type ReadingMode } from '../data/readingAccess'
import {
  spreads,
  getSpreadCardCount,
  type SpreadConfig,
  type SpreadType,
} from '../data/spreads'
import { getCardImageUrl } from '../utils/cardImages'
import { buildReadingSummary, type DrawnCard } from '../utils/readingSummary'
import { CardImage } from './CardImage'
import { ReadingAccessGate } from './ReadingAccessGate'
import { SpecialInvokedCard } from './SpecialInvokedCard'

const SESSION_KEY = 'taro-reading-mode'

function shuffleDeck(): TarotCard[] {
  const deck = [...tarotCards]
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}

function drawCards(count: number): DrawnCard[] {
  const deck = shuffleDeck()
  return deck.slice(0, count).map((card) => ({
    card,
    reversed: Math.random() < 0.3,
  }))
}

function preloadImages(cards: DrawnCard[]) {
  cards.forEach(({ card }) => {
    const img = new Image()
    img.src = getCardImageUrl(card)
  })
}

function shuffleDuration(cardCount: number): number {
  return 1000 + cardCount * 120
}

function loadStoredMode(): ReadingMode | null {
  const stored = sessionStorage.getItem(SESSION_KEY)
  if (stored === 'standard' || stored === 'special') return stored
  return null
}

export function TarotReading() {
  const [readingMode, setReadingMode] = useState<ReadingMode | null>(loadStoredMode)

  const handleUnlock = (mode: ReadingMode) => {
    sessionStorage.setItem(SESSION_KEY, mode)
    setReadingMode(mode)
  }

  const handleLock = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setReadingMode(null)
  }

  if (!readingMode) {
    return (
      <section className="reading-experience" aria-labelledby="reading-title">
        <header className="reading-header">
          <span className="section-label">Consulta online</span>
          <h1 id="reading-title">Sua tiragem</h1>
          <p>O oráculo está selado. Leia o segredo e informe a senha para abrir o ritual.</p>
        </header>
        <ReadingAccessGate onUnlock={handleUnlock} />
      </section>
    )
  }

  return <TarotReadingSession key={readingMode} mode={readingMode} onLock={handleLock} />
}

function TarotReadingSession({
  mode,
  onLock,
}: {
  mode: ReadingMode
  onLock: () => void
}) {
  const [spread, setSpread] = useState<SpreadType>('three')
  const [question, setQuestion] = useState('')
  const [drawn, setDrawn] = useState<DrawnCard[]>([])
  const [isShuffling, setIsShuffling] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)
  const [specialRevealed, setSpecialRevealed] = useState(false)

  const isSpecial = mode === 'special'

  useEffect(() => {
    if (!isSpecial) return

    let cancelled = false
    setIsShuffling(true)
    setSpecialRevealed(false)
    setHasDrawn(false)

    const img = new Image()
    img.src = specialCard.imageUrl

    const timer = window.setTimeout(() => {
      if (cancelled) return
      setSpecialRevealed(true)
      setHasDrawn(true)
      setIsShuffling(false)
    }, 1600)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [isSpecial])
  const config = spreads.find((s) => s.id === spread)!
  const count = getSpreadCardCount(spread)

  const summary = useMemo(() => {
    if (isSpecial || !hasDrawn || drawn.length === 0) return null
    return buildReadingSummary(spread, drawn, question)
  }, [isSpecial, hasDrawn, drawn, spread, question])

  const resetDraw = useCallback(() => {
    setHasDrawn(false)
    setDrawn([])
    setSpecialRevealed(false)
  }, [])

  const invokeSpecial = useCallback(() => {
    setIsShuffling(true)
    setSpecialRevealed(false)

    window.setTimeout(() => {
      setSpecialRevealed(true)
      setHasDrawn(true)
      setIsShuffling(false)
    }, 1600)
  }, [])

  const handleDraw = useCallback(() => {
    if (isSpecial) {
      invokeSpecial()
      return
    }

    if (hasDrawn) {
      resetDraw()
      return
    }

    setIsShuffling(true)
    window.setTimeout(() => {
      const result = drawCards(count)
      preloadImages(result)
      setDrawn(result)
      setHasDrawn(true)
      setIsShuffling(false)
    }, shuffleDuration(count))
  }, [hasDrawn, resetDraw, isSpecial, count, invokeSpecial])

  return (
    <section className="reading-experience" aria-labelledby="reading-title">
      <header className="reading-header">
        <span className="section-label">Consulta online</span>
        <h1 id="reading-title">{isSpecial ? 'Ritual de invocação' : 'Sua tiragem'}</h1>
        <p>
          {isSpecial
            ? 'Portal secreto aberto — a Feiticeira Thamy será invocada automaticamente.'
            : 'Escolha entre 1 e 10 cartas — da resposta rápida à Cruz Celta completa.'}
        </p>
        <div className="reading-header-actions">
          <Link to="/guia" className="reading-guide-link">
            Ver guia completo das 78 cartas →
          </Link>
          <button type="button" className="lock-session-btn" onClick={onLock}>
            Encerrar sessão
          </button>
        </div>
      </header>

      <div className="reading-panel">
        <label className="reading-question-field">
          <span>
            Sua pergunta ou intenção <em className="optional-tag">(opcional)</em>
          </span>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Deixe em branco para uma leitura geral do momento"
            disabled={isShuffling}
          />
        </label>

        {!isSpecial && (
          <SpreadOptions spread={spread} setSpread={setSpread} isShuffling={isShuffling} />
        )}

        <button
          type="button"
          className={`reading-draw-btn ${isSpecial ? 'reading-draw-btn--special' : ''}`}
          onClick={handleDraw}
          disabled={isShuffling}
        >
          {isShuffling ? (
            <>
              <span className="shuffle-spinner" aria-hidden="true" />
              {isSpecial ? 'Invocando...' : `Embaralhando ${count} cartas...`}
            </>
          ) : isSpecial && hasDrawn ? (
            'Invocar novamente'
          ) : isSpecial ? (
            'Invocar carta'
          ) : hasDrawn ? (
            'Nova tiragem'
          ) : (
            `Tirar ${count} carta${count > 1 ? 's' : ''}`
          )}
        </button>
      </div>

      {isShuffling && <ShuffleStage isSpecial={isSpecial} count={count} />}

      {isSpecial && specialRevealed && !isShuffling && (
        <SpecialInvokedCard question={question} />
      )}

      {!isSpecial && hasDrawn && drawn.length > 0 && !isShuffling && (
        <ReadingResults
          config={config}
          spread={spread}
          drawn={drawn}
          question={question}
          summary={summary}
        />
      )}
    </section>
  )
}

function ShuffleStage({ isSpecial, count }: { isSpecial: boolean; count: number }) {
  const n = isSpecial ? 5 : Math.min(count, 7)
  return (
    <div className={`shuffle-stage ${isSpecial ? 'shuffle-stage--special' : ''}`} aria-hidden="true">
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} className="shuffle-card" style={{ animationDelay: `${i * 0.08}s` }} />
      ))}
    </div>
  )
}

function SpreadOptions({
  spread,
  setSpread,
  isShuffling,
}: {
  spread: SpreadType
  setSpread: (s: SpreadType) => void
  isShuffling: boolean
}) {
  return (
    <div className="spread-options" role="radiogroup" aria-label="Tipo de tiragem">
      {spreads.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="radio"
          aria-checked={spread === opt.id}
          className={`spread-option ${spread === opt.id ? 'active' : ''}`}
          onClick={() => setSpread(opt.id)}
          disabled={isShuffling}
        >
          <span className="spread-option-icon">{opt.icon}</span>
          <span className="spread-option-title">{opt.title}</span>
          <span className="spread-option-desc">{opt.desc}</span>
          <span className="spread-option-count">{opt.cardCount} cartas</span>
        </button>
      ))}
    </div>
  )
}

function ReadingResults({
  config,
  spread,
  drawn,
  question,
  summary,
}: {
  config: SpreadConfig
  spread: SpreadType
  drawn: DrawnCard[]
  question: string
  summary: ReturnType<typeof buildReadingSummary> | null
}) {
  return (
    <div className="reading-results">
      {question.trim() && (
        <p className="reading-question-display">
          <span>Pergunta</span> {question.trim()}
        </p>
      )}

      <div className={`reading-board reading-board--${spread} layout-${config.layout}`}>
        {drawn.map((item, i) => (
          <article
            key={`${item.card.id}-${i}`}
            className="reading-card-slot"
            data-position={i + 1}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="reading-position">{config.positions[i].label}</span>
            <CardImage card={item.card} reversed={item.reversed} size="lg" priority />
            <div className="reading-card-meta">
              <h3>
                {item.card.name}
                {item.reversed && <span className="reversed-badge">Invertida</span>}
              </h3>
              <p className="reading-card-desc">
                {item.reversed
                  ? `Energia internalizada. ${item.card.description}`
                  : item.card.description}
              </p>
              <Link to={`/carta/${item.card.id}`} className="card-detail-link">
                Detalhes da carta
              </Link>
            </div>
          </article>
        ))}
      </div>

      {summary && (
        <aside className="reading-summary" aria-labelledby="summary-title">
          <h2 id="summary-title">Resumo da leitura</h2>
          <p className="summary-spread-name">{summary.title}</p>
          {summary.paragraphs.map((text, i) => (
            <p key={i} className="summary-paragraph">
              {text}
            </p>
          ))}
        </aside>
      )}
    </div>
  )
}

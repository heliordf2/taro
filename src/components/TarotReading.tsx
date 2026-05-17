import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { tarotCards, type TarotCard } from '../data/tarotCards'
import {
  spreads,
  getSpreadCardCount,
  type SpreadConfig,
  type SpreadType,
} from '../data/spreads'
import { getCardImageUrl } from '../utils/cardImages'
import { buildReadingSummary, type DrawnCard } from '../utils/readingSummary'
import { CardImage } from './CardImage'

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

export function TarotReading() {
  const [spread, setSpread] = useState<SpreadType>('three')
  const [question, setQuestion] = useState('')
  const [drawn, setDrawn] = useState<DrawnCard[]>([])
  const [isShuffling, setIsShuffling] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)

  const config = spreads.find((s) => s.id === spread)!
  const count = getSpreadCardCount(spread)

  const summary = useMemo(() => {
    if (!hasDrawn || drawn.length === 0) return null
    return buildReadingSummary(spread, drawn, question)
  }, [hasDrawn, drawn, spread, question])

  const handleDraw = useCallback(() => {
    setIsShuffling(true)
    setHasDrawn(false)
    setDrawn([])

    setTimeout(() => {
      const result = drawCards(count)
      preloadImages(result)
      setDrawn(result)
      setIsShuffling(false)
      setHasDrawn(true)
    }, shuffleDuration(count))
  }, [count])

  return (
    <section className="reading-experience" aria-labelledby="reading-title">
      <header className="reading-header">
        <span className="section-label">Consulta online</span>
        <h1 id="reading-title">Sua tiragem</h1>
        <p>
          Escolha entre 1 e 10 cartas — da resposta rápida à Cruz Celta completa.
        </p>
        <Link to="/guia" className="reading-guide-link">
          Ver guia completo das 78 cartas →
        </Link>
      </header>

      <div className="reading-panel">
        <label className="reading-question-field">
          <span>Sua pergunta ou intenção <em className="optional-tag">(opcional)</em></span>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Deixe em branco para uma leitura geral do momento"
            disabled={isShuffling}
          />
        </label>

        <SpreadOptions spread={spread} setSpread={setSpread} isShuffling={isShuffling} />

        <button
          type="button"
          className="reading-draw-btn"
          onClick={handleDraw}
          disabled={isShuffling}
        >
          {isShuffling ? (
            <>
              <span className="shuffle-spinner" aria-hidden="true" />
              Embaralhando {count} cartas...
            </>
          ) : hasDrawn ? (
            'Nova tiragem'
          ) : (
            `Tirar ${count} carta${count > 1 ? 's' : ''}`
          )}
        </button>
      </div>

      {isShuffling && (
        <div className="shuffle-stage" aria-hidden="true">
          {Array.from({ length: Math.min(count, 7) }).map((_, i) => (
            <div key={i} className="shuffle-card" style={{ animationDelay: `${i * 0.08}s` }} />
          ))}
        </div>
      )}

      {hasDrawn && drawn.length > 0 && !isShuffling && (
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

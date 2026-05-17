import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  tarotCards,
  suitLabels,
  type ArcanaType,
  type Suit,
  type TarotCard,
} from '../data/tarotCards'
import { CardImage } from './CardImage'

type Filter = 'all' | ArcanaType | Suit

const filterOptions: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Todas (78)' },
  { value: 'major', label: 'Arcanos Maiores' },
  { value: 'minor', label: 'Arcanos Menores' },
  { value: 'copas', label: 'Copas' },
  { value: 'paus', label: 'Paus' },
  { value: 'espadas', label: 'Espadas' },
  { value: 'ouros', label: 'Ouros' },
]

function cardBadge(card: TarotCard): string {
  if (card.arcana === 'major') return 'Arcano Maior'
  return suitLabels[card.suit!]
}

function CardItem({ card }: { card: TarotCard }) {
  return (
    <Link to={`/carta/${card.id}`} className="tarot-card tarot-card-link">
      <CardImage card={card} size="sm" />
      <div className="tarot-card-body">
        <span className="tarot-card-badge">{cardBadge(card)}</span>
        <h3>{card.name}</h3>
        <Keywords card={card} />
        <p>{card.description}</p>
        <span className="see-more">Ver detalhes →</span>
      </div>
    </Link>
  )
}

function Keywords({ card }: { card: TarotCard }) {
  return (
    <div className="keywords">
      {card.keywords.map((kw) => (
        <span key={kw} className="keyword">
          {kw}
        </span>
      ))}
    </div>
  )
}

export function CardList() {
  const [filter, setFilter] = useState<Filter>('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    return tarotCards.filter((card) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'major' && card.arcana === 'major') ||
        (filter === 'minor' && card.arcana === 'minor') ||
        card.suit === filter

      if (!matchesFilter) return false
      if (!query) return true

      return (
        card.name.toLowerCase().includes(query) ||
        card.keywords.some((k) => k.toLowerCase().includes(query)) ||
        card.description.toLowerCase().includes(query)
      )
    })
  }, [filter, search])

  return (
    <section className="card-list" id="cartas">
      <div className="section-header">
        <span className="section-label">Baralho completo</span>
        <h2>Cartas do tarô</h2>
        <p className="section-intro">
          Explore os 78 arcanos do tarô Rider-Waite com imagens originais. Clique em qualquer
          carta para ver a página completa.
        </p>
      </div>

      <div className="card-controls">
        <input
          type="search"
          className="search-input"
          placeholder="Buscar por nome ou palavra-chave..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar cartas"
        />
        <div className="filter-group" role="group" aria-label="Filtrar cartas">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`filter-btn ${filter === opt.value ? 'active' : ''}`}
              onClick={() => setFilter(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'carta encontrada' : 'cartas encontradas'}
      </p>

      <div className="cards-grid">
        {filtered.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="no-results">Nenhuma carta corresponde à sua busca. Tente outro termo.</p>
      )}
    </section>
  )
}

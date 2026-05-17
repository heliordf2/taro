import { Link, useParams, Navigate } from 'react-router-dom'
import { getCardById, getAdjacentCards, suitLabels } from '../data/tarotCards'
import { CardImage } from '../components/CardImage'

export function CardPage() {
  const { id } = useParams<{ id: string }>()
  const card = id ? getCardById(id) : undefined

  if (!card) {
    return <Navigate to="/" replace />
  }

  const { prev, next } = getAdjacentCards(card.id)
  const badge =
    card.arcana === 'major' ? 'Arcano Maior' : suitLabels[card.suit!]

  return (
    <article className="card-page">
      <Link to="/guia#cartas" className="back-link">
        ← Voltar ao baralho
      </Link>

      <div className="card-page-layout">
        <CardImage card={card} size="lg" className="card-page-image" />

        <div className="card-page-content">
          <span className="tarot-card-badge">{badge}</span>
          {card.number !== undefined && (
            <span className="card-page-number">
              {card.arcana === 'major' ? `Arcano ${card.number}` : `#${card.number}`}
            </span>
          )}
          <h1>{card.name}</h1>

          <div className="keywords">
            {card.keywords.map((kw) => (
              <span key={kw} className="keyword">
                {kw}
              </span>
            ))}
          </div>

          <div className="card-page-description">
            <h2>Significado</h2>
            <p>{card.description}</p>
          </div>

          <div className="card-page-nav">
            {prev ? (
              <Link to={`/carta/${prev.id}`} className="card-nav-link prev">
                ← {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link to={`/carta/${next.id}`} className="card-nav-link next">
                {next.name} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

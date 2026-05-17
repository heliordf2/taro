import { specialCard } from '../data/readingAccess'

interface SpecialInvokedCardProps {
  question?: string
}

export function SpecialInvokedCard({ question }: SpecialInvokedCardProps) {
  return (
    <div className="reading-results special-reading">
      {question?.trim() && (
        <p className="reading-question-display">
          <span>Pergunta</span> {question.trim()}
        </p>
      )}

      <article className="invoked-card reading-card-slot">
        <span className="reading-position">Arcano invocado</span>
        <div className="invoked-card-image-wrap card-image-wrap card-image-lg">
          <img src={specialCard.imageUrl} alt={specialCard.title} />
        </div>
        <div className="reading-card-meta invoked-card-meta">
          <h3>{specialCard.title}</h3>

          {specialCard.traits.length > 0 && (
            <div className="invoked-traits">
              <span className="invoked-traits-label">Características místicas</span>
              <TraitTags traits={specialCard.traits} />
            </div>
          )}

        </div>
      </article>

      <aside className="reading-summary invoked-summary" aria-labelledby="invoked-summary-title">
        <h2 id="invoked-summary-title">Resumo da invocação</h2>
        <p className="summary-spread-name">{specialCard.summaryTitle}</p>
        {specialCard.mysticalText && (
          <p className="summary-paragraph">{specialCard.mysticalText}</p>
        )}
      </aside>
    </div>
  )
}

function TraitTags({ traits }: { traits: string[] }) {
  return (
    <div className="keywords invoked-trait-tags">
      {traits.map((trait) => (
        <span key={trait} className="keyword trait-tag">
          {trait}
        </span>
      ))}
    </div>
  )
}

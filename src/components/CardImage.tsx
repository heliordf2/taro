import { useState } from 'react'
import type { TarotCard } from '../data/tarotCards'
import { getCardImageUrl } from '../utils/cardImages'

interface CardImageProps {
  card: TarotCard
  reversed?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
  priority?: boolean
}

export function CardImage({
  card,
  reversed = false,
  size = 'md',
  className = '',
  priority = false,
}: CardImageProps) {
  const [error, setError] = useState(false)

  return (
    <div
      className={`card-image-wrap card-image-${size} ${reversed ? 'reversed' : ''} ${className}`.trim()}
    >
      {error ? (
        <div className="card-image-fallback" aria-hidden="true">
          <span>✦</span>
          <span>{card.name}</span>
        </div>
      ) : (
        <img
          src={getCardImageUrl(card)}
          alt={card.name}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

import type { Suit, TarotCard } from '../data/tarotCards'

const IMAGE_BASE = 'https://www.sacred-texts.com/tarot/pkt/img'

const courtSlugs: Record<Suit, Record<string, string>> = {
  copas: { pajem: 'cupa', cavaleiro: 'cukn', rainha: 'cuqu', rei: 'cuqi' },
  paus: { pajem: 'wapa', cavaleiro: 'wakn', rainha: 'waqu', rei: 'waki' },
  espadas: { pajem: 'swpa', cavaleiro: 'swkn', rainha: 'swqu', rei: 'swki' },
  ouros: { pajem: 'pepa', cavaleiro: 'pekn', rainha: 'pequ', rei: 'peki' },
}

const suitPrefix: Record<Suit, string> = {
  copas: 'cu',
  paus: 'wa',
  espadas: 'sw',
  ouros: 'pe',
}

export function getCardImageUrl(card: TarotCard): string {
  if (card.arcana === 'major') {
    const n = String(card.number).padStart(2, '0')
    return `${IMAGE_BASE}/ar${n}.jpg`
  }

  const prefix = suitPrefix[card.suit!]

  if (card.number === 1) {
    return `${IMAGE_BASE}/${prefix}ac.jpg`
  }

  if (typeof card.number === 'number') {
    return `${IMAGE_BASE}/${prefix}${String(card.number).padStart(2, '0')}.jpg`
  }

  return `${IMAGE_BASE}/${courtSlugs[card.suit!][card.number as string]}.jpg`
}

export const cardBackUrl = `${IMAGE_BASE}/back.jpg`

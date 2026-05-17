import type { TarotCard } from '../data/tarotCards'
import { getSpreadConfig, type SpreadType } from '../data/spreads'

export type { SpreadType }

export interface DrawnCard {
  card: TarotCard
  reversed: boolean
}

function formatCard(drawn: DrawnCard): string {
  return `${drawn.card.name}${drawn.reversed ? ' (invertida)' : ''}`
}

function positionParagraph(
  position: { label: string; hint: string },
  drawn: DrawnCard,
): string {
  const prefix = drawn.reversed ? 'Energia internalizada ou bloqueada. ' : ''
  return `${position.label} — ${formatCard(drawn)}: ${position.hint}. ${prefix}${drawn.card.description}`
}

export function buildReadingSummary(
  spreadId: SpreadType,
  drawn: DrawnCard[],
  question?: string,
): { title: string; paragraphs: string[] } {
  const config = getSpreadConfig(spreadId)
  const paragraphs: string[] = []

  if (question?.trim()) {
    paragraphs.push(
      `Você consultou sobre: “${question.trim()}”. As cartas abaixo dialogam com essa intenção.`,
    )
  }

  paragraphs.push(config.intro)

  if (!question?.trim()) {
    paragraphs.push(
      'Como você não definiu uma pergunta específica, as cartas refletem a energia geral do seu momento — abra-se à mensagem que ressoar com você.',
    )
  }

  drawn.forEach((item, i) => {
    const pos = config.positions[i]
    if (pos) paragraphs.push(positionParagraph(pos, item))
  })

  const names = drawn.map((d) => d.card.name)
  const keywords = [...new Set(drawn.flatMap((d) => d.card.keywords))].slice(0, 6)

  if (spreadId === 'one') {
    paragraphs.push(
      `Em síntese, os temas ${keywords.join(', ')} pedem atenção. ${config.synthesisHint}`,
    )
  } else if (spreadId === 'three') {
    paragraphs.push(
      `Leitura geral: o arco vai de ${names[0]} até ${names[2]}, passando por ${names[1]}. Fios comuns — ${keywords.join(', ')}. ${config.synthesisHint}`,
    )
  } else if (spreadId === 'five') {
    paragraphs.push(
      `Síntese: em torno de ${names[0]}, o desafio ${names[1]} e o conselho ${names[4]} mostram o caminho. Passado (${names[2]}) e futuro (${names[3]}) contextualizam a decisão. ${config.synthesisHint}`,
    )
  } else if (spreadId === 'seven') {
    paragraphs.push(
      `Síntese: do passado (${names[0]}) ao resultado (${names[6]}), a leitura atravessa obstáculos (${names[3]}) e influências ocultas (${names[2]}). O conselho em ${names[5]} é a chave prática. Temas centrais: ${keywords.join(', ')}.`,
    )
  } else {
    paragraphs.push(
      `Síntese da Cruz Celta: a situação (${names[0]}) enfrenta ${names[1]}; o desfecho em ${names[9]} integra suas esperanças e medos (${names[8]}), sua atitude (${names[6]}) e o ambiente (${names[7]}). ${config.synthesisHint}`,
    )
  }

  return {
    title: `Tiragem de ${config.cardCount} cartas — ${config.title}`,
    paragraphs,
  }
}

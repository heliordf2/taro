export type SpreadType = 'one' | 'three' | 'five' | 'seven' | 'ten'

export type SpreadLayout = 'single' | 'line' | 'cross-5' | 'horseshoe' | 'celtic'

export interface SpreadPosition {
  label: string
  hint: string
}

export interface SpreadConfig {
  id: SpreadType
  cardCount: number
  title: string
  desc: string
  icon: string
  layout: SpreadLayout
  positions: SpreadPosition[]
  intro: string
  synthesisHint: string
}

export const spreads: SpreadConfig[] = [
  {
    id: 'one',
    cardCount: 1,
    title: 'Uma carta',
    desc: 'Resposta direta ao momento',
    icon: '①',
    layout: 'single',
    intro:
      'Uma única carta concentra a energia da pergunta e aponta o que pede atenção imediata.',
    synthesisHint: 'Observe como os temas desta carta aparecem no seu dia a dia.',
    positions: [
      { label: 'Mensagem do momento', hint: 'O núcleo da resposta para sua pergunta' },
    ],
  },
  {
    id: 'three',
    cardCount: 3,
    title: 'Três cartas',
    desc: 'Passado, presente e futuro',
    icon: '③',
    layout: 'line',
    intro:
      'Três cartas contam uma história em atos — origem, momento atual e tendência. Leia-as em conjunto.',
    synthesisHint: 'Integre o que veio de trás, o que está vivo agora e para onde a energia aponta.',
    positions: [
      { label: 'Passado', hint: 'Raízes e influências que moldaram o presente' },
      { label: 'Presente', hint: 'O que está ativo agora e pede consciência' },
      { label: 'Futuro', hint: 'Tendência provável — não é destino fixo' },
    ],
  },
  {
    id: 'five',
    cardCount: 5,
    title: 'Cinco cartas',
    desc: 'Cruz da situação',
    icon: '⑤',
    layout: 'cross-5',
    intro:
      'A cruz de cinco cartas amplia o panorama: situação central, desafio, passado, futuro e conselho final.',
    synthesisHint:
      'A carta central é o coração da leitura; o conselho mostra como navegar o que as demais revelam.',
    positions: [
      { label: 'Situação', hint: 'O cerne do assunto — o que está em jogo' },
      { label: 'Desafio', hint: 'O que cruza ou tensiona a situação' },
      { label: 'Passado', hint: 'O que trouxe você até aqui' },
      { label: 'Futuro', hint: 'Para onde a situação tende a ir' },
      { label: 'Conselho', hint: 'Atitude ou caminho mais alinhado' },
    ],
  },
  {
    id: 'seven',
    cardCount: 7,
    title: 'Sete cartas',
    desc: 'Ferradura clássica',
    icon: '⑦',
    layout: 'horseshoe',
    intro:
      'A ferradura de sete cartas oferece visão ampla: passado ao presente, forças ocultas, obstáculos, ambiente, conselho e desfecho.',
    synthesisHint:
      'Leia da esquerda para a direita como um arco narrativo que culmina no resultado.',
    positions: [
      { label: 'Passado', hint: 'Eventos e padrões que precedem a situação' },
      { label: 'Presente', hint: 'O estado atual da questão' },
      { label: 'Influências ocultas', hint: 'O que opera nos bastidores' },
      { label: 'Obstáculos', hint: 'Bloqueios ou resistências a superar' },
      { label: 'Ambiente', hint: 'Pessoas e contexto ao redor' },
      { label: 'Conselho', hint: 'O que favorece seu melhor interesse' },
      { label: 'Resultado', hint: 'Desfecho provável se seguir o conselho' },
    ],
  },
  {
    id: 'ten',
    cardCount: 10,
    title: 'Dez cartas',
    desc: 'Cruz Celta',
    icon: '⑩',
    layout: 'celtic',
    intro:
      'A Cruz Celta é a tiragem mais completa do tarô: dez posições revelam camadas da situação, atitudes, ambiente e desfecho.',
    synthesisHint:
      'Comece pelo centro (situação e desafio), depois a coluna da evolução e o pilar da consciência até o resultado final.',
    positions: [
      { label: 'Situação', hint: 'O que está acontecendo agora' },
      { label: 'Desafio', hint: 'Força que cruza ou complica a situação' },
      { label: 'Base distante', hint: 'Raiz profunda ou fundação do assunto' },
      { label: 'Passado recente', hint: 'O que acabou de ocorrer' },
      { label: 'Melhor potencial', hint: 'O que pode ser alcançado no ápice' },
      { label: 'Futuro próximo', hint: 'O que se aproxima em breve' },
      { label: 'Sua atitude', hint: 'Como você se posiciona diante disso' },
      { label: 'Ambiente', hint: 'Influências externas e outras pessoas' },
      { label: 'Esperanças e medos', hint: 'Expectativas que colorem a leitura' },
      { label: 'Resultado final', hint: 'Síntese e desfecho da tiragem' },
    ],
  },
]

export function getSpreadConfig(id: SpreadType): SpreadConfig {
  return spreads.find((s) => s.id === id) ?? spreads[0]
}

export function getSpreadCardCount(id: SpreadType): number {
  return getSpreadConfig(id).cardCount
}

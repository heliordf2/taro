export type ArcanaType = 'major' | 'minor'
export type Suit = 'copas' | 'paus' | 'espadas' | 'ouros'

export interface TarotCard {
  id: string
  name: string
  arcana: ArcanaType
  suit?: Suit
  number?: number | string
  keywords: string[]
  description: string
}

const majorArcana: TarotCard[] = [
  {
    id: 'major-0',
    name: 'O Louco',
    arcana: 'major',
    number: 0,
    keywords: ['início', 'liberdade', 'fé'],
    description:
      'Representa o salto no desconhecido e a coragem de começar sem garantias. Convida a confiar no caminho, abraçar a espontaneidade e manter a mente aberta a novas experiências.',
  },
  {
    id: 'major-1',
    name: 'O Mago',
    arcana: 'major',
    number: 1,
    keywords: ['manifestação', 'habilidade', 'ação'],
    description:
      'Simboliza o poder de transformar ideias em realidade usando todos os recursos disponíveis. É o momento de agir com foco, comunicar com clareza e assumir o protagonismo da própria vida.',
  },
  {
    id: 'major-2',
    name: 'A Sacerdotisa',
    arcana: 'major',
    number: 2,
    keywords: ['intuição', 'mistério', 'silêncio'],
    description:
      'Fala de sabedoria interior e conhecimento que não se revela de imediato. Pede paciência, escuta profunda e atenção aos sinais sutis antes de tomar decisões importantes.',
  },
  {
    id: 'major-3',
    name: 'A Imperatriz',
    arcana: 'major',
    number: 3,
    keywords: ['abundância', 'criatividade', 'nutrição'],
    description:
      'Associa-se à fertilidade, ao cuidado e à expressão criativa. Indica prosperidade emocional, prazer nos sentidos e um período favorável para cultivar projetos, relacionamentos e beleza.',
  },
  {
    id: 'major-4',
    name: 'O Imperador',
    arcana: 'major',
    number: 4,
    keywords: ['estrutura', 'autoridade', 'estabilidade'],
    description:
      'Representa ordem, limites saudáveis e liderança consciente. Sugere organizar a vida com disciplina, definir metas claras e construir bases sólidas para o futuro.',
  },
  {
    id: 'major-5',
    name: 'O Hierofante',
    arcana: 'major',
    number: 5,
    keywords: ['tradição', 'ensino', 'valores'],
    description:
      'Relaciona-se a instituições, mentoria e crenças compartilhadas. Pode indicar aprendizado formal, orientação de alguém experiente ou a necessidade de alinhar-se a princípios éticos.',
  },
  {
    id: 'major-6',
    name: 'Os Amantes',
    arcana: 'major',
    number: 6,
    keywords: ['escolha', 'união', 'valores'],
    description:
      'Não fala apenas de romance, mas de decisões alinhadas ao coração. Destaca parcerias significativas, harmonia entre desejos e a importância de escolher com autenticidade.',
  },
  {
    id: 'major-7',
    name: 'O Carro',
    arcana: 'major',
    number: 7,
    keywords: ['vitória', 'determinação', 'movimento'],
    description:
      'Simboliza avanço conquistado com força de vontade e controle emocional. Indica superação de obstáculos, viagens, progresso profissional e a capacidade de manter o rumo mesmo sob pressão.',
  },
  {
    id: 'major-8',
    name: 'A Força',
    arcana: 'major',
    number: 8,
    keywords: ['coragem', 'paciência', 'compaixão'],
    description:
      'Mostra que o verdadeiro poder vem da calma interior, não da agressão. Fala de domar impulsos com gentileza, confiança em si e resistência emocional para enfrentar desafios.',
  },
  {
    id: 'major-9',
    name: 'O Eremita',
    arcana: 'major',
    number: 9,
    keywords: ['introspecção', 'busca', 'solitude'],
    description:
      'Convida a um retiro reflexivo para encontrar respostas dentro de si. É tempo de estudar, meditar e afastar distrações até que a luz da própria experiência ilumine o caminho.',
  },
  {
    id: 'major-10',
    name: 'A Roda da Fortuna',
    arcana: 'major',
    number: 10,
    keywords: ['ciclos', 'mudança', 'destino'],
    description:
      'Lembra que a vida gira em fases de alta e baixa. Sinaliza viradas inesperadas, oportunidades e a importância de adaptar-se ao fluxo natural dos acontecimentos.',
  },
  {
    id: 'major-11',
    name: 'A Justiça',
    arcana: 'major',
    number: 11,
    keywords: ['equilíbrio', 'verdade', 'consequência'],
    description:
      'Pede honestidade, responsabilidade e decisões imparciais. Relaciona-se a contratos, questões legais e ao princípio de que cada escolha traz um resultado proporcional.',
  },
  {
    id: 'major-12',
    name: 'O Enforcado',
    arcana: 'major',
    number: 12,
    keywords: ['pausa', 'perspectiva', 'entrega'],
    description:
      'Indica suspensão voluntária da ação para ver a situação de outro ângulo. Pode significar sacrifício temporário, rendição ao processo e insights que só surgem quando se para de resistir.',
  },
  {
    id: 'major-13',
    name: 'A Morte',
    arcana: 'major',
    number: 13,
    keywords: ['transformação', 'fim', 'renascimento'],
    description:
      'Raramente fala de morte literal; simboliza o encerramento necessário de um ciclo. Anuncia mudanças profundas, desapego do que não serve mais e espaço para um novo começo.',
  },
  {
    id: 'major-14',
    name: 'A Temperança',
    arcana: 'major',
    number: 14,
    keywords: ['moderação', 'cura', 'integração'],
    description:
      'Convida a encontrar o meio-termio e combinar opostos com sabedoria. Fala de cura gradual, paciência no processo e harmonia entre corpo, mente e espírito.',
  },
  {
    id: 'major-15',
    name: 'O Diabo',
    arcana: 'major',
    number: 15,
    keywords: ['apego', 'sombra', 'tentação'],
    description:
      'Revela padrões de dependência, medo ou prazeres que prendem. Não é condenação: mostra onde há ilusão de impotência e a possibilidade de recuperar liberdade ao reconhecer a própria sombra.',
  },
  {
    id: 'major-16',
    name: 'A Torre',
    arcana: 'major',
    number: 16,
    keywords: ['ruptura', 'revelação', 'libertação'],
    description:
      'Representa colapso de estruturas falsas e choques que, embora dolorosos, trazem verdade. Após a queda, surge clareza para reconstruir sobre bases mais autênticas.',
  },
  {
    id: 'major-17',
    name: 'A Estrela',
    arcana: 'major',
    number: 17,
    keywords: ['esperança', 'inspiração', 'serenidade'],
    description:
      'Traz calma após tempestades e a certeza de que há luz adiante. Fala de fé renovada, cura emocional, generosidade e conexão com um propósito maior.',
  },
  {
    id: 'major-18',
    name: 'A Lua',
    arcana: 'major',
    number: 18,
    keywords: ['ilusão', 'sonhos', 'incerteza'],
    description:
      'Navega o terreno do subconsciente, medos e intuições confusas. Alerta para enganos, ansiedade noturna e a necessidade de distinguir fantasia de realidade antes de agir.',
  },
  {
    id: 'major-19',
    name: 'O Sol',
    arcana: 'major',
    number: 19,
    keywords: ['clareza', 'alegria', 'vitalidade'],
    description:
      'É uma das cartas mais positivas: sucesso visível, energia radiante e transparência. Indica celebração, confiança, criatividade florescendo e resultados que trazem felicidade genuína.',
  },
  {
    id: 'major-20',
    name: 'O Julgamento',
    arcana: 'major',
    number: 20,
    keywords: ['despertar', 'revisão', 'chamado'],
    description:
      'Marca um momento de avaliação profunda e perdão. Pode significar segundas chances, reconciliação com o passado e resposta a um chamado que pede coragem para renascer.',
  },
  {
    id: 'major-21',
    name: 'O Mundo',
    arcana: 'major',
    number: 21,
    keywords: ['conclusão', 'realização', 'integração'],
    description:
      'Culmina um ciclo com plenitude e reconhecimento. Simboliza metas alcançadas, viagens completadas, harmonia entre todas as partes da vida e preparação para um novo arcano.',
  },
]

function minor(
  suit: Suit,
  number: number | string,
  name: string,
  keywords: string[],
  description: string,
): TarotCard {
  const suitLabel = suit
  return {
    id: `minor-${suit}-${number}`,
    name,
    arcana: 'minor',
    suit: suitLabel,
    number,
    keywords,
    description,
  }
}

const copas: TarotCard[] = [
  minor('copas', 1, 'Ás de Copas', ['amor novo', 'emoção', 'intuição'], 'Abertura do coração: novo sentimento, reconciliação ou inspiração criativa que brota com pureza.'),
  minor('copas', 2, 'Dois de Copas', ['parceria', 'harmonia', 'atração'], 'União equilibrada entre duas pessoas ou forças. Parceria afetiva, amizade profunda ou acordo mútuo.'),
  minor('copas', 3, 'Três de Copas', ['celebração', 'amizade', 'comunidade'], 'Alegria compartilhada, encontros festivos e apoio do círculo social. Tempo de celebrar conquistas juntos.'),
  minor('copas', 4, 'Quatro de Copas', ['contemplação', 'apatia', 'reencontro'], 'Pausa emocional ou insatisfação com o que se tem. Convida a olhar além da apatia e perceber novas oportunidades.'),
  minor('copas', 5, 'Cinco de Copas', ['perda', 'luto', 'arrependimento'], 'Foco no que se perdeu, mas copas ainda cheias permanecem. Processar mágoa para seguir adiante.'),
  minor('copas', 6, 'Seis de Copas', ['nostalgia', 'memórias', 'inocência'], 'Retorno ao passado, lembranças afetuosas ou reconciliação com a criança interior.'),
  minor('copas', 7, 'Sete de Copas', ['ilusão', 'opções', 'fantasia'], 'Muitas possibilidades — nem todas reais. Cuidado com sonhos dispersos e promessas vazias.'),
  minor('copas', 8, 'Oito de Copas', ['partida', 'busca', 'desapego'], 'Deixar uma situação emocional que não satisfaz mais para buscar significado mais profundo.'),
  minor('copas', 9, 'Nove de Copas', ['satisfação', 'prazer', 'desejo realizado'], 'Contentamento, conforto e desejos emocionais atendidos. Também chamada de “carta do desejo”.'),
  minor('copas', 10, 'Dez de Copas', ['felicidade', 'família', 'plenitude'], 'Harmonia doméstica, amor duradouro e realização emocional compartilhada com quem se ama.'),
  minor('copas', 'pajem', 'Pajem de Copas', ['sensibilidade', 'mensagem', 'curiosidade'], 'Notícias afetivas, convite romântico ou início de exploração artística e intuitiva.'),
  minor('copas', 'cavaleiro', 'Cavaleiro de Copas', ['romance', 'idealismo', 'charme'], 'Proposta emocional, gesto romântico ou busca movida pelo coração — com cuidado para não idealizar demais.'),
  minor('copas', 'rainha', 'Rainha de Copas', ['empatia', 'intuição', 'cuidado'], 'Maturidade emocional, escuta compassiva e profundidade intuitiva no cuidado dos outros.'),
  minor('copas', 'rei', 'Rei de Copas', ['equilíbrio', 'diplomacia', 'domínio emocional'], 'Liderança calma, controle das emoções sem reprimi-las e sabedoria para apoiar com equilíbrio.'),
]

const paus: TarotCard[] = [
  minor('paus', 1, 'Ás de Paus', ['inspiração', 'impulso', 'oportunidade'], 'Faísca criativa, novo projeto ou chamado para agir com entusiasmo e coragem.'),
  minor('paus', 2, 'Dois de Paus', ['planejamento', 'visão', 'decisão'], 'Olhar além do horizonte, planejar expansão e escolher entre caminhos com confiança.'),
  minor('paus', 3, 'Três de Paus', ['expansão', 'progresso', 'colaboração'], 'Primeiros resultados visíveis; parcerias e visão de longo prazo começam a se concretizar.'),
  minor('paus', 4, 'Quatro de Paus', ['celebração', 'estabilidade', 'lar'], 'Festividade, conquista compartilhada e base sólida — casamento, mudança feliz ou marco importante.'),
  minor('paus', 5, 'Cinco de Paus', ['conflito', 'competição', 'tensão'], 'Desacordos, rivalidade saudável ou caos criativo. Exige diálogo para não virar disputa destrutiva.'),
  minor('paus', 6, 'Seis de Paus', ['vitória', 'reconhecimento', 'orgulho'], 'Sucesso público, elogios e confiança renovada após superar desafios.'),
  minor('paus', 7, 'Sete de Paus', ['defesa', 'perseverança', 'coragem'], 'Manter posição diante da oposição. Exige convicção e estratégia para não ceder sob pressão.'),
  minor('paus', 8, 'Oito de Paus', ['velocidade', 'movimento', 'notícias'], 'Acontecimentos rápidos, viagens ou mensagens que aceleram o ritmo da situação.'),
  minor('paus', 9, 'Nove de Paus', ['resiliência', 'cautela', 'limite'], 'Cansaço após batalhas, mas força para o último esforço. Proteger-se sem fechar o coração.'),
  minor('paus', 10, 'Dez de Paus', ['peso', 'responsabilidade', 'exaustão'], 'Sobrecarga de tarefas. Hora de delegar, simplificar e aliviar fardos desnecessários.'),
  minor('paus', 'pajem', 'Pajem de Paus', ['entusiasmo', 'exploração', 'mensagem'], 'Ideias novas, estudo ou convite para aventura. Energia jovem e curiosidade criativa.'),
  minor('paus', 'cavaleiro', 'Cavaleiro de Paus', ['ação', 'aventura', 'impulsividade'], 'Movimento rápido, paixão e risco calculado — ou impulsividade que pede direção consciente.'),
  minor('paus', 'rainha', 'Rainha de Paus', ['confiança', 'independência', 'carisma'], 'Liderança magnética, autenticidade e capacidade de inspirar com calor e determinação.'),
  minor('paus', 'rei', 'Rei de Paus', ['visão', 'empreendedorismo', 'liderança'], 'Autoridade natural, visão de futuro e coragem para liderar projetos com integridade.'),
]

const espadas: TarotCard[] = [
  minor('espadas', 1, 'Ás de Espadas', ['clareza', 'verdade', 'ideia'], 'Insight mental agudo, decisão clara ou verdade que corta a confusão.'),
  minor('espadas', 2, 'Dois de Espadas', ['impasse', 'escolha', 'bloqueio'], 'Indecisão ou negação dos fatos. Equilíbrio temporário que exige coragem para decidir.'),
  minor('espadas', 3, 'Três de Espadas', ['dor', 'separação', 'tristeza'], 'Mágoa, traição ou notícia difícil. A dor é real, mas também passa e ensina.'),
  minor('espadas', 4, 'Quatro de Espadas', ['descanso', 'recuperação', 'retiro'], 'Pausa necessária para curar corpo e mente. Meditação, sono e silêncio.'),
  minor('espadas', 5, 'Cinco de Espadas', ['conflito', 'vitória vazia', 'tensão'], 'Disputa em que alguém “ganha” mas todos perdem. Refletir sobre orgulho e ética.'),
  minor('espadas', 6, 'Seis de Espadas', ['transição', 'viagem', 'alívio'], 'Deixar turbulência para águas mais calmas. Mudança que traz alívio gradual.'),
  minor('espadas', 7, 'Sete de Espadas', ['estratégia', 'sigilo', 'cautela'], 'Planejamento discreto ou desonestidade. Verificar intenções — próprias e alheias.'),
  minor('espadas', 8, 'Oito de Espadas', ['limitação', 'medo', 'prisão mental'], 'Sensação de estar preso, mas as amarras são em grande parte psicológicas.'),
  minor('espadas', 9, 'Nove de Espadas', ['ansiedade', 'pesadelo', 'culpa'], 'Preocupação excessiva, insônia ou remorso. Buscar apoio e perspectiva realista.'),
  minor('espadas', 10, 'Dez de Espadas', ['fim', 'crise', 'recomeço'], 'Ponto mais baixo de um ciclo — após o fundo, só resta subir. Encerramento definitivo.'),
  minor('espadas', 'pajem', 'Pajem de Espadas', ['curiosidade', 'vigilância', 'ideias'], 'Mente ágil, estudo ou notícias que pedem análise crítica antes de agir.'),
  minor('espadas', 'cavaleiro', 'Cavaleiro de Espadas', ['ação', 'determinação', 'pressa'], 'Avanço intelectual ou confronto direto. Velocidade que pode ser impulsiva.'),
  minor('espadas', 'rainha', 'Rainha de Espadas', ['independência', 'honestidade', 'limites'], 'Clareza mental, comunicação franca e independência emocional madura.'),
  minor('espadas', 'rei', 'Rei de Espadas', ['autoridade', 'lógica', 'justiça'], 'Julgamento imparcial, liderança intelectual e decisões baseadas em fatos e ética.'),
]

const ouros: TarotCard[] = [
  minor('ouros', 1, 'Ás de Ouros', ['oportunidade', 'prosperidade', 'manifestação'], 'Nova chance material: emprego, investimento ou semente de abundância prática.'),
  minor('ouros', 2, 'Dois de Ouros', ['equilíbrio', 'adaptação', 'flexibilidade'], 'Conciliar prioridades, fluxo financeiro e mudanças com leveza e organização.'),
  minor('ouros', 3, 'Três de Ouros', ['trabalho em equipe', 'habilidade', 'reconhecimento'], 'Colaboração profissional, aprendizado e qualidade reconhecida no que se constrói.'),
  minor('ouros', 4, 'Quatro de Ouros', ['segurança', 'conservação', 'apego'], 'Estabilidade financeira ou medo de perder. Equilibrar poupar com generosidade.'),
  minor('ouros', 5, 'Cinco de Ouros', ['escassez', 'exclusão', 'dificuldade'], 'Preocupação material ou sensação de abandono. Buscar ajuda e lembrar que o apoio existe.'),
  minor('ouros', 6, 'Seis de Ouros', ['generosidade', 'troca', 'equilíbrio'], 'Dar e receber com justiça. Caridade, mentoria ou fluxo equilibrado de recursos.'),
  minor('ouros', 7, 'Sete de Ouros', ['paciência', 'investimento', 'avaliação'], 'Esperar o fruto do trabalho. Revisar esforços e ajustar o que for necessário.'),
  minor('ouros', 8, 'Oito de Ouros', ['dedicação', 'ofício', 'aprendizado'], 'Prática constante, aperfeiçoamento e orgulho no trabalho bem feito.'),
  minor('ouros', 9, 'Nove de Ouros', ['autossuficiência', 'conforto', 'recompensa'], 'Independência, luxo merecido e satisfação com o que se construiu com esforço.'),
  minor('ouros', 10, 'Dez de Ouros', ['legado', 'família', 'abundância'], 'Prosperidade duradoura, herança, lar estável e segurança para gerações.'),
  minor('ouros', 'pajem', 'Pajem de Ouros', ['estudo', 'oportunidade', 'praticidade'], 'Novos estudos, trabalho ou mensagem sobre finanças e metas concretas.'),
  minor('ouros', 'cavaleiro', 'Cavaleiro de Ouros', ['persistência', 'rotina', 'confiabilidade'], 'Progresso lento e seguro. Disciplina, responsabilidade e resultados consistentes.'),
  minor('ouros', 'rainha', 'Rainha de Ouros', ['abundância', 'cuidado', 'praticidade'], 'Conforto, nutrição e gestão sábia dos recursos com generosidade.'),
  minor('ouros', 'rei', 'Rei de Ouros', ['sucesso', 'estabilidade', 'negócios'], 'Prosperidade consolidada, liderança prática e visão de longo prazo nos assuntos materiais.'),
]

export const tarotCards: TarotCard[] = [
  ...majorArcana,
  ...copas,
  ...paus,
  ...espadas,
  ...ouros,
]

export const suitLabels: Record<Suit, string> = {
  copas: 'Copas',
  paus: 'Paus',
  espadas: 'Espadas',
  ouros: 'Ouros',
}

const cardsById = new Map(tarotCards.map((c) => [c.id, c]))

export function getCardById(id: string): TarotCard | undefined {
  return cardsById.get(id)
}

export function getAdjacentCards(id: string): {
  prev: TarotCard | null
  next: TarotCard | null
} {
  const index = tarotCards.findIndex((c) => c.id === id)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? tarotCards[index - 1] : null,
    next: index < tarotCards.length - 1 ? tarotCards[index + 1] : null,
  }
}

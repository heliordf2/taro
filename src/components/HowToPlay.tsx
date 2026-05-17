const steps = [
  {
    title: 'Prepare o ambiente',
    text: 'Escolha um lugar tranquilo, acenda uma vela se desejar e respire fundo. O tarô funciona melhor quando você está presente e com a mente relativamente calma.',
  },
  {
    title: 'Defina uma pergunta ou intenção',
    text: 'Formule algo aberto e honesto — por exemplo: “O que preciso entender sobre esta situação?” Evite perguntas fechadas do tipo sim/não no início.',
  },
  {
    title: 'Embaralhe com atenção',
    text: 'Misture as cartas enquanto concentra-se na pergunta. Algumas pessoas cortam o baralho em três montes e remontam; outras apenas embaralham até sentir que é hora de parar.',
  },
  {
    title: 'Escolha uma tiragem',
    text: 'Para iniciantes, comece simples: uma carta para o dia, três cartas (passado, presente, futuro) ou cinco cartas em cruz. Avance para tiragens maiores conforme ganhar prática.',
  },
  {
    title: 'Interprete com contexto',
    text: 'Leia a carta à luz da pergunta, da posição na tiragem e da sua intuição. As palavras-chave ajudam, mas o significado completo surge da combinação entre cartas.',
  },
  {
    title: 'Registre e reflita',
    text: 'Anote a data, a pergunta, as cartas tiradas e suas impressões. Com o tempo, você perceberá padrões e aprofundará sua leitura simbólica.',
  },
]

const spreads = [
  { name: '1 carta', desc: 'Resposta direta — ideal para o dia a dia.' },
  { name: '3 cartas', desc: 'Passado, presente e tendência futura.' },
  { name: '5 cartas', desc: 'Cruz da situação: núcleo, desafio, passado, futuro e conselho.' },
  { name: '7 cartas', desc: 'Ferradura: visão ampla com obstáculos, ambiente e resultado.' },
  { name: '10 cartas', desc: 'Cruz Celta — a tiragem mais completa do tarô.' },
]

export function HowToPlay() {
  return (
    <section className="how-to-play" id="como-jogar">
      <div className="section-header">
        <span className="section-label">Guia para iniciantes</span>
        <h2>Como jogar tarô</h2>
        <p className="section-intro">
          O tarô é um baralho de 78 cartas usado como ferramenta de reflexão e autoconhecimento.
          Não prevê o futuro de forma fixa — ele ilumina possibilidades e ajuda você a enxergar
          a situação com mais clareza.
        </p>
      </div>
      <ol className="steps-list">
        {steps.map((step, i) => (
          <li key={step.title} className="step-item">
            <span className="step-number">{i + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <h3 className="spreads-title">Tiragens comuns</h3>
      <div className="spreads-grid">
        {spreads.map((s) => (
          <article key={s.name} className="spread-card">
            <h4>{s.name}</h4>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
      <p className="ethics-note">
        O tarô complementa a reflexão pessoal; não substitui orientação médica, jurídica ou
        psicológica profissional.
      </p>
    </section>
  )
}

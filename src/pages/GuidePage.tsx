import { Link } from 'react-router-dom'
import { HowToPlay } from '../components/HowToPlay'
import { CardList } from '../components/CardList'

export function GuidePage() {
  return (
    <>
      <GuideHero />
      <main className="guide-main">
        <HowToPlay />
        <CardList />
      </main>
    </>
  )
}

function GuideHero() {
  return (
    <div className="hero guide-hero">
      <span className="section-label">Referência completa</span>
      <h1>Guia do Tarô</h1>
      <p>
        Aprenda a consultar as cartas e explore os 78 arcanos do baralho Rider-Waite com
        imagens e significados em português.
      </p>
      <Link to="/" className="cta-button">
        Fazer uma tiragem
      </Link>
    </div>
  )
}

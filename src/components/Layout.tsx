import { Link, NavLink, Outlet } from 'react-router-dom'
import { ScrollToHash } from './ScrollToHash'

export function Layout() {
  return (
    <div className="app">
      <ScrollToHash />
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-symbol" aria-hidden="true">
              ☽
            </span>
            <span>Tarô</span>
          </Link>
          <nav className="main-nav" aria-label="Navegação principal">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Tiragem
            </NavLink>
            <NavLink to="/guia" className={({ isActive }) => (isActive ? 'active' : '')}>
              Guia
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <p>Baralho Rider-Waite · 78 cartas · Para fins de estudo e autoconhecimento</p>
      </footer>
    </div>
  )
}

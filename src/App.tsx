import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { GuidePage } from './pages/GuidePage'
import { CardPage } from './pages/CardPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="guia" element={<GuidePage />} />
          <Route path="carta/:id" element={<CardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

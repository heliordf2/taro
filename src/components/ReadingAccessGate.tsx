import { useState, type FormEvent } from 'react'
import { resolveReadingMode, type ReadingMode } from '../data/readingAccess'
import { ThamySecretBlock } from './ThamySecretBlock'

interface ReadingAccessGateProps {
  onUnlock: (mode: ReadingMode) => void
}

export function ReadingAccessGate({ onUnlock }: ReadingAccessGateProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const mode = resolveReadingMode(password)
    if (!mode) {
      setError('Senha incorreta. O oráculo não reconhece esta chave.')
      return
    }
    setError('')
    onUnlock(mode)
  }

  return (
    <div className="access-gate">
      <ThamySecretBlock variant="gate" />

      <div className="access-gate-card">
        <span className="section-label">Portal do oráculo</span>
        <h2>Entre para consultar</h2>
        <p>Leia o segredo acima. Depois, informe a senha sagrada para abrir a tiragem.</p>
        <form onSubmit={handleSubmit} className="access-gate-form">
          <label>
            <span>Senha</span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (error) setError('')
              }}
              placeholder="••••••••••••"
              autoComplete="current-password"
              autoFocus
            />
          </label>
          {error && (
            <p className="access-gate-error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="reading-draw-btn">
            Abrir tiragem
          </button>
        </form>
      </div>
    </div>
  )
}

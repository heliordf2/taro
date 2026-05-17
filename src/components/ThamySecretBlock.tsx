import { specialCard } from '../data/readingAccess'

interface ThamySecretBlockProps {
  variant?: 'gate' | 'card'
}

export function ThamySecretBlock({ variant = 'card' }: ThamySecretBlockProps) {
  if (!specialCard.secretText) return null

  return (
    <div
      className={`invoked-secret ${variant === 'gate' ? 'invoked-secret--gate' : ''}`}
      role="note"
      aria-label="Segredo do nome proibido"
    >
      <span className="invoked-secret-label">☽ Segredo do oráculo</span>
      {specialCard.forbiddenName ? (
        <p className="invoked-forbidden-name">
          <span>Nunca a chame de</span>
          <strong className="forbidden-word">{specialCard.forbiddenName}</strong>
        </p>
      ) : (
        <p className="invoked-forbidden-hint">
          O nome proibido permanece oculto — apenas sentido no silêncio entre as cartas.
        </p>
      )}
      <p className="invoked-secret-text">{specialCard.secretText}</p>
    </div>
  )
}

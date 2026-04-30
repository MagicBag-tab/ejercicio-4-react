import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Esta página no existe en el Olimpo 🏛️</p>
      <Link to="/" style={{ color: 'var(--accent)' }}>
        Volver al inicio
      </Link>
    </div>
  )
}
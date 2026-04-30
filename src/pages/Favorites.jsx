import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div>
      <Navbar title="Epic: The Musical" />
      <div className="section-header">
        <h2>Mis Favoritos</h2>
      </div>
      {favorites.length === 0 ? (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '80px 32px',
          gap: 16
        }}>
          <p style={{ color: 'var(--text)', fontSize: 16 }}>
            No tienes favoritos aún
          </p>
        </div>
      ) : (
        <div className="cards-grid">
          {favorites.map(f => (
            <Card
              key={`${f.type}-${f.id}`}
              to={f.type === 'saga' ? `/sagas/${f.id}` : `/sagas/1/songs/${f.id}`}
              title={f.title}
              imageUrl={f.image_url}
            />
          ))}
        </div>
      )}
    </div>
  )
}
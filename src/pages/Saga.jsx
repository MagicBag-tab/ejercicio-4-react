import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import NotFound from './NotFound'

const TOTAL_SAGAS = 9

export default function Saga() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [saga, setSaga] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const { toggleFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    setLoading(true)
    fetch(`https://epic-api.onrender.com/sagas/${id}`)
      .then(res => {
        if (!res.ok) {
          setNotFound(true)
          setLoading(false)
          return
        }
        return res.json()
      })
      .then(data => {
        if (!data) return
        setSaga(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p style={{ padding: 32 }}>Cargando...</p>
  if (notFound) return <NotFound />

  const fav = isFavorite(saga.id, 'saga')
  const sagaId = parseInt(id)

  return (
    <div>
      <Navbar title="Epic: The Musical" />
      <div className="saga-detail">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Volver
        </Link>
        <div className="saga-header">
          <img src={saga?.image_url} alt={saga?.title} />
          <div className="saga-info">
            <p className="saga-eyebrow">Saga {id} de {TOTAL_SAGAS}</p>
            <h1>{saga?.title}</h1>
            <p>{saga?.description}</p>
            <button
              className={`fav-btn ${fav ? 'active' : ''}`}
              onClick={() => toggleFavorite({ id: saga.id, type: 'saga', title: saga.title, image_url: saga.image_url })}
            >
              <Heart size={16} fill={fav ? 'currentColor' : 'none'} />
              {fav ? 'En favoritos' : 'Agregar a favoritos'}
            </button>
            <div className="saga-nav">
              {sagaId > 1 && (
                <button className="saga-nav-btn" onClick={() => navigate(`/sagas/${sagaId - 1}`)}>
                  <ArrowLeft size={16} /> Anterior
                </button>
              )}
              {sagaId < TOTAL_SAGAS && (
                <button className="saga-nav-btn" onClick={() => navigate(`/sagas/${sagaId + 1}`)}>
                  Siguiente <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
        <h2 style={{ marginBottom: 24 }}>Canciones</h2>
        <div className="cards-grid">
          {saga?.songs.map(song => (
            <Card
              key={song.id}
              to={`/sagas/${id}/songs/${song.id}`}
              title={song.title}
              description={song.description}
              imageUrl={song.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
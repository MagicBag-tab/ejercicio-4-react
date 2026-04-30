import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import PropTypes from 'prop-types'

export default function Saga() {
  const { id } = useParams()
  const [saga, setSaga] = useState(null)
  const [loading, setLoading] = useState(true)
  const { toggleFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    fetch(`https://epic-api.onrender.com/sagas/${id}`)
      .then(res => res.json())
      .then(data => {
        setSaga(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <Navbar title="Epic: The Musical" />
      <Link to="/">← Volver</Link>
      <h1>{saga?.title}</h1>
      <img src={saga?.image_url} alt={saga?.title} />
      <p>{saga?.description}</p>
      <button onClick={() => toggleFavorite({ id: saga.id, type: 'saga', title: saga.title })}>
        {isFavorite(saga.id, 'saga') ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
      </button>
      <h2>Canciones</h2>
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
  )
}

Saga.propTypes = {
  id: PropTypes.string,
}
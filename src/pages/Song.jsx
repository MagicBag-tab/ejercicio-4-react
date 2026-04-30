import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import Navbar from '../components/Navbar'
import PropTypes from 'prop-types'

export default function Song() {
  const { id, songId } = useParams()
  const [song, setSong] = useState(null)
  const [loading, setLoading] = useState(true)
  const { toggleFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    fetch(`https://epic-api.onrender.com/songs/${songId}`)
      .then(res => res.json())
      .then(data => {
        setSong(data)
        setLoading(false)
      })
  }, [songId])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <Navbar title="Epic: The Musical" />
      <Link to={`/sagas/${id}`}>← Volver a la saga</Link>
      <h1>{song?.title}</h1>
      <img src={song?.image_url} alt={song?.title} />
      <p>{song?.description}</p>
      <p>🎤 {song?.singers}</p>
      <button onClick={() => toggleFavorite({ id: song.id, type: 'song', title: song.title })}>
        {isFavorite(song.id, 'song') ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
      </button>
    </div>
  )
}

Song.propTypes = {
  songId: PropTypes.string,
}
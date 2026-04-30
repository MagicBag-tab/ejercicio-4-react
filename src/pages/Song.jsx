import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { ArrowLeft, Heart, Mic } from 'lucide-react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import NotFound from './NotFound'

export default function Song() {
  const { id, songId } = useParams()
  const [song, setSong] = useState(null)
  const [saga, setSaga] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const { toggleFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    Promise.all([
      fetch(`https://epic-api.onrender.com/songs/${songId}`),
      fetch(`https://epic-api.onrender.com/sagas/${id}`),
    ]).then(async ([songRes, sagaRes]) => {
      if (!songRes.ok || !sagaRes.ok) {
        setNotFound(true)
        setLoading(false)
        return
      }
      const [songData, sagaData] = await Promise.all([songRes.json(), sagaRes.json()])
      setSong(songData)
      setSaga(sagaData)
      setLoading(false)
    })
  }, [songId, id])

  if (loading) return <p style={{ padding: 32 }}>Cargando...</p>
  if (notFound) return <NotFound />

  const fav = isFavorite(song.id, 'song')
  const otrasCanciones = saga?.songs.filter(s => s.id !== song.id)

  return (
    <div>
      <Navbar title="Epic: The Musical" />
      <div className="song-detail">
        <Link to={`/sagas/${id}`} className="back-link">
          <ArrowLeft size={16} /> Volver a {saga?.title}
        </Link>
        <h1>{song?.title}</h1>
        <img src={song?.image_url} alt={song?.title} />
        <p style={{ marginBottom: 24 }}>{song?.description}</p>
        <div className="song-meta">
          <p className="song-singers">
            <Mic size={16} /> {song?.singers}
          </p>
          <button
            className={`fav-btn ${fav ? 'active' : ''}`}
            onClick={() => ttoggleFavorite({ id: song.id, type: 'song', title: song.title, image_url: song.image_url })}
          >
            <Heart size={16} fill={fav ? 'currentColor' : 'none'} />
            {fav ? 'En favoritos' : 'Agregar a favoritos'}
          </button>
        </div>
        {otrasCanciones?.length > 0 && (
          <div className="other-songs">
            <h2>Otras canciones de {saga?.title}</h2>
            <div className="cards-grid-small">
              {otrasCanciones.map(s => (
                <Card
                  key={s.id}
                  to={`/sagas/${id}/songs/${s.id}`}
                  title={s.title}
                  description={s.description}
                  imageUrl={s.image_url}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
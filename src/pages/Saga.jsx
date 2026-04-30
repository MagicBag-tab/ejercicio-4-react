import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

export default function Saga() {
  const {id} = useParams()
  const [saga, setSaga] = useState(null)
  const [loading, setLoading] = useState(true)

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
      <h1>{saga?.title}</h1>
      <img src={saga?.image_url} alt={saga?.title} />
      <p>{saga?.description}</p>
      <h2>Canciones</h2>
      <ul>
        {saga?.songs.map(song => (
          <li key={song.id}>
            <Link to={`/sagas/${id}/songs/${song.id}`}>
              {song.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
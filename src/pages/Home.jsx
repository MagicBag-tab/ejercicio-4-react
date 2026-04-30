import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [sagas, setSagas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://epic-api.onrender.com/sagas')
      .then(res => res.json())
      .then(data => {
        setSagas(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <h1>Epic: The Musical</h1>
      {sagas.map(saga => (
        <Link to={`/sagas/${saga.id}`} key={saga.id}>
          <img src={saga.image_url} alt={saga.title} />
          <h2>{saga.title}</h2>
          <p>{saga.description}</p>
        </Link>
      ))}
    </div>
  )
}
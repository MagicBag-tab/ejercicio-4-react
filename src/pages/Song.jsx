import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Song() {
  const { id, songId } = useParams()
  const [song, setSong] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://epic-api.onrender.com/songs/${songId}`)
      .then(res => res.json())
      .then(data => {
        setSong(data)
        setLoading(false)
      })
  }, [id, songId])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <h1>{song?.title}</h1>
      <p>{song?.description}</p>
    </div>
  )
}
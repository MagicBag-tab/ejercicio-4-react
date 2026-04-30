import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

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

  if (loading) return <p style={{ padding: 32 }}>Cargando...</p>

  return (
    <div>
      <Navbar title="Epic: The Musical" />
      <Hero sagas={sagas} />
      <div className="section-header">
        <h2>Las Sagas</h2>
        <p>Nueve sagas que narran el viaje de Odiseo desde Troya hasta Ítaca</p>
      </div>
      <div className="cards-grid">
        {sagas.map(saga => (
          <Card
            key={saga.id}
            to={`/sagas/${saga.id}`}
            title={saga.title}
            description={saga.description}
            imageUrl={saga.image_url}
          />
        ))}
      </div>
    </div>
  )
}
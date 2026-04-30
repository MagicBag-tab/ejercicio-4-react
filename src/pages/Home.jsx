import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  const [sagas, setSagas] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://epic-api.onrender.com/sagas')
      .then(res => res.json())
      .then(data => {
        setSagas(data)
        setLoading(false)
      })
  }, [])

  const goToRandom = () => {
    const random = Math.floor(Math.random() * sagas.length) + 1
    navigate(`/sagas/${random}`)
  }

  const filteredSagas = sagas.filter(saga =>
    saga.title.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p style={{ padding: 32 }}>Cargando...</p>

  return (
    <div>
      <Navbar title="Epic: The Musical" />
      <Hero sagas={sagas} />
      <div className="section-header">
        <h2>Las Sagas</h2>
        <p>Nueve sagas que narran el viaje de Odiseo desde Troya hasta Itaca</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar saga..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={goToRandom} className="fav-btn">
            Saga aleatoria
          </button>
        </div>
      </div>
      {filteredSagas.length === 0 ? (
        <p style={{ padding: '32px', textAlign: 'center', color: 'var(--text)' }}>
          No se encontraron sagas con ese nombre.
        </p>
      ) : (
        <div className="cards-grid">
          {filteredSagas.map(saga => (
            <Card
              key={saga.id}
              to={`/sagas/${saga.id}`}
              title={saga.title}
              description={saga.description}
              imageUrl={saga.image_url}
            />
          ))}
        </div>
      )}
    </div>
  )
}
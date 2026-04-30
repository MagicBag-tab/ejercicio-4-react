import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PropTypes from 'prop-types'

export default function Hero({ sagas }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % sagas.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [sagas.length])

  const prev = () => setCurrent(prev => (prev - 1 + sagas.length) % sagas.length)
  const next = () => setCurrent(prev => (prev + 1) % sagas.length)

  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={sagas[current]?.image_url} alt={sagas[current]?.title} />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Saga {current + 1} de {sagas.length}</p>
        <h1 className="hero-title">Epic: The Musical</h1>
        <p className="hero-saga-name">{sagas[current]?.title}</p>
        <p className="hero-description">{sagas[current]?.description}</p>
        <div className="hero-controls">
          <button onClick={prev} className="hero-btn">
            <ChevronLeft size={20} />
          </button>
          <div className="hero-dots">
            {sagas.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button onClick={next} className="hero-btn">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  sagas: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
}
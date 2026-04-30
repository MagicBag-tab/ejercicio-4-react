import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Card({ to, title, description, imageUrl }) {
  return (
    <Link to={to} className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  )
}

Card.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
}
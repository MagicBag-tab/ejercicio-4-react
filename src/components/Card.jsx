import { Link } from 'react-router-dom'

export default function Card({ to, title, description, imageUrl }) {
  return (
    <Link to={to} className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  )
}
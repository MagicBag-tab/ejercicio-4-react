import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar({ title }) {
  return (
    <nav className="navbar">
      <Link to="/">{title}</Link>
      <Link to="/favorites">Favoritos</Link>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

import { Link } from "react-router-dom"
import './navigation.css'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">about us</Link>
        </li>
        <li>
        <Link to="/form">Services</Link>
        </li>
        <li>
        <Link to="/Chart">Chart</Link>
        </li>
      </ul>
    </nav>
  )
}

import { NavLink } from "react-router-dom"
import logo from "../assets/logo/logo.png"

function Header() {
  return (
    <header>
      <img className="header-logo" src={logo} alt="Logo Kasa" />
      <nav className="navbar">
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? "is-active" : "")}>
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "is-active" : "")}>
          À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header

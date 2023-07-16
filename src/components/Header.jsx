import { NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logo/logo.png"

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header>
      <img
        className={
          location.pathname === "/" ? "header-logo-home" : "header-logo"
        }
        src={logo}
        alt="Logo Kasa"
        onClick={() => {
          navigate("/")
        }}
      />
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

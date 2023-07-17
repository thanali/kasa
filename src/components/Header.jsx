import { NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logo/logo.png"
import burger from "../assets/icons/burger-menu.svg"

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
        <label htmlFor="toggle" className="navbar-toggle">
          <img src={burger} alt="Menu" />
        </label>
        <input type="checkbox" name="toggle" id="toggle" />
        <ul>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "is-active" : "")}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "is-active" : "")}>
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

import { NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logo/logo.svg"
import burger from "../assets/icons/burger-menu.svg"
import { useState } from "react"

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const toggle = () => setIsNavExpanded(!isNavExpanded)

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
      <nav>
        <button className="toggle" onClick={toggle}>
          <img src={burger} alt="Menu" />
        </button>
        <div className={isNavExpanded ? "navbar-expanded" : "navbar"}>
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
        </div>
      </nav>
    </header>
  )
}

export default Header

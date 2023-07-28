import { useState } from "react"
import arrow from "../assets/icons/arrowDrop.svg"

function Dropdown({ title, content }) {
  // Mise en place de l'état et set l'état de départ à fermé
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <h3>{title}</h3>
        <button
          className="dropdown-inner-button"
          type="button"
          onClick={toggle}>
          <img
            src={arrow}
            className={!isOpen ? "arrowUp" : "arrowDown"}
            alt={isOpen ? "fermer" : "ouvrir"}
          />
        </button>
      </div>

      <div className={`dropdown-content ${isOpen ? "visible" : ""}`}>
        <ul>{content}</ul>
      </div>
    </div>
  )
}

export default Dropdown

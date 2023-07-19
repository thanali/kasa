import { useState } from "react"
import arrow from "../assets/icons/arrowDrop.svg"

function Dropdown({ title, content }) {
  //dropdown fermé par default
  const [isOpen, setIsOpen] = useState(false)
  //fonction anonyme qui renvoit l'inverse du set mis en place et le remplace
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

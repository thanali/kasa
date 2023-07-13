import { useState } from "react"
import arrowDown from "../assets/icons/arrowDown.svg"
import arrowUp from "../assets/icons/arrowUp.svg"

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false) //dropdown fermé par default
  const toggle = () => setIsOpen(!isOpen) //fonction anonyme qui renvoit l'inverse du set mis en place et le remplace

  return (
    <div className="dropdown">
      <div className="dropdown-inner">
        <h3 className="dropdown-inner-title">{title}</h3>
        <button
          className="dropdown-inner-button"
          type="button"
          onClick={toggle}>
          <img
            src={isOpen ? arrowDown : arrowUp}
            alt={isOpen ? "fermer" : "ouvrir"}
          />
        </button>
      </div>
      <div className={isOpen ? "show-dropdown" : "hide-dropdown"}>
        {content}
      </div>
    </div>
  )
}

export default Dropdown

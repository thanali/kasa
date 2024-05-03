import db from "../datas/db"
import Slider from "../components/Slider"
import { useParams } from "react-router-dom"
import Dropdown from "../components/Dropdown"
import emptyStar from "../assets/icons/star-empty.svg"
import fullStar from "../assets/icons/star-active.svg"
import ErrorPage from "./ErrorPage"

function Accomodation() {
  // Renvoie automatique en haut de page au chargement
  window.scroll(0, 0)

  // Récupère le paramètre de la Route
  const { id } = useParams()
  // Le compare avec les données
  const data = db && db.find(el => el.id === id)

  // Consition si les id correspondent
  if (data) {
    // Récupère les props du paramètre qui correspond
    const {
      title,
      pictures,
      location,
      tags,
      description,
      host,
      rating,
      equipments
    } = data
    // Recherche les espaces, les retire et créé un nouveau tableau d'éléments
    const nameTag = host.name.split(" ")

    return (
      <section className="accomodation">
        <Slider imgList={pictures} title={title} />

        <div className="accomodation-content">
          <div className="acc-text">
            <h1 className="acc-text-title">{title}</h1>
            <p className="acc-text-location">{location}</p>

            <div className="tags">
              {tags &&
                tags.map((content, index) => (
                  <div key={`${index}-tag`} className="tag">
                    <h3>{content}</h3>
                  </div>
                ))}
            </div>
          </div>

          <div className="host-rating">
            <div className="host">
              <img src={host.picture} alt={host.name} />
              <div className="host-name">
                {nameTag.map(el => (
                  <p key={el}>{el}</p>
                ))}
              </div>
            </div>

            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <img
                  key={`${index}-star`}
                  src={rating < index + 1 ? emptyStar : fullStar}
                  alt={
                    rating < index + 1 ? "Étoile vide" : "Étoile sélectionnée"
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="accomodation-dropdowns">
          <Dropdown title={"Description"} content={description} />
          <Dropdown
            title={"Équipements"}
            content={equipments.map((el, index) => (
              <li key={`${index}-equipment`}>{el}</li>
            ))}
          />
        </div>
      </section>
    )
  } else {
    return <ErrorPage />
  }
}

export default Accomodation

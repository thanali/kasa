import { Link } from "react-router-dom"

function Card({ id, title, img, location }) {
  return (
    <>
      <div className="card">
        <Link to={`/accomodation/${id}`}>
          <img src={img} alt={location} className="card-img" />
          <h2 className="card-title">{title}</h2>
        </Link>
      </div>
    </>
  )
}

export default Card

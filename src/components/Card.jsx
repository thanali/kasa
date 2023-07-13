import { Link } from "react-router-dom"

function Card({ id, title, img, location }) {
  return (
    <div>
      <Link to={`/accomodation/${id}`}>
        <div className="card">
          <img src={img} alt={location} className="card-img" />
          <h2 className="card-title">{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Card

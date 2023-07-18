import { useLocation } from "react-router-dom"

function Banner({ image, title, content }) {
  let location = useLocation()

  return (
    <div className="banner">
      <img
        className={
          location.pathname === "/" ? "img-banner-homepage" : "img-banner"
        }
        src={image}
        alt={title}
      />
      <h1 className="banner-text">{content}</h1>
    </div>
  )
}

export default Banner

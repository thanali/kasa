import { useLocation } from "react-router-dom"

function Banner({ image, title, content }) {
  let location = useLocation()

  return (
    <div className="banner">
      <img
        className={
          location.pathname === "/" ? "banner-homepage" : "banner-about"
        }
        src={image}
        alt={title}
      />
      <h1 className="banner-text">{content}</h1>
    </div>
  )
}

export default Banner

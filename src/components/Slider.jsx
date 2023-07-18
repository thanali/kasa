import { useState } from "react"
import arrowLeft from "../assets/icons/arrowLeft.svg"
import arrowRight from "../assets/icons/arrowRight.svg"

function Slider({ imgList, title }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? imgList.length - 1 : currentSlide - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === imgList.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className="slider">
      <img src={imgList[currentSlide]} alt={title} className="slider-img" />

      {imgList.length > 1 ? (
        <div className="slider-navigation">
          <button type="button" className="button-prev" onClick={prevSlide}>
            <img src={arrowLeft} alt="Précédente" />
          </button>
          <span>
            {currentSlide + 1}/{imgList.length}
          </span>
          <button type="button" className="button-next" onClick={nextSlide}>
            <img src={arrowRight} alt="Suivante" />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Slider

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img className="banner-img" src={image} alt={title} />
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner

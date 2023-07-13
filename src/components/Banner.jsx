function Banner({ image, title }) {
  return (
    <div className="banner">
      <img className="banner-img" src={image} alt={title} />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner

function Banner({ image, title, content }) {
  return (
    <div className="banner">
      <img className="banner-img" src={image} alt={title} />
      <h1 className="banner-text">{content}</h1>
    </div>
  )
}

export default Banner

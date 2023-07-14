import Banner from "../components/Banner"
import cliff from "../assets/images/cliff.png"
import Card from "../components/Card"
import datas from "../datas/db"

function Home() {
  return (
    <>
      <Banner
        image={cliff}
        title={"Cliff"}
        content={"Chez vous, partout et ailleurs"}
      />
      <section className="card-container">
        {datas &&
          datas.map(({ id, title, cover, location }, index) => (
            <Card
              key={`${id}-${index}`}
              id={id}
              img={cover}
              location={location}
              title={title}
            />
          ))}
      </section>
    </>
  )
}

export default Home

import Banner from "../components/Banner"
import cliff from "../assets/images/cliff.png"
import Card from "../components/Card"
import { data } from "../data/data"

function Home() {
  return (
    <>
      <Banner image={cliff} title={"Cliff"} />
      <section className="card-container">
        {data.map(({ id, title, cover, location }, index) => (
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

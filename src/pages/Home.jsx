import Banner from "../components/Banner"
import cliff from "../assets/images/cliff.png"
import Card from "../components/Card"
import db from "../datas/db"
import { useLoaderData } from "react-router-dom"

// Mise en situation d'un fetch des données
export async function loader() {
  const datas = await db
  return { datas }
}

function Home() {
  // Renvoie automatiquement une response.json()
  const { datas } = useLoaderData()

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

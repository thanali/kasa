import Banner from "../components/Banner"
import Dropdown from "../components/Dropdown"
import mountains from "../assets/images/mountains.png"
import dataAbout from "../datas/aboutListContent"

function About() {
  return (
    <>
      <Banner image={mountains} title={"Mountains"} />
      <section className="dropdown-container">
        {dataAbout &&
          dataAbout.map(({ title, content }) => (
            <Dropdown key={title} title={title} content={content} />
          ))}
      </section>
    </>
  )
}

export default About

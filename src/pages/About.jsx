import Banner from "../components/Banner"
import Dropdown from "../components/Dropdown"
import mountains from "../assets/images/mountains.png"

function About() {
  return (
    <>
      <Banner image={mountains} title={"Mountains"} />
      <Dropdown />
    </>
  )
}

export default About

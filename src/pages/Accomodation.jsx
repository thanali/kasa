import datas from "../datas/db"
import Slider from "../components/Slider"
import { useParams } from "react-router-dom"

function Accomodation() {
  const { id } = useParams()
  const data = datas && datas.find(el => el.id === id)
  const { title, pictures } = data

  return (
    <section id={id}>
      <Slider key={`${title}-${id}`} imgList={pictures} title={title} />
    </section>
  )
}

export default Accomodation

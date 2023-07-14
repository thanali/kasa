import data from "../datas/db"
import Slider from "../components/Slider"

function Accomodation() {
  return (
    <>
      {data &&
        data.map(({ title, pictures, id }) => (
          <Slider key={`${title}-${id}`} imgList={pictures} title={title} />
        ))}
    </>
  )
}

export default Accomodation

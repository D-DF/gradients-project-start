import Gradient from "./Gradient"
import {gradients} from "../gradients"


const GradientsList = () => {
  return (
    <ul className="row list-unstyled">
      {gradients.map(el => <Gradient key={el.name} colorStart={el.start} colorEnd={el.end} name={el.name}  tags={el.tags}/>)
      }
    </ul>
  )
}

export default GradientsList


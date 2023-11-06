import { Button } from "../Button/Button"
import { Count } from "../Count/Count"

export const Card = ({ name, description, stock }) => {
  return (
    <div className="border border-1 border-dark rounded-3 col-5 p-3 m-2" >
        <h5> {name} </h5>
        <p> {description} </p>
        <div className="col-6">
            <Count max={stock} />
            <Button text="Agregar al carrito" />
        </div>
    </div>
  )
}

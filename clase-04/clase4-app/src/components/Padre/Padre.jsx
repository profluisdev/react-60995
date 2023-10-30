import { Hijo } from "../Hijo/Hijo"


export const Padre = () => {
  console.log("Cambio estado componente padre")
  return (
    <>
    <div>Componente Padre</div>
    <Hijo mensaje="Hola hijo" mesada={100} />
    </>
  )
}


import './App.css'

function App() {

  const nombre = "Miguel";
  const nombres = ["Luis", "Miguel", "Diego", "Sofia"];

  return (
    <>
        <h1>Hola Mundo !!!</h1>
        <p id="nombre">Nombre: {nombre} </p>
        <p>Listado de nombres</p>
        <ul>
          {nombres.map( nombre => <li>{nombre}</li> )}
        </ul>
    </>
  )
}

export default App

import styles from "./app.module.css";
import stylesMain from "./main.module.css";

function App() {
    const name = "Luis";
    const edad = 19;
    const person = {
      name: "Julio",
      age: 22
    }
  return (
    <div>
      <h1 style={{color: "red", fontSize: "5rem"}} >Nombre: { name }</h1>
      <h2 className={styles.textBlue} >Estilos con css module</h2>
      <h2 className={stylesMain.textBlue} >Estilos con css del main</h2>
      <h2 className={`${styles.textGreen} ${styles.textSize}`} >Estilos con dos clases css module</h2>
      <h2 className="mt-5 text-primary border border-5 p-3 w-25">Estilos con bootstrap</h2>

      { edad >= 18 ? <p>Es mayor de edad</p> : <p>Es menor de edad</p> }
      { name === "Juan" ? <h1>Holaaa {name}</h1> : <h1>Quien sos vos? anda pallaaa</h1> }
      <p>Nombre: {person.name}</p>
      <p>Edad: {person.age}</p>
    </div>
  )
}

export default App

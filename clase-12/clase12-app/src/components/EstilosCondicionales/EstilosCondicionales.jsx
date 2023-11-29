import styles from "./EstilosCondicionales.module.css"

export const EstilosCondicionales = ({status}) => {
  return (
    <div>
        <h3 style={{ color: status ? "green" : "red" }}> Estilo condicional en linea </h3>
        <h3 className={ status ? styles.colorBlue : styles.colorOrange }> Estilo condicional con className y ternario </h3>
        <h3 className={ status && styles.colorBlue}> Estilo condicional con className y operador and && </h3>
    </div>
  )
}


// Lo mismo pueden hacer con clases css personalizadas
import styles from "./button.module.css"

export const Button = ({ text = "Botón", variant = "btn-primary", functionClick, color, bClass}) => {
    const textColor = styles[color];
  return (
    <button className={`btn ${variant} m-2 ${styles[color]} ${bClass}`} onClick={functionClick} > { text } </button>
  )
}

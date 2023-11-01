
import styles from "./button.module.css"

export const Button = ({text = "Botón", variant = "btn-primary", variantCss, textColor}) => {
    const css = styles[variantCss]
    const color = styles[textColor]
  return (
    <button className={`btn ${variant} mt-2`} > {text} </button>
    // <button className={` ${css} ${color} mt-2 `} > {text} </button>
  )
}

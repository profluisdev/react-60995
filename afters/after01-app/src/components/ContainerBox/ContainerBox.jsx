
import styles from "./conatiner.module.css"

export const ContainerBox = ({ greeting }) => {
  return (
    <div className={styles.color} > { greeting } </div>
  )
}

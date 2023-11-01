// import styles from "./card.module.css"

import { Button } from "../Button/Button";

export const Card = ({ title, message }) => {
  return (
    // <div className={styles.ancho} >Card</div>
    <div className="card w-25 p-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{message}</p>
      </div>
      <Button text="Detalles" variantCss={"purple"} textColor={"textColorWhite"} />
    </div>
  );
};

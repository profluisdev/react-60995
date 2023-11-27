import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CartContext } from "../../context/CartContext";


export const Component2 = () => {
  const { nombre, apellido, message } = useContext(GlobalContext);
  const { addItem } = useContext(CartContext);
  const item = {
    name: "Zapato",
    price: 300
  }
  return (
    <>
      <h2>Componente 2</h2>
      <p>Nombre: {nombre} </p>
      <p>Apellido: {apellido} </p>
      <p>Mensaje: {message} </p>
      <button onClick={ () => addItem(item, 4) } >Agregar al carrito</button>
      <hr />
    </>
  );
};

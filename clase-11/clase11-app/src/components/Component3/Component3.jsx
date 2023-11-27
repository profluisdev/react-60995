import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CartContext } from "../../context/CartContext";

export const Component3 = () => {
  const { handleMessage } = useContext(GlobalContext);
  const { cart } = useContext(CartContext);
  console.log(cart)
  return (
    <>
      <h2>Componente 3</h2>
      <label htmlFor="">Escribe el mensaje</label>
      <input type="text" onChange={handleMessage} />
      <h2>Carrito</h2>
      { cart.map( (item, index) => (
        <div key={index}>
          <p>Nombre: {item.name}</p>
          <p>Precio: {item.price}</p>
          <p>Cantidad: {item.quantity}</p>
        </div>
      ))}
      <hr />
    </>
  );
};

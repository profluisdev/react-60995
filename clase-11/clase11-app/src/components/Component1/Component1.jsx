import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const Component1 = ( ) => {
  const { nombre, message } = useContext(GlobalContext);


  return (
    <>
      <h2>Componente 1</h2>
      <p>Nombre: {nombre} </p>
      <p>Mensaje: {message} </p>

      <hr />
    </>
  );
};

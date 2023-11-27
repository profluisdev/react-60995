import { createContext, useState } from "react";

// Creamos el contexto
export const GlobalContext = createContext(null);

// Creamos el provider
export const GlobalContextProvider = ({ children }) => {
  // Toda la información que requiera ser compartida a nivel global
  // Se puede aplicar la lógica del carrito
  // Se pueden almacenar los productos
  // Se pueden hacer el consumo de una api y almacenar en un estado global su información

  const [message, setMessage] = useState("");

  const handleMessage = (e) => { 
    setMessage(e.target.value)
   }

  const nombre = "Juan";
  const apellido = "Perez";
  // const nombres = [ "jua"];

  const objetValue = {
    nombre,
    apellido,
    message,
    handleMessage
  };

  return <GlobalContext.Provider value={objetValue}> {children} </GlobalContext.Provider>;
};

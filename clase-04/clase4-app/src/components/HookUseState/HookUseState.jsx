import { useState } from "react";

export const HookUseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const changeName = () => {
    setName("Jose");
  };

  const deleteName = () => {
    setName("");
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  console.log("Cambio de estado");

  return (
    <>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button>
      <button onClick={reset}>Resetear</button>
      <hr />
      <h2>Nombre: {name} </h2>
      <button onClick={changeName}>Poner nombre</button>
      <button onClick={deleteName}>Borrar nombre</button>
    </>
  );
};

import { useState } from "react";

export const useCount = (initial = 0, max) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count === max) {
      return setCount(count);
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(count);
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initial);
  };

  // Retornamos las variables y funciones que son utilizadas de nuestro hook
  return {
    count,
    increment,
    decrement,
    reset,
  };
};

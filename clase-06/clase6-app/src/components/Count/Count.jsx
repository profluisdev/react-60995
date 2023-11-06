import { useState } from "react";
import { Button } from "../Button/Button";

export const Count = ({initial = 0, max}) => {

  const [count, setCount] = useState(initial);

  const increment = () => {
    if(count === max) {
      return setCount(count);
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };
  return (
    <>
      {/* <button className="btn btn-outline-secondary mx-3" onClick={increment}>+</button> */}
      <Button text="+" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={increment} />
      <strong>{count}</strong>
      <Button text="-" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={decrement} />
    </>
  );
};

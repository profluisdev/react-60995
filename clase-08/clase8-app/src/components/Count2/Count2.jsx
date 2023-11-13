import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";

export const Count2 = () => {
    
   const {count, increment, decrement, reset } = useCount(10);

  return (
    <>
      <hr />
      <h2>Count 2</h2>
      <Button text="+" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={increment} />
      <strong>{count}</strong>
      <Button text="-" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={decrement} />
      <Button text="Reset" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={reset} />
    </>
  );
};

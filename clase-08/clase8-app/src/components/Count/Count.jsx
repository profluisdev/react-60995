import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";

export const Count = () => {

  const { count, increment, decrement, reset } = useCount();

  return (
    <>
      <h2>Count 1</h2>
      <Button text="+" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={increment} />
      <strong>{count}</strong>
      <Button text="-" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={decrement} />
      <Button text="Reset" variant="btn-outline-secondary" bClass={"mx-3"} functionClick={reset} />
    </>
  );
};

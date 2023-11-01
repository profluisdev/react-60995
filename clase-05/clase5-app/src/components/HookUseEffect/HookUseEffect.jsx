import { useEffect, useState } from "react";
const products = [
  { id: "1", name: "Camisa", description: "Una camisa", stock: 4 },
  { id: "2", name: "Corbata", description: "Una Corbata", stock: 8 },
  { id: "3", name: "Pantalón", description: "Un Pantalón", stock: 10 },
  { id: "4", name: "Zapatilla", description: "Una Zapatilla", stock: 10 },
];

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = () => {
    setCount(count + 1);
  };

  const handleCount2 = () => {
    setCount2(count2 + 1);
  };
  // Cada ves que se cambia cualquier estado del componente se ejecuta el useEffect
  // useEffect( () => {
  //          console.log(products)
  //  } )

  // Con array de dependencia vacío, el useEffect se ejecuta una sola ves, por más que luego haya cambios de estado
  //   useEffect(() => {
  //     console.log(products);
  //   }, []);

  // Con array de dependencia incluyendo los elementos a los cuales va estar observando el array, el useEffect se ejecuta una sola ves, por más que luego haya cambios de estado
  //   useEffect(() => {
  //    console.log("Cambio de estado de count")
  //   }, [ count, count2 ]);

  useEffect(() => {
    console.log("Cambio de estado de count");
  }, [count]);

  useEffect(() => {
    console.log("Cambio de estado de count 2");
  }, [count2]);
  

  return (
    <>
      <h1 className="mt-2 ms-3">HookUseEffect</h1>
      <button className="btn btn-primary ms-3" onClick={handleCount1}>
        Count {count}
      </button>
      <button className="btn btn-success ms-3" onClick={handleCount2}>
        Count {count2}
      </button>
    </>
  );
};

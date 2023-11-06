import { useEffect, useState } from "react";
import { getProducts } from "../../productsMock";
import { Card } from "../Card/Card";

export const Map = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
            setIsLoading(!isLoading); // Usamos el operado not para cambiar el valor del estado a la inversa del actual
            // Guardamos los productos recibidos en el estado para mostrar luego en el DOM
            setProducts(response);        
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Productos</h2>
      {
        // Si isLoading está en true mostramos la carga de productos sino mostramos los productos recibidos
        isLoading ? <h2>Cargando productos ...</h2> :
      products.map((product) => (
        <Card key={product.id} {...product} />
      ))
      
      }


    </div>
  );
};

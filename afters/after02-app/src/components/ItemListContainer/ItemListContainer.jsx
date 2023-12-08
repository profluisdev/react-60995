import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    setIsLoading(true); // Cada ves que se cargue nuestro componente vamos a setear en true el isLoading para que nos aparezca la carga
    getProducts()
      .then((resp) => {
        // Verifico si existe una category en el parámetro
        if (category) {
          // En caso que haya una categoría, vamos a filtrar los productos por esa categoría y guardar en en nuestro state
          const productsFilter = resp.filter((product) => product.category === category);
            
          // Verificamos que el array de productos filtrados tenga al menos un elemento
            if(productsFilter.length > 0) {
              // Guardamos los productos filtrados por categoría en nuestro state products
              setProducts(productsFilter);
            } else {
              // Si los productos filtrados no tienen elementos en el array cargamos todos los productos en el state products
              setProducts(resp);
            }

        } else {
          
          // Si no existe una categoría en el parámetro seteamos todos los productos en el state products
          setProducts(resp);
        }

        // Una ves seteado los productos en el state, pasamos el loading a false para que se muestren los productos
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]); // Controlamos el cambio de parámetros para recargar el componente y ejecutar el useEffect

  return <>{ isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products} />}</>;
};

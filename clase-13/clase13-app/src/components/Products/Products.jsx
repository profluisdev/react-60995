import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [changes, setChanges] = useState(true);

  const discountStock = async (product) => { 
      const productRef = doc( db, "products", product.id );
      const newStock = product.stock - 1;
      await updateDoc(productRef, { stock: newStock } )
      setChanges(!changes);
   }

  const getProductsDB = ( category ) => {
    // const myProducts = query(collection(db, "products"), where("price", "<", 400));
    const myProducts = category ? query(collection(db, "products"), where("category", "==", category)) : query(collection(db, "products"));
    
    getDocs(myProducts)
      .then((resp) => {
        // console.log(resp.docs)
        // console.log(resp.docs[0].id);
        // console.log(resp.docs[0].data());
        // const product = {
        //   id : resp.docs[0].id,
        //   ...resp.docs[0].data()
        // }

        // console.log(product);

        const productList = resp.docs.map((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          };

          return product;
        });

        console.log(productList);

        setProducts(productList);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProductsDB();
  }, [changes]);
  return (
    <>
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>Nombre: {product.name}</p>
          <p>Precio: {product.price}</p>
          <p>Descripción: {product.description}</p>
          <p>Stock: {product.stock}</p>
          <button onClick={() => discountStock(product)} >Comprar</button>
        </div>
      ))}
    </>
  );
};

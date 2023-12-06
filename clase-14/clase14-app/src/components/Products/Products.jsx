import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Box, Button, Typography } from "@mui/material";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CardItem } from "../CardItem/CardItem";
import { CartContext } from "../../context/CartContext";

export const Products = () => {

 const { totalQuantity } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);



  const getProductsDB = (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      if (resp.size === 0) {
        console.log("No hay productos en la base de datos");
      }
      const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
      setIsLoading(false);
    });
  };

  const getProductById = (id) => { 
       const productRef = doc( db, "products", id );
        getDoc(productRef)
          .then( resp => {
            // Verificar si el producto existe
            if( resp.exists()) {
              const prod = {
                id: resp.id,
                ...resp.data()
              }
              setProduct(prod);
            }
          })    
   }

  useEffect(() => {
    setIsLoading(true);
    getProductsDB();
    getProductById("Aw2M2CLEYrF3iDAKlH8H")

    console.log(product)
    // seedProducts();
  }, []);

  return (
    <>
      <Box component="nav" display="flex" justifyContent="space-around">
        <Button variant="contained" color="inherit" onClick={() => console.log("Click")}>
          Home
        </Button>
        <Button variant="contained" color="inherit" onClick={() => console.log("Click Calzado")}>
          Calzados
        </Button>
        <Button variant="contained" color="inherit" onClick={() => console.log("Click Ropa")}>
          Ropa
        </Button>
        <Box display="flex">
          <ShoppingCartSharpIcon color="action" />
          <Typography> {totalQuantity} </Typography>
        </Box>
      </Box>
      <Typography fontSize={25} marginBottom={3}>
        Productos
      </Typography>
      <Box component="div" display="flex" flexWrap="wrap">
        {isLoading ? <h2>Cargando productos ...</h2> : products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
};

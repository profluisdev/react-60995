import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Box, Button, Typography } from "@mui/material";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { CardItem } from "../CardItem/CardItem";
import { FirebaseContext } from "../../context/FirebaseContext";
// Atajo de teclado para borrar importaciones no usadas  alt + shift + O (letra O)
export const Products = () => {

  const { product, products, isLoading,getProductsDB, getProductById } = useContext(FirebaseContext);
 const { totalQuantity } = useContext(CartContext);
 





  useEffect(() => {
 
    getProductsDB();
    getProductById("Aw2M2CLEYrF3iDAKlH8H")

    console.log(product)
    // seedProducts();
  }, []);

  return (
    <>
      {/* NavBar */}
      <Box component="nav" display="flex" justifyContent="space-around">
        <Button variant="contained" color="inherit" onClick={() => getProductsDB()}>
          Home
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("calzados")}>
          Calzados
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("ropa")}>
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
      {/* Productos - ItemListContainer.jsx */}
      <Box component="div" display="flex" flexWrap="wrap">
        {isLoading ? <h2>Cargando productos ...</h2> : products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
};

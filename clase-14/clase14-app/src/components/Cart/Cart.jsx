import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {

  const { cartItems, totalCartItems, removeItem } = useContext( CartContext);
  console.log(cartItems)
  return (
    <Box marginTop={4}>
      <Typography fontSize={25}>Carrito</Typography>
      <Box display="flex" flexDirection="column">
        {cartItems.map((item) => (
          <Box
            key={item.id}
            margin={1}
            border={1}
            borderColor={"gray"}
            borderRadius={2}
            padding={3}
            width={380}
            boxShadow={3}
          >
            <Typography>Nombre: {item.name} </Typography>
            <Typography>Precio Unitario: {item.price} </Typography>
            <Typography>Cantidad: {item.quantity} </Typography>
            <Typography>Sub total: {item.subTotal} </Typography>
            <Button variant="contained" color="error" onClick={() => removeItem(item.id)} >
              Eliminar
            </Button>
          </Box>
        ))}
      </Box>
      <Typography>Suma total del carrito ${totalCartItems} </Typography>
    </Box>
  );
};



/* 
Orden de compra 

collection: "orders"
documents: las ordenes de compra 
document = {
  buyer: { name, phone, email },
  items: {id, name, price, quantity, subTotal},
  date: serverTimestamp();
  total: es el total de la compra
}

*/
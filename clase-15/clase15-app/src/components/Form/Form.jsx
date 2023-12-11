import { Box, Button, Stack, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";

export const Form = () => {
  const { addOrderDB } = useContext(FirebaseContext);
  const {cartItems, totalCartItems } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    addOrderDB(cartItems, {name, email}, totalCartItems);
    
    setName("");
    setEmail("");
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={400} component="form" onSubmit={handleForm}>
      <Stack spacing={3}>
        <TextField label={"Nombre"} value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit" variant="contained" color="success">
          Comprar
        </Button>
      </Stack>
    </Box>
  );
};
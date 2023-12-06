import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    const { id, name, price } = item;
    // Buscamos la posición indice del producto dentro del carrito
    const index = cartItems.findIndex((product) => product.id === id);

    if (index !== -1) {
      // Si el resulta de index no es -1
      // Hacemos una copia del state
      const cartItemsCopy = [...cartItems];
      // Modificamos la cantidad del producto aumentando el valor con la cantidad recibida
      cartItemsCopy[index].quantity += quantity;
      // Modificamos el subtotal con la nueva cantidad
      cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;
      // Reemplazamos el state original con la copia
      setCartItems(cartItemsCopy);
    } else {
      const newItem = {
        id,
        name,
        price,
        quantity,
        subTotal: quantity * price,
      };

      setCartItems([...cartItems, newItem]);
    }

   
  };

  const removeItem = (id) => { 
        const arrayFilter = cartItems.filter( item => item.id !== id );
        setCartItems(arrayFilter);
        
   }

   const clearCartItems = () => { 
        setCartItems([]);
        
    }

    const handleTotal = () => {
        const total = cartItems.reduce( (acum, item) => acum + item.subTotal, 0 );
        setTotalCartItems(total);
    }

    const handleTotalQuantity = () => { 
        const total = cartItems.reduce( (acum, item) => acum + item.quantity, 0);
        setTotalQuantity(total);
     }

    useEffect( () => { 
            handleTotal();
            handleTotalQuantity();
     }, [cartItems] )

  const objetValue = {
    cartItems,
    totalCartItems,
    totalQuantity,
    addItem,
    removeItem,
    clearCartItems
  };

  return <CartContext.Provider value={objetValue}> {children} </CartContext.Provider>;
};

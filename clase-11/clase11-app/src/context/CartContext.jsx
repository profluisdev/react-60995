import { createContext, useState } from "react";


export const CartContext = createContext(null);

export const CartContextProvider = ( { children } ) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => { 

        console.log(item, quantity)
        // Desarrollamos la lógica para agregar los items al carrito
        const newItem = {
            ...item,
            quantity
        }

        setCart([...cart, newItem]);
     }

    const removeItem = (id) => { 
        const itemsFilter = cart.filter( item => item.id !== id ); 
        setCart(itemsFilter);
     }

    const objectValue = {
        cart,
        addItem,
        removeItem

    }
    return <CartContext.Provider value={objectValue} > { children } </CartContext.Provider>
}
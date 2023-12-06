import { Cart, Products } from "./components";
import { CartContextProvider } from "./context/CartContext";

export const App = () => {
  return (
    <CartContextProvider>
      <Products />
      <Cart />
    </CartContextProvider>
  );
};

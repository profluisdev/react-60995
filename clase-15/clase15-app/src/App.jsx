import { Cart, Form, Products } from "./components";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";

export const App = () => {
  return (
    <FirebaseContextProvider>
      <CartContextProvider>
        <Products />
        <Cart />
        <Form />
      </CartContextProvider>
    </FirebaseContextProvider>
  );
};

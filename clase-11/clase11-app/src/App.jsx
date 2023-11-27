import { Component1, Component2, Component3 } from "./components";
import { CartContextProvider } from "./context/CartContext";
import { GlobalContextProvider } from "./context/GlobalContext";

export const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <Component1 />
        <CartContextProvider>
          <Component2 />
          <Component3 />
        </CartContextProvider>
      </GlobalContextProvider>
    </>
  );
};

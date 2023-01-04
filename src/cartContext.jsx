import { createContext } from "react";

const CartItems = createContext({
  items: undefined,
  addItems: undefined,
});

export default CartItems;

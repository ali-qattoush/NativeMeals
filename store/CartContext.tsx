import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
import cartReducer from "./cartReducer";
import { Food, Action } from "./sharedTypes";




export type CartContextType = {
  state: Food[];
  dispatch: Dispatch<Action>;
};


export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  const contextValue: CartContextType = { state, dispatch };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;

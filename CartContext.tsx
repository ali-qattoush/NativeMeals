import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

export type Food = {
  name: string;
  price: number;
  amount: number;
};

export type CartContextType = {
  state: Food[];
  dispatch: Dispatch<Action>;
};

type Action =
  | { type: "ADD"; payload: Food }
  | { type: "UPDATE"; payload: { name: string; amount: number } }
  | { type: "DELETE"; payload: { name: string } };

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type CartProviderProps = {
  children: ReactNode;
};

function reducer(state: Food[], action: Action): Food[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((item) =>
        item.name === action.payload.name
          ? { ...item, amount: item.amount + action.payload.amount }
          : item
      );

    case "DELETE":
      return state.filter((item) => item.name !== action.payload.name);

    default:
      return state;
  }
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const contextValue: CartContextType = { state, dispatch };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;

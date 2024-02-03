export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";

export type Food = {
  name: string;
  price: number;
  amount: number;
};

export type Action =
  | { type: typeof ADD; payload: Food }
  | { type: typeof UPDATE; payload: { name: string; amount: number } }
  | { type: typeof DELETE; payload: { name: string } };


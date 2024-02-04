export type Food = {
  name: string;
  price: number;
  amount: number;
};

export type Action =
  | { type: "ADD"; payload: Food }
  | { type: "UPDATE"; payload: { name: string; amount: number } }
  | { type: "DELETE"; payload: { name: string } };

export const dispatchMap = new Map<string, (payload: any) => Action>([
  ["UPDATE", (payload: any) => ({ type: "UPDATE", payload })],
  ["ADD", (payload: any) => ({ type: "ADD", payload })],
  ["DELETE", (payload: any) => ({ type: "DELETE", payload })],
]);

export const updateDispatcher = dispatchMap.get("UPDATE");
export const addDispatcher = dispatchMap.get("ADD");
export const deleteDispatcher = dispatchMap.get("DELETE");

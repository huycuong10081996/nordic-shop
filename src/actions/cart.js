import { ActionType } from "./actionTypes.js";

export const addNewCart = (productItem, quantity) => ({
  type: ActionType.ADD_NEW_CART,
  productItem,
  quantity
});

export const updateQuantityCart = (productItem, quantity) => ({
  type: ActionType.UPDATE_QUANTITY_CART,
  productItem,
  quantity
});

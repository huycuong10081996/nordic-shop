import { ActionType } from "../actions/actionTypes";
let data = JSON.parse(localStorage.getItem("CART_ITEM"));
const intialState = data ? data : [];

const cartReducer = (state = intialState, action) => {
  let { productItem, quantity } = action;
  let indexItem = -1;
  switch (action.type) {
    case ActionType.ADD_NEW_CART: {
      indexItem = findProductInCartById(state, productItem);
      const stateTemp = [...state];
      if (indexItem !== -1) {
        stateTemp[indexItem].quantity += quantity;
      } else {
        stateTemp.push({ productItem, quantity });
      }
      localStorage.setItem("CART_ITEM", JSON.stringify(stateTemp));
      return { state: stateTemp };
    }

    case ActionType.UPDATE_QUANTITY_CART: {
      indexItem = findProductInCartById(state, productItem);
      const stateTemp = [...state];
      if (indexItem !== -1) {
        stateTemp[indexItem].quantity = quantity;
      }
      localStorage.setItem("CART_ITEM", JSON.stringify(stateTemp));
      return { state: stateTemp };
    }

    default:
      return state;
  }
};

const findProductInCartById = (cart, productItem) => {
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productItem.id === productItem.id) {
      index = i;
      break;
    }
  }
  return index;
};

export default cartReducer;

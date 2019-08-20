import { combineReducers } from "redux";
import cartReducer from "./cart.js";
const rootReducer = combineReducers({ cartReducer });
export default rootReducer;

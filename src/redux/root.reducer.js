import { combineReducers } from "redux";

//  Reducers Import
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;

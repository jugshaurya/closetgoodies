import { combineReducers } from "redux";

//  Reducers Import
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import dataReducer from "./data/data.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  data: dataReducer
});

export default rootReducer;

import cartActionTypes from "./cart.types";

//  Action Creators
// ================

export const addToCart = item => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item
});

export const deleteFromCart = item => ({
  type: cartActionTypes.DELETE_ITEM_FROM_CART,
  payload: item
});

export const decreaseCartItemCount = item => ({
  type: cartActionTypes.DECREASE_CART_ITEM_COUNT,
  payload: item
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART
});

export const setCartItemsFromLocalStorage = () => ({
  type: cartActionTypes.SET_CART_ITEM_FROM_STORAGE
});

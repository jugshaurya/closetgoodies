// Action-Types
// ============
export const TOGGLE_SHOW_CART = "TOGGLE_SHOW_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_CART_ITEM_COUNT = "DECREASE_CART_ITEM_COUNT";
export const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";

//  Action Creators
// ================
export const toggleShowCart = () => ({
  type: TOGGLE_SHOW_CART
});

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const deleteFromCart = item => ({
  type: DELETE_ITEM_FROM_CART,
  payload: item
});

export const decreaseCartItemCount = item => ({
  type: DECREASE_CART_ITEM_COUNT,
  payload: item
});

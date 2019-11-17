export const toggleShowCart = () => ({
  type: "TOGGLE_SHOW_CART"
});

export const addToCart = item => ({
  type: "ADD_TO_CART",
  payload: item
});

export const deleteFromCart = item => ({
  type: "DELETE_ITEM_FROM_CART",
  payload: item
});

export const decreaseCartItemCount = item => ({
  type: "DECREASE_CART_ITEM_COUNT",
  payload: item
});

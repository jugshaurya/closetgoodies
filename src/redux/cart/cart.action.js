export const toggleShowCart = () => ({
  type: "TOGGLE_SHOW_CART"
});

export const addToCart = item => ({
  type: "ADD_TO_CART",
  payload: item
});

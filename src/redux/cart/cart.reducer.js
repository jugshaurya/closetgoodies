const INITIAL_STATE = {
  show: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_CART":
      return {
        ...state,
        show: !state.show
      };

    case "ADD_TO_CART":
      state.cartItems.push(action.payload);
      return {
        ...state
      };

    default:
      return state;
  }
};

export default cartReducer;

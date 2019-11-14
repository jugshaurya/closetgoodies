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
      return {
        ...state,
        cartItems: cartAddHelper(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;

// Helper Functions
// ==================

const cartAddHelper = (cartItems, newItem) => {
  const alreadyAvailableItem = cartItems.find(item => item.id === newItem.id);

  if (!alreadyAvailableItem) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }

  alreadyAvailableItem.quantity += 1;
  return [...cartItems];
};

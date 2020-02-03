// Action Types Import
import cartActionTypes from "./cart.types";

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCartHelper(state.cartItems, action.payload)
      };

    case cartActionTypes.DECREASE_CART_ITEM_COUNT:
      return {
        ...state,
        cartItems: cartDecreaseCountHelper(state.cartItems, action.payload)
      };

    case cartActionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: cartItemDeleteHelper(state.cartItems, action.payload)
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
};

export default cartReducer;

// Helper Functions
// ==================
const addToCartHelper = (cartItems, newItem) => {
  const alreadyAvailableItem = cartItems.find(item => item.id === newItem.id);

  if (!alreadyAvailableItem) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }

  return cartItems.map(item =>
    item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const cartItemDeleteHelper = (cartItems, itemToDelete) => {
  return cartItems.filter(item => item.id !== itemToDelete.id);
};

const cartDecreaseCountHelper = (cartItems, itemToBeDecreased) => {
  const alreadyAvailableItem = cartItems.find(
    item => item.id === itemToBeDecreased.id
  );

  if (alreadyAvailableItem.quantity === 1)
    return cartItemDeleteHelper(cartItems, alreadyAvailableItem);

  return cartItems.map(item =>
    item.id === itemToBeDecreased.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

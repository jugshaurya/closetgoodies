// Action Types Import
import {
  TOGGLE_SHOW_CART,
  ADD_TO_CART,
  DECREASE_CART_ITEM_COUNT,
  DELETE_ITEM_FROM_CART
} from "./cart.actions";

const INITIAL_STATE = {
  show: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_CART:
      return {
        ...state,
        show: !state.show
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartItems: cartAddHelper(state.cartItems, action.payload)
      };

    case DECREASE_CART_ITEM_COUNT:
      return {
        ...state,
        cartItems: cartDecreaseCountHelper(state.cartItems, action.payload)
      };

    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: cartItemDeleteHelper(state.cartItems, action.payload)
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

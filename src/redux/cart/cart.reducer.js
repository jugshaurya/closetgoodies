// Action Types Import
import cartActionTypes from "./cart.types";

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  let newCartItems = [];
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      newCartItems = addToCartHelper(state.cartItems, action.payload);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cartItems: newCartItems
      };

    case cartActionTypes.DECREASE_CART_ITEM_COUNT:
      newCartItems = cartDecreaseCountHelper(state.cartItems, action.payload);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cartItems: newCartItems
      };

    case cartActionTypes.DELETE_ITEM_FROM_CART:
      newCartItems = cartItemDeleteHelper(state.cartItems, action.payload);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cartItems: newCartItems
      };
    case cartActionTypes.CLEAR_CART:
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cartItems: newCartItems
      };

    case cartActionTypes.SET_CART_ITEM_FROM_STORAGE:
      return {
        ...state,
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
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

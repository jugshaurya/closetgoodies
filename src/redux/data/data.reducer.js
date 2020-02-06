import dataActionTypes from "./data.types";

const INITIAL_STATE = {
  data: null,
  hasErrored: null,
  isFetchingData: false
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_START:
      return {
        ...state,
        hasErrored: null,
        isFetchingData: true
      };
    case dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        hasErrored: null,
        isFetchingData: false
      };

    case dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_FAILURE:
      return {
        ...state,
        hasErrored: action.payload,
        isFetchingData: false
      };

    default:
      return state;
  }
};

export default dataReducer;

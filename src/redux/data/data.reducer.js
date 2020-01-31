import dataActionTypes from "./data.types";

const INITIAL_STATE = {
  products: null,
  sections: {
    girls: [
      "https://picsum.photos/id/351/200/300",
      "https://picsum.photos/id/352/200/300",
      "https://picsum.photos/id/353/200/300",
      "https://picsum.photos/id/354/200/300",
      "https://picsum.photos/id/355/200/300",
      "https://picsum.photos/id/356/200/300",
      "https://picsum.photos/id/357/200/300",
      "https://picsum.photos/id/358/200/300",
      "https://picsum.photos/id/360/200/300",
      "https://picsum.photos/id/361/200/300"
    ],
    boys: [
      "https://picsum.photos/id/261/200/300",
      "https://picsum.photos/id/263/200/300",
      "https://picsum.photos/id/264/200/300",
      "https://picsum.photos/id/265/200/300",
      "https://picsum.photos/id/266/200/300",
      "https://picsum.photos/id/267/200/300",
      "https://picsum.photos/id/268/200/300",
      "https://picsum.photos/id/269/200/300",
      "https://picsum.photos/id/270/200/300",
      "https://picsum.photos/id/271/200/300"
    ],

    women: [
      "https://picsum.photos/id/171/200/300",
      "https://picsum.photos/id/172/200/300",
      "https://picsum.photos/id/173/200/300",
      "https://picsum.photos/id/174/200/300",
      "https://picsum.photos/id/175/200/300",
      "https://picsum.photos/id/176/200/300",
      "https://picsum.photos/id/177/200/300",
      "https://picsum.photos/id/178/200/300",
      "https://picsum.photos/id/179/200/300",
      "https://picsum.photos/id/180/200/300"
    ],
    men: [
      "https://picsum.photos/id/40/200/300",
      "https://picsum.photos/id/42/200/300",
      "https://picsum.photos/id/43/200/300",
      "https://picsum.photos/id/44/200/300",
      "https://picsum.photos/id/45/200/300",
      "https://picsum.photos/id/47/200/300",
      "https://picsum.photos/id/48/200/300",
      "https://picsum.photos/id/49/200/300",
      "https://picsum.photos/id/50/200/300"
    ]
  },
  error: null,
  isFetching: false
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_START:
      return {
        ...state,
        isFetching: true
      };
    case dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
        isFetching: false
      };

    case dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default dataReducer;

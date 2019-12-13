import dataActionTypes from "./data.types";

const INITIAL_STATE = {
  products: null,
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "jackets"
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "sneakers"
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "mens"
    }
  ],
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

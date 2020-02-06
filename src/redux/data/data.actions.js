import { firestore } from "../../firebase/helpers.firebase";
import dataActionTypes from "./data.types";

// Async Action Creators
// ======================
const fetchProductFromStoreStart = () => ({
  type: dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_START
});

const fetchProductFromStoreSuccess = products => ({
  type: dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_SUCCESS,
  payload: products
});

const fetchProductFromStoreFailure = error => ({
  type: dataActionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_FAILURE,
  payload: error
});

export const fetchProductFromStoreAsync = () => {
  return dispatch => {
    dispatch(fetchProductFromStoreStart());
    const collectionRef = firestore.collection("data");
    collectionRef
      .get()
      .then(collectionSnapshot => {
        const docSnapshot = collectionSnapshot.docs;
        const data = docSnapshot.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        dispatch(fetchProductFromStoreSuccess(data[0]));
      })
      .catch(error => {
        dispatch(fetchProductFromStoreFailure(error.message));
      });
  };
};

//  Firebase Import
import {
  SignInWithGoogle,
  addToFirestore,
  auth
} from "../../firebase/helpers.firebase";

import userActionTypes from "./user.types";
import { clearCart, setCartItemsFromLocalStorage } from "../cart/cart.actions";

//  Async Action Creators
// ================
// Google Signin
const googleSignInStart = () => ({
  type: userActionTypes.SET_CURRENT_USER_USING_GOOGLE_START
});

const googleSignInSuccess = user => ({
  type: userActionTypes.SET_CURRENT_USER_USING_GOOGLE_SUCCESS,
  payload: user
});

const googleSignInFailure = error => ({
  type: userActionTypes.SET_CURRENT_USER_USING_GOOGLE_FAILURE,
  payload: error
});

export const googleSignInAsync = () => async dispatch => {
  dispatch(googleSignInStart());
  try {
    const { user } = await SignInWithGoogle();

    const userDocRef = await addToFirestore(user, { imageURL: user.photoURL });
    const snapshot = await userDocRef.get();
    const { displayName, email, imageURL } = snapshot.data();
    dispatch(
      googleSignInSuccess({
        id: snapshot.id,
        displayName,
        email,
        imageURL
      })
    );
    localStorage.setItem("cartItems", JSON.stringify([]));
    dispatch(setCartItemsFromLocalStorage());
  } catch (error) {
    dispatch(googleSignInFailure(error.message));
  }
};

// Local Signin
const localSignInStart = () => ({
  type: userActionTypes.SET_CURRENT_USER_USING_LOCAL_START
});

const localSignInSuccess = user => ({
  type: userActionTypes.SET_CURRENT_USER_USING_LOCAL_SUCCESS,
  payload: user
});

const localSignInFailure = error => ({
  type: userActionTypes.SET_CURRENT_USER_USING_LOCAL_FAILURE,
  payload: error
});

export const localSignInAsync = (emailInp, password) => async dispatch => {
  dispatch(localSignInStart());
  try {
    const { user } = await auth.signInWithEmailAndPassword(emailInp, password);
    const userDocRef = await addToFirestore(user);
    const snapshot = await userDocRef.get();
    const { displayName, email, imageURL } = snapshot.data();
    dispatch(
      localSignInSuccess({
        id: snapshot.id,
        displayName,
        email,
        imageURL: imageURL
      })
    );
    localStorage.setItem("cartItems", JSON.stringify([]));
    dispatch(setCartItemsFromLocalStorage());
  } catch (error) {
    dispatch(localSignInFailure(error.message));
  }
};

// sign up
const createUserStart = () => ({
  type: userActionTypes.CREATE_USER_START
});

const createUserSuccess = () => ({
  type: userActionTypes.CREATE_USER_SUCCESS,
  payload: "New User Created!"
});

const createUserFailure = error => ({
  type: userActionTypes.CREATE_USER_FAILURE,
  payload: error
});

export const createUserAsync = (
  displayName,
  email,
  password,
  confirmPassword
) => async dispatch => {
  dispatch(createUserStart());
  try {
    if (password !== confirmPassword) throw new Error("Password Don't Match");
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    // update user to include displayname anda default photo
    const imageURL = `https://i.pravatar.cc/150?u=${email}@pravatar.com`;
    await user.updateProfile({
      displayName,
      imageURL
    });

    await addToFirestore(user, { displayName, imageURL });
    dispatch(createUserSuccess());
  } catch (error) {
    dispatch(createUserFailure(error.message));
  }
};

// check-user
const checkUserStart = () => ({
  type: userActionTypes.CHECK_USER_START
});

const checkUserSuccess = user => ({
  type: userActionTypes.CHECK_USER_SUCCESS,
  payload: user
});

const checkUserFailure = error => ({
  type: userActionTypes.CHECK_USER_FAILURE,
  payload: error
});

export const checkUserAsync = () => dispatch => {
  dispatch(checkUserStart());
  // add an auth state change observer.
  // https://firebase.google.com/docs/auth/web/manage-users
  const authSubscription = auth.onAuthStateChanged(
    user => {
      if (user) {
        dispatch(
          checkUserSuccess({
            id: user.uid,
            displayName: user.displayName,
            email: user.email,
            imageURL: user.imageURL || user.photoURL
          })
        );
      } else {
        dispatch(checkUserSuccess(null));
      }
      authSubscription();
    },
    error => {
      dispatch(checkUserFailure(error.message));
    }
  );
};

// signout
const signoutUserStart = () => ({
  type: userActionTypes.SIGNOUT_USER_START
});

const signoutUserSuccess = () => ({
  type: userActionTypes.SIGNOUT_USER_SUCCESS
});

const signoutUserFailure = () => ({
  type: userActionTypes.SIGNOUT_USER_FAILURE
});

export const signoutUserAsync = () => async dispatch => {
  dispatch(signoutUserStart());
  try {
    await auth.signOut();
    dispatch(signoutUserSuccess());
    dispatch(clearCart());
    localStorage.setItem("cartItems", JSON.stringify([]));
  } catch (error) {
    dispatch(signoutUserFailure(error.message));
  }
};

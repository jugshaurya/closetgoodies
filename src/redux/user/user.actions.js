//  Firebase Import
import {
  SignInWithGoogle,
  addToFirestore,
  auth
} from "../../firebase/helpers.firebase";

import userActionTypes from "./user.types";
import { clearCart } from "../cart/cart.actions";

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
    const userDocRef = await addToFirestore(user);
    const snapshot = await userDocRef.get();
    const { displayName, email, photoURL } = snapshot.data();
    dispatch(
      googleSignInSuccess({
        id: snapshot.id,
        displayName,
        email,
        photoURL
      })
    );
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

export const localSignInAsync = (email, password) => async dispatch => {
  dispatch(localSignInStart());
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    const userDocRef = await addToFirestore(user);
    const snapshot = await userDocRef.get();
    const { displayName, emailResult, photoURL } = snapshot.data();
    dispatch(
      localSignInSuccess({
        id: snapshot.id,
        displayName,
        email: emailResult,
        photoURL
      })
    );
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
    const photoURL = `https://api.adorable.io/avatars/285/${email}.png`;
    await user.updateProfile({
      displayName,
      photoURL
    });

    await addToFirestore(user, { displayName, photoURL });
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
            email: user.email
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
  } catch (error) {
    dispatch(signoutUserFailure(error.message));
  }
};

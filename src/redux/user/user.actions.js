//  Firebase Import
import {
  SignInWithGoogle,
  addToFirestore,
  auth
} from "../../firebase/helpers.firebase";

import userActionTypes from "./user.types";
//  Async Action Creators
// ================

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
    const { displayName, email } = snapshot.data();
    dispatch(
      googleSignInSuccess({
        id: snapshot.id,
        displayName,
        email
      })
    );
  } catch (error) {
    dispatch(googleSignInFailure(error.message));
  }
};

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
    const { displayName, displayEmail } = snapshot.data();
    dispatch(
      localSignInSuccess({
        id: snapshot.id,
        displayName,
        email: displayEmail
      })
    );
  } catch (error) {
    dispatch(localSignInFailure(error.message));
  }
};

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
    await addToFirestore(user, { displayName });
    dispatch(createUserSuccess());
  } catch (error) {
    dispatch(createUserFailure(error.message));
  }
};

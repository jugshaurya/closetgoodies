//  Firebase Import
import {
  SignInWithGoogle,
  addToFirestore,
  auth
} from "../../firebase/helpers.firebase";

// Action-Types
// ============
export const SET_CURRENT_USER_USING_GOOGLE_START =
  "SET_CURRENT_USER_USING_GOOGLE_START";
export const SET_CURRENT_USER_USING_GOOGLE_SUCCESS =
  "SET_CURRENT_USER_USING_GOOGLE_SUCCESS";
export const SET_CURRENT_USER_USING_GOOGLE_FAILURE =
  "SET_CURRENT_USER_USING_GOOGLE_FAILURE";
export const SET_CURRENT_USER_USING_LOCAL_START =
  "SET_CURRENT_USER_USING_LOCAL_START";
export const SET_CURRENT_USER_USING_LOCAL_SUCCESS =
  "SET_CURRENT_USER_USING_LOCAL_SUCCESS";
export const SET_CURRENT_USER_USING_LOCAL_FAILURE =
  "SET_CURRENT_USER_USING_LOCAL_FAILURE";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

//  Async Action Creators
// ================

const googleSignInStart = () => ({
  type: SET_CURRENT_USER_USING_GOOGLE_START
});

const googleSignInSuccess = user => ({
  type: SET_CURRENT_USER_USING_GOOGLE_SUCCESS,
  payload: user
});

const googleSignInFailure = error => ({
  type: SET_CURRENT_USER_USING_GOOGLE_FAILURE,
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
  type: SET_CURRENT_USER_USING_LOCAL_START
});

const localSignInSuccess = user => ({
  type: SET_CURRENT_USER_USING_LOCAL_SUCCESS,
  payload: user
});

const localSignInFailure = error => ({
  type: SET_CURRENT_USER_USING_LOCAL_FAILURE,
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
  type: CREATE_USER_START
});

const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS,
  payload: "New User Created!"
});

const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
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

//  Action Types Import
import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  checkError: null,

  signinError: null,
  successSigninMessage: null,
  isSigning: false,

  signupError: null,
  successSignupMessage: null,
  isSignuping: false,

  signinGoogleError: null,
  successSigninGoogleMessage: null,
  isSigningGoogle: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER_USING_GOOGLE_START:
      return {
        ...state,
        currentUser: null,
        signinGoogleError: null,
        successSigninGoogleMessage: null,
        isSigningGoogle: true
      };
    case userActionTypes.SET_CURRENT_USER_USING_GOOGLE_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signinGoogleError: null,
        successSigninGoogleMessage: "Welcome User",
        isSigningGoogle: false
      };
    case userActionTypes.SET_CURRENT_USER_USING_GOOGLE_FAILURE:
      return {
        ...state,
        currentUser: null,
        signinGoogleError: action.payload,
        successSigninGoogleMessage: null,
        isSigningGoogle: false
      };

    case userActionTypes.SET_CURRENT_USER_USING_LOCAL_START:
      return {
        ...state,
        signinError: null,
        successSigninMessage: null,
        isSigning: true
      };
    case userActionTypes.SET_CURRENT_USER_USING_LOCAL_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signinError: null,
        successSigninMessage: "Welcome User",
        isSigning: false
      };
    case userActionTypes.SET_CURRENT_USER_USING_LOCAL_FAILURE:
      return {
        ...state,
        currentUser: null,
        signinError: action.payload,
        successSigninMessage: null,
        isSigning: false
      };

    case userActionTypes.CREATE_USER_START:
      return {
        ...state,
        successSignupMessage: null,
        signupError: null,
        isSignuping: true
      };
    case userActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        successSignupMessage: action.payload,
        signupError: null,
        isSignuping: false
      };

    case userActionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        successSignupMessage: null,
        signupError: action.payload,
        isSignuping: false
      };

    case userActionTypes.CHECK_USER_START:
      return {
        ...state
      };

    case userActionTypes.CHECK_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    case userActionTypes.CHECK_USER_FAILURE:
      return {
        ...state,
        checkError: action.payload
      };

    case userActionTypes.SIGNOUT_USER_START:
      return {
        ...state
      };
    case userActionTypes.SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        // reset everything
        currentUser: null,
        checkError: null,

        signinError: null,
        successSigninMessage: null,
        isSigning: false,

        signupError: null,
        successSignupMessage: null,
        isSignuping: false,

        signinGoogleError: null,
        successSigninGoogleMessage: null,
        isSigningGoogle: false
      };

    case userActionTypes.SIGNOUT_USER_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default userReducer;

//  Action Types Import
import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  signInError: null,
  signUpError: null,
  checkError: null,
  successCreationMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER_USING_GOOGLE_START:
    case userActionTypes.SET_CURRENT_USER_USING_LOCAL_START:
    case userActionTypes.CREATE_USER_START:
      return {
        ...state
      };
    case userActionTypes.SET_CURRENT_USER_USING_GOOGLE_SUCCESS:
    case userActionTypes.SET_CURRENT_USER_USING_LOCAL_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signInError: null
      };
    case userActionTypes.SET_CURRENT_USER_USING_GOOGLE_FAILURE:
    case userActionTypes.SET_CURRENT_USER_USING_LOCAL_FAILURE:
      return {
        ...state,
        signInError: action.payload
      };

    case userActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        successCreationMessage: action.payload,
        signUpError: null
      };

    case userActionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        successCreationMessage: null,
        signUpError: action.payload
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
    default:
      return state;
  }
};

export default userReducer;

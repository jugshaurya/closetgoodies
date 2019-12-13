//  Action Types Import
import {
  SET_CURRENT_USER_USING_GOOGLE_FAILURE,
  SET_CURRENT_USER_USING_GOOGLE_SUCCESS,
  SET_CURRENT_USER_USING_GOOGLE_START,
  SET_CURRENT_USER_USING_LOCAL_START,
  SET_CURRENT_USER_USING_LOCAL_SUCCESS,
  SET_CURRENT_USER_USING_LOCAL_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "./user.actions";

const INITIAL_STATE = {
  currentUser: null,
  signInError: null,
  signUpError: null,
  successCreationMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_USING_GOOGLE_START:
    case SET_CURRENT_USER_USING_LOCAL_START:
    case CREATE_USER_START:
      return {
        ...state
      };
    case SET_CURRENT_USER_USING_GOOGLE_SUCCESS:
    case SET_CURRENT_USER_USING_LOCAL_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signInError: null
      };
    case SET_CURRENT_USER_USING_GOOGLE_FAILURE:
    case SET_CURRENT_USER_USING_LOCAL_FAILURE:
      return {
        ...state,
        signInError: action.payload
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        successCreationMessage: action.payload,
        signUpError: null
      };

    case CREATE_USER_FAILURE:
      return {
        ...state,
        successCreationMessage: null,
        signUpError: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;

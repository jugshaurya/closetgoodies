//  Action Types Import
import {
  SET_CURRENT_USER_USING_GOOGLE_FAILURE,
  SET_CURRENT_USER_USING_GOOGLE_SUCCESS,
  SET_CURRENT_USER_USING_GOOGLE_START,
  SET_CURRENT_USER_USING_LOCAL_START,
  SET_CURRENT_USER_USING_LOCAL_SUCCESS,
  SET_CURRENT_USER_USING_LOCAL_FAILURE
} from "./user.actions";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_USING_GOOGLE_START:
    case SET_CURRENT_USER_USING_LOCAL_START:
      return {
        ...state
      };
    case SET_CURRENT_USER_USING_GOOGLE_SUCCESS:
    case SET_CURRENT_USER_USING_LOCAL_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case SET_CURRENT_USER_USING_GOOGLE_FAILURE:
    case SET_CURRENT_USER_USING_LOCAL_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;

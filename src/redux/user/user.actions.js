// Action-Types
// ============
export const SET_CURRENT_USER = "SET_CURRENT_USER";

//  Action Creators
// ================
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

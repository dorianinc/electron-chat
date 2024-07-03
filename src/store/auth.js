import * as api from "../api/auth";

////////////// Action ///////////////

export const GET_USER = "auth/GET_USER";

///////////// Action Creators ///////////////

// get all chats
export const getUser = (user) => ({
  type: GET_USER,
  user,
});

/////////////////// Thunks ///////////////////
export const registerUserThunk = (data) => async (dispatch) => {
  const res = await api.registerUser(data);
  console.log("🖥️  res: ", res);
  if (Object.values(res).length) {
    dispatch(getUser(res));
  }
};

export const signInUserThunk = (data) => async (dispatch) => {
  const res = await api.signInUser(data);
  console.log("🖥️  res: ", res);
  if (Object.values(res).length) {
    dispatch(getUser(res));
  }
};

export const signOutUserThunk = () => async (dispatch) => {
  dispatch(getUser({}));
};

const authReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_USER:
      newState = { ...action.user };
      return newState;
    default:
      return state;
  }
};

export default authReducer;

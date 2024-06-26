import * as api from "../api/auth";

////////////// Action ///////////////

export const REGISTER_USER = "auth/REGISTER_USER";

///////////// Action Creators ///////////////

// get all chats
export const registerUser = (chats) => ({
  type: REGISTER_USER,
  chats,
});

/////////////////// Thunks ///////////////////
export const registerUserThunk = (data) => async (dispatch) => {
  const res = api.registerUser(data);
  // if (res.length) {
  //   dispatch(registerUser(res));
  // }
};

const authReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case REGISTER_USER:
      newState = {};
      //   action.chats.forEach((chat) => {
      //     newState[chat.id] = chat;
      //   });
      return newState;
    default:
      return state;
  }
};

export default authReducer;

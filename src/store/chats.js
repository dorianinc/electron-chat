import * as api from "../api/chats";

////////////// Action ///////////////

export const GET_CHATS = "chats/GET_CHATS";

///////////// Action Creators ///////////////

// get all chats
export const getChats = (chats) => ({
  type: GET_CHATS,
  chats,
});

/////////////////// Thunks ///////////////////

export const fetchChatsThunk = () => async (dispatch) => {
  const res = await api.fetchAllChats();
  if (res.length) {
    dispatch(getChats(res))
  }
};

const chatsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_CHATS:
      newState = {};
      action.chats.forEach((chat) => {
        newState[chat.id] = chat;
      });
      return newState;
    default:
      return state;
  }
};

export default chatsReducer;

import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import chatsReducer from "./chats";

const rootReducer = combineReducers({
  chats: chatsReducer,
});

const configureStore = (preloadedState) => {
  const middlewares = [thunk];
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;

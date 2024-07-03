import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import chatsReducer from "./chats";
import authReducer from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
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

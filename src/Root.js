import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxPromise from "redux-promise";
import commentReducer from "./reducer/reducer";
import authReducer from "./reducer/auth";
import reducer from "./reducer";
import auth from "./reducer/auth";
export default ({ children, initialState = [] }) => {
  const rootReducer = combineReducers({
    comments: commentReducer,
    auth: authReducer
  });

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};

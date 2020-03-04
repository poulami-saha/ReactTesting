import { combineReducers } from "redux";
import commentsReducer from "./reducer";
import authReducer from "./auth";

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});

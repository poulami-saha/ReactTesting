import * as ActionType from "./type";
import Axios from "axios";
export const addComment = comment => {
  console.log(comment);
  return {
    type: ActionType.ADD_COMMENT,
    payload: comment
  };
};

export const fetchComment = comment => {
  const response = Axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: ActionType.FETCH_COMMENT,
    payload: response
  };
};

export const changeAuth = isLoggedIn => {
  console.log(isLoggedIn);
  return {
    type: ActionType.CHANGE_AUTH,
    payload: isLoggedIn
  };
};

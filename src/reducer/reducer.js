import * as Action from "../action/type";

const reducer = (state = [], action) => {
  switch (action.type) {
    case Action.ADD_COMMENT: {
      return [...state, action.payload];
    }
    case Action.FETCH_COMMENT: {
      let comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    }

    default:
      return state;
  }
};

export default reducer;

import commentReducer from "../reducer/reducer";
import * as ActionType from "../action/type";

it("handles action of save comment", () => {
  const action = {
    type: ActionType.ADD_COMMENT,
    payload: "New Comment"
  };

  const newState = commentReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles action of default comment", () => {
  //   const action = {
  //     type: "WRONG_COMMENT",
  //     payload: "New Comment"
  //   };

  const newState = commentReducer([], {});
  expect(newState).toEqual([]);
});

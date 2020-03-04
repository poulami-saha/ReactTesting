import * as ActionType from "../action/type";
import { addComment } from "../action/action";

describe("save Comment", () => {
  it("has the correct payload", () => {
    const action = addComment("newcomment");
    expect(action.payload).toEqual("newcomment");
  });
  it("has the correct type", () => {
    const action = addComment("newcomment");
    expect(action.type).toEqual(ActionType.ADD_COMMENT);
  });
});

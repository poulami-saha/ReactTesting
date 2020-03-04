import React from "react";
import { mount } from "enzyme";
import CommentList from "../components/commentList";
import { useSelector } from "react-redux";
import Root from "../Root";

let wrapped;
beforeEach(() => {
  const initialState = ["comment1", "comment2"];
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
it("creates 1 li per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text fro eaxg comment", () => {
  expect(wrapped.render().text()).toContain("comment1");
  expect(wrapped.render().text()).toContain("comment2");
});

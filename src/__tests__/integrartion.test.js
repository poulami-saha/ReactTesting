import React from "react";
import moxios from "moxios";
import { mount } from "enzyme";
import Root from "../Root";
import App from "../App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "comment1" }, { name: "comment2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});
it("fetch a list of comments", () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.find(".fetchComment").simulate("click");

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});

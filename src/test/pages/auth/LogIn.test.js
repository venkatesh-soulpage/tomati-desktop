import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LogIn from "pages/auth/LogIn";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("LogIn page", () => {
  it("before entering values", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <LogIn />
        </Router>
      </Provider>,
      {}
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("after entering values", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <LogIn />
        </Router>
      </Provider>,
      {}
    );
    let inputNode_email = screen.getByPlaceholderText("Enter email");
    let inputNode_password = screen.getByPlaceholderText("Password");
    fireEvent.change(inputNode_email, {
      target: {
        value: "tomati@gmail.com",
      },
    });
    fireEvent.change(inputNode_password, {
      target: {
        value: "Soul@123",
      },
    });
    expect(inputNode_email.value).toBe("tomati@gmail.com");
    expect(inputNode_password.value).toBe("Soul@123");

    expect(asFragment()).toMatchSnapshot();
  });
});

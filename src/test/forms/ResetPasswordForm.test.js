import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ResetPasswordForm from "forms/ResetPasswordForm";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("ResetPasswordForm page", () => {
  it("before entering values", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <ResetPasswordForm />
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
          <ResetPasswordForm />
        </Router>
      </Provider>,
      {}
    );
    let inputNode_password = screen.getByPlaceholderText("New Password");
    let inputNode_confirm_password = screen.getByPlaceholderText(
      "Confirm New Password"
    );
    fireEvent.change(inputNode_password, {
      target: {
        value: "Soul@123",
      },
    });
    fireEvent.change(inputNode_confirm_password, {
      target: {
        value: "Soul@123",
      },
    });
    expect(inputNode_password.value).toBe("Soul@123");
    expect(inputNode_confirm_password.value).toBe("Soul@123");

    expect(asFragment()).toMatchSnapshot();
  });
});

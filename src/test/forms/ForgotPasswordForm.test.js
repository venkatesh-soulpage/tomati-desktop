import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ForgotPasswordForm from "forms/ForgotPasswordForm";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("ForgotPasswordForm page", () => {
  it("before entering values", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <ForgotPasswordForm />
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
          <ForgotPasswordForm />
        </Router>
      </Provider>,
      {}
    );
    let inputNode_email = screen.getByPlaceholderText("Email");
    fireEvent.change(inputNode_email, {
      target: {
        value: "tomati@gmail.com",
      },
    });
    expect(inputNode_email.value).toBe("tomati@gmail.com");

    expect(asFragment()).toMatchSnapshot();
  });
});

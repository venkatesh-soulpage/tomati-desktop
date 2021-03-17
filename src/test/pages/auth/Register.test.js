import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "pages/auth/Register";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("Register page", () => {
  it("before entering values", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <Register />
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
          <Register />
        </Router>
      </Provider>,
      {}
    );
    let inputNode_first_name = screen.getByPlaceholderText("First Name");
    let inputNode_last_name = screen.getByPlaceholderText("Last Name");
    let inputNode_phone_number = screen.getByPlaceholderText("Phone Number");
    let inputNode_password = screen.getByPlaceholderText("Password");
    let inputNode_confirm_password = screen.getByPlaceholderText(
      "Confirm Password"
    );
    fireEvent.change(inputNode_first_name, {
      target: {
        value: "Testing First Name",
      },
    });
    fireEvent.change(inputNode_last_name, {
      target: {
        value: "Testing Last Name",
      },
    });
    fireEvent.change(inputNode_phone_number, {
      target: {
        value: 987654321,
      },
    });
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
    expect(inputNode_first_name.value).toBe("Testing First Name");
    expect(inputNode_last_name.value).toBe("Testing Last Name");
    expect(parseInt(inputNode_phone_number.value)).toBe(987654321);
    expect(inputNode_password.value).toBe("Soul@123");
    expect(inputNode_confirm_password.value).toBe("Soul@123");

    expect(asFragment()).toMatchSnapshot();
  });
});

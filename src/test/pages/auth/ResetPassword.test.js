import React from "react";
import { render } from "@testing-library/react";
import ResetPassword from "pages/auth/ResetPassword";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("ResetPassword page", () => {
  it("matches snapshot", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <ResetPassword />
        </Router>
      </Provider>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

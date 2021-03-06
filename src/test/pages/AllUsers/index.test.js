import React from "react";
import { render } from "@testing-library/react";
import Index from "pages/AllUsers";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("AllUsers page", () => {
  it("matches snapshot", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <Index />
        </Router>
      </Provider>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

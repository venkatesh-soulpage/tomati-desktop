import React from "react";
import { render } from "@testing-library/react";
import DashboardPage from "pages/dashboard/DashboardPage";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("DashboardPage page", () => {
  it("matches snapshot", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <DashboardPage />
        </Router>
      </Provider>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

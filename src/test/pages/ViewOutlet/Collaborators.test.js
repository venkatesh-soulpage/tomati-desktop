import React from "react";
import { render } from "@testing-library/react";
import Collaborators from "pages/ViewOutlet/Collaborators";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("Collaborators page", () => {
  it("matches snapshot", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <Collaborators />
        </Router>
      </Provider>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

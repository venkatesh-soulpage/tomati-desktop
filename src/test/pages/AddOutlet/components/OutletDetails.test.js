import React from "react";
import { render } from "@testing-library/react";
import OutletDetails from "pages/AddOutlet/components/OutletDetails";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("OutletDetails page", () => {
  it("matches snapshot", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <OutletDetails handleChange={() => {}} handleFile={() => {}} />
        </Router>
      </Provider>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

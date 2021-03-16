import React from "react";
import { render } from "@testing-library/react";
import PersonalDetails from "components/PersonalDetails";
import { Router } from "react-router-dom";
import history from "utils/history";
import { Provider } from "react-redux";
import configureStore from "store";

describe("PersonalDetails page", () => {
  it("matches snapshot", () => {
    const store = configureStore();
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <PersonalDetails
            handleChange={() => {}}
            handleEmailCheck={() => {}}
            setValues={() => {}}
          />
        </Router>
      </Provider>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

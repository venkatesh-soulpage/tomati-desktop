import React, { useEffect } from "react";
// Router Imports
import { Router, Route, Switch } from "react-router-dom";
import history from "utils/history";
// Redux component connect
import { connect } from "react-redux";
// Importing redux actions
import { handleIsUserAuthenticated, validateAuthToken } from "_actions/auth";
// Local Components
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import Page404 from "pages/static/Page404";
// Auth Components
import Register from "pages/auth/Register";
import LogIn from "pages/auth/LogIn";
import ForgotPassword from "pages/auth/ForgotPassword";

// Layouts
import Navbar from "components/Navbar";
// Private Route For Auth redirection.
import PrivateRoute from "containers/PrivateRoute";
import AuthRoute from "containers/AuthRoute";
import ResetPasswordSuccess from "pages/static/ResetPasswordSuccess";

function App(props) {
  /**
   * Similar to componentDidMount and componentDidUpdate:
   * Checking for the user token availability and changing the isAuthenticated flag value.
   */
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      props.dispatch(validateAuthToken());
      props.dispatch(handleIsUserAuthenticated(true));
      // props.dispatch(resetApplicationStep());
    } else {
      props.dispatch(handleIsUserAuthenticated(false));
    }
  }, [sessionStorage.getItem("token")]);

  // Rending Routes
  return (
    <Router history={history}>
      <div>
        <Navbar />

        <div className="app-container">
          <Switch>
            <Route path="/" name="home" exact component={Home} />
            {/* <AuthRoute
              path="/register/"
              name="register"
              exact
              component={Register}
            />
            <AuthRoute path="/login/" name="login" exact component={LogIn} />

            <AuthRoute
              path="/forgot-password/"
              exact
              component={ForgotPassword}
            />
            <Route
              path="/forgot-password/success"
              exact
              component={ResetPasswordSuccess}
            /> */}
            <PrivateRoute path="/dashboard/" exact component={Dashboard} />
            <Route component={Page404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(App);

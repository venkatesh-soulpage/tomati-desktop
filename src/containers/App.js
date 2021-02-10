import React from "react";
// Router Imports
import { Router, Route, Switch } from "react-router-dom";
import history from "utils/history";
// Redux component connect
import { connect } from "react-redux";
// Importing redux actions
// import { handleIsUserAuthenticated, validateAuthToken } from "_actions/auth";
// Local Components
import Home from "pages/Home";
// import Dashboard from "pages/Dashboard";
import Page404 from "pages/static/Page404";
// Auth Components
import Register from "pages/auth/Register";
import ResetPassword from "pages/auth/ResetPassword";

import LogIn from "pages/auth/LogIn";
import ForgotPassword from "pages/auth/ForgotPassword";
// import ForgotPassword from "pages/auth/ForgotPassword";

// Layouts
import Navbar from "components/Navbar";
import Footer from "components/Footer";
// Private Route For Auth redirection.
// import PrivateRoute from "containers/PrivateRoute";
import AuthRoute from "containers/AuthRoute";
import Terms from "pages/Terms";
import Privacy from "pages/Privacy";
import DashboardPage from "pages/dashboard/DashboardPage";
// import ResetPasswordSuccess from "pages/static/ResetPasswordSuccess";

function App(props) {
  /**
   * Similar to componentDidMount and componentDidUpdate:
   * Checking for the user token availability and changing the isAuthenticated flag value.
   */
  // useEffect(() => {
  //   if (sessionStorage.getItem("token")) {
  //     props.dispatch(validateAuthToken());
  //     props.dispatch(handleIsUserAuthenticated(true));
  //     // props.dispatch(resetApplicationStep());
  //   } else {
  //     props.dispatch(handleIsUserAuthenticated(false));
  //   }
  // }, [sessionStorage.getItem("token")]);

  // Rending Routes
  return (
    <Router history={history}>
      <Navbar />

      <Switch>
        <Route path="/" name="home" exact component={Home} />
        <AuthRoute
          path="/register"
          name="register"
          exact
          component={Register}
        />
        <AuthRoute path="/login" name="login" exact component={LogIn} />
        <AuthRoute
          path="/forgot-password"
          name="forgot-password"
          exact
          component={ForgotPassword}
        />

        {/* <AuthRoute
              path="/forgot-password/"
              exact
              component={ForgotPassword}
            /> */}
        {/* <Route
              path="/forgot-password/success"
              exact
              component={ResetPasswordSuccess}
            /> */}
        {/* <PrivateRoute path="/dashboard/" exact component={Dashboard} /> */}
        <Route exact path="/termspolicy" component={Terms} />
        <Route exact path="/privacypolicy" component={Privacy} />
        <Route exact path="/reset" component={ResetPassword} />
        <Route exact path="/dashboard" component={DashboardPage} />

        <Route component={Page404} />
      </Switch>

      <Footer />
    </Router>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(App);

import React from "react";
// Redux
import { connect } from "react-redux";
import {
  userLogin,
  handleLoginError,
  receiveUserData,
  clearLoginError
} from "_actions/auth";
// Router
import { withRouter, Link } from "react-router-dom";
// Bootstrap Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// custom components
import PasswordTextField from "components/PasswordTextField";
import AlertMessage from "components/AlertMessage";
import Footer from "components/Footer";

function LogIn(props) {
  // Form states
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    userLoginResponse: {}
  });

  React.useEffect(function() {
    props.dispatch(receiveUserData({}));
    props.dispatch(handleLoginError(null));
  }, []);

  // For handling changes in the inputs
  const handleChange = name => event => {
    const value = event.target.value;
    setValues(values => ({ ...values, [name]: value }));
  };

  // Handling the login data and sending it to the service.
  function handleLoginData(event) {
    event.preventDefault();
    // Creating post Data
    var postData = {
      email: values.email,
      password: values.password
    };
    props
      .dispatch(userLogin(postData))
      .then(userData => {
        if (userData.email_verified_at === null) {
          props.history.push("/verify-email");
        } else if (userData.sms_verified_at === null) {
          props.history.push("/verify-phone");
        } else if (sessionStorage.getItem("token")) {
          props.history.push("/dashboard");
        }
      })
      .catch(error => {});
  }

  function handleAlertDismiss() {
    props.dispatch(clearLoginError());
  }

  return (
    <div className="bg-light-blue overflow-auto">
      <section className="section ">
        <div className="container" style={{ minHeight: "600px" }}>
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="paper elevated">
                <h3 className="text-center form-legend">Login</h3>
                <Form onSubmit={handleLoginData}>
                  <AlertMessage
                    variant="danger"
                    error={props.auth.loginError}
                    onDismiss={handleAlertDismiss}
                  />
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <PasswordTextField
                      name="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </Form.Group>
                  <Form.Group>
                    <Button type="submit">Login</Button>
                  </Form.Group>
                  <Form.Group>
                    <span>Don't Have an Account</span>
                    <br />
                    <Link to="/register">Sign Up Now</Link>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(LogIn));

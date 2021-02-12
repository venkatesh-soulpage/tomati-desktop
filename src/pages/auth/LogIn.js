import React from "react";
// Redux
import { connect } from "react-redux";
import {
  userLogin,
  handleLoginError,
  receiveUserData,
  clearLoginError,
} from "_actions/auth";
// Router
import { withRouter, Link } from "react-router-dom";
// Bootstrap Components

import { InputGroup, Form, Button, Card } from "react-bootstrap";
// custom components
import PasswordTextField from "components/PasswordTextField";
import AlertMessage from "components/AlertMessage";
import Footer from "components/Footer";

// icons
import Lock from "assets/img/Lock.svg";
import Mail from "assets/img/Mail.svg";

function LogIn(props) {
  // Form states
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    userLoginResponse: {},
  });

  React.useEffect(function () {
    window.scroll(0, 0);
    props.dispatch(receiveUserData({}));
    props.dispatch(handleLoginError(null));
  }, []);

  // For handling changes in the inputs
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  // Handling the login data and sending it to the service.
  function handleLoginData(event) {
    event.preventDefault();
    // Creating post Data
    var postData = {
      email: values.email,
      password: values.password,
    };
    props
      .dispatch(userLogin(postData))
      .then((userData) => {
        if (userData.email_verified_at === null) {
          props.history.push("/verify-email");
        } else if (userData.sms_verified_at === null) {
          props.history.push("/verify-phone");
        } else if (sessionStorage.getItem("token")) {
          props.history.push("/dashboard");
        }
      })
      .catch((error) => {});
  }

  function handleAlertDismiss() {
    props.dispatch(clearLoginError());
  }

  return (
    <div className="min-height mt-5">
      <div className="container-fluid h-100">
        <div className="row h-100 justify-content-center">
          <div className="col-md-4 w-100 align-self-center">
            <h2 className="text-dark mb-0 text-center mb-4">Login</h2>
            <Card className="p-5 pb-3" style={{ borderRadius: "15px" }}>
              <Form onSubmit={handleLoginData} autoComplete="off">
                <AlertMessage
                  variant="danger"
                  error={props.auth.loginError}
                  onDismiss={handleAlertDismiss}
                />
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="bg-white border-right-0">
                        <img src={Mail} className="img-fluid" width="12" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="border-left-0"
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      placeholder="Enter email"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className="bg-white border-right-0">
                        <img src={Lock} className="img-fluid" width="12" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      className="border-left-0"
                      name="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      placeholder="Password"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="d-flex justify-content-between mt-4">
                  <Link to="/forgot-password" style={{ color: "#E0475B" }}>
                    Forgot Password?
                  </Link>
                  <Button
                    className="rounded-pill btn-danger px-4"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form.Group>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(LogIn));

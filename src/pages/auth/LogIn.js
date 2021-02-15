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
    hidden: true,
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

  function handlePasswordToggle(event) {
    event.preventDefault();
    setValues({ ...values, hidden: !values.hidden });
  }
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
  console.log(props);
  console.log("LOADING\n", props.auth.isFetching);
  console.log(props.auth.loginError);
  return (
    <div className="min-height mt-5">
      <div className="container-fluid h-100">
        <div className="row h-100 justify-content-center">
          <div className="col-md-4 w-100 align-self-center">
            {props.auth.isFetching ? (
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-secondary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-dark mb-0 text-center mb-4">Login</h2>
                <Card className="p-5 pb-3" style={{ borderRadius: "15px" }}>
                  <Form onSubmit={handleLoginData} autoComplete="off">
                    <AlertMessage
                      variant="danger"
                      error={
                        props.auth.loginError && {
                          message: props.auth.loginError,
                        }
                      }
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
                          className="border-left-0 border-right-0"
                          name="password"
                          value={values.password}
                          onChange={handleChange("password")}
                          placeholder="Password"
                          type={values.hidden ? "password" : "text"}
                        />
                        <div className="input-group-append">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "60px",
                              border: "1px solid #ced4da",
                              borderTopRightRadius: "5px",
                              borderBottomRightRadius: "5px",
                              backgroundColor: "transparent",
                              cursor: "pointer",
                            }}
                            className="border-left-0"
                            onClick={handlePasswordToggle}
                          >
                            <small>{values.hidden ? "Show" : "Hide"}</small>
                          </div>
                        </div>
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
            )}
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

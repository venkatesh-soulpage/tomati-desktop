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
          console.log("hittin");

          props.history.push("/verify-email");
        } else if (userData.sms_verified_at === null) {
          console.log("hittin");

          props.history.push("/verify-phone");
        } else if (sessionStorage.getItem("token")) {
          console.log("hittin");
          props.history.push("/dashboard/outlet");
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
        <div className="row h-100 login d-flex justify-content-center">
          {props.auth.isFetching ? (
            <div class="d-flex justify-content-center align-items-center">
              <div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="col-md-4 w-100 p-0 ">
              <h2 className="text-dark d-none d-md-block mb-0 text-center mb-4">
                Login
              </h2>
              <Card className="p-md-5 pb-md-3 p-2 login-card card-border">
                <h2 className="text-dark d-blocl d-md-none mb-0 text-center mb-4">
                  Login
                </h2>
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
                        required
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
                        className="border-left-0 border-right-none"
                        name="password"
                        value={values.password}
                        onChange={handleChange("password")}
                        placeholder="Password"
                        type={values.hidden ? "password" : "text"}
                        required
                      />
                      <div className="input-group-append">
                        <div
                          className="show-button"
                          onClick={handlePasswordToggle}
                        >
                          <small>{values.hidden ? "Show" : "Hide"}</small>
                        </div>
                      </div>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="d-flex justify-content-between mt-4">
                    <Link className="red-link" to="/forgot-password">
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
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(LogIn));

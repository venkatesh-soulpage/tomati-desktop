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
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// custom components
import PasswordTextField from "components/PasswordTextField";
import AlertMessage from "components/AlertMessage";
import Footer from "components/Footer";

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
            <Card className="rounded shadow">
              <Form
                onSubmit={handleLoginData}
                autoComplete="off"
                className="p-5"
              >
                <AlertMessage
                  variant="danger"
                  error={props.auth.loginError}
                  onDismiss={handleAlertDismiss}
                />
                <Form.Group>
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
                  <PasswordTextField
                    name="password"
                    value={values.password}
                    onChange={handleChange("password")}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="d-flex justify-content-between">
                  <Link to="/forgot-password" style={{ color: "#E0475B" }}>
                    Forgot Password?
                  </Link>
                  <Button type="submit" style={{ borderRadius: "20px" }}>
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

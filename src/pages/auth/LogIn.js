import React from "react";
// Redux
import { connect } from "react-redux";
import * as Action from "_actions";
// Router
import { withRouter, Link } from "react-router-dom";
// Bootstrap Components
import { InputGroup, Form, Button, Card } from "react-bootstrap";
// custom components
import AlertMessage from "components/AlertMessage";

// icons
import Lock from "assets/img/Lock.svg";
import Mail from "assets/img/Mail.svg";
import Loading from "components/Loading";

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
    props.dispatch(Action.receiveUserData({}));
    props.dispatch(Action.handleLoginError(null));
  }, []);

  // For handling changes in the inputs
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    props.dispatch(Action.handleLoginError(null));
    setValues((values) => ({ ...values, [name]: value }));
  };

  function handlePasswordToggle(event) {
    event.preventDefault();
    setValues({ ...values, hidden: !values.hidden });
  }
  // Handling the login data and sending it to the service.
  async function handleLoginData(event) {
    event.preventDefault();
    // Creating post Data
    var postData = {
      email: values.email,
      password: values.password,
    };
    await props.dispatch(Action.userLogin(postData));
  }

  function handleAlertDismiss() {
    props.dispatch(Action.handleLoginError(null));
  }
  return (
    <div className="container-fluid min-height d-flex align-items-center justify-content-center">
      {props.auth.isFetching ? (
        <Loading textSecondary={true} />
      ) : (
        <div className="col-md-4 w-100 p-0 ">
          <h2 className="text-dark text-center mb-4">Login</h2>
          <Card className="p-md-5 pb-md-3 p-2 login-card card-border">
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
                      <img
                        src={Mail}
                        alt="mail"
                        className="img-fluid"
                        width="20"
                        height="20"
                      />
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
                      <img
                        src={Lock}
                        alt="lock"
                        className="img-fluid"
                        width="20"
                        height="20"
                      />
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
                    <div className="show-button" onClick={handlePasswordToggle}>
                      <small>{values.hidden ? "Show" : "Hide"}</small>
                    </div>
                  </div>
                </InputGroup>
              </Form.Group>
              <Form.Group className="d-flex justify-content-between align-items-center mt-4">
                <Link className=" red-link" to="/forgot-password">
                  Forgot Password?
                </Link>
                <Button className="rounded-pill btn-danger px-4" type="submit">
                  Login
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(LogIn));

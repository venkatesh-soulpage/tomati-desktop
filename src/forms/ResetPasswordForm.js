import React from "react";
//redux
import { connect } from "react-redux";
import { resetPassword } from "_actions/auth";
// React router
import { Link, useLocation } from "react-router-dom";
//react bootstrap

// local components
import PasswordTextField from "components/PasswordTextField";
import CustomModal from "components/CustomModal";
import Success from "assets/img/Success.svg";
import Error from "assets/img/Error.svg";

import { Card, Button, Form } from "react-bootstrap";

function ResetPasswordForm(props) {
  const [values, setValues] = React.useState({
    token: "",
    password: "",
    re_password: "",
  });
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const [message1, setMessage1] = React.useState("");

  const [alert, setAlert] = React.useState({
    variant: "warning",
    message: "Password does not match",
    switch: false,
  });
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  function onFormSubmit(event) {
    event.preventDefault();
    const email = query.get("email");
    const token = query.get("token");
    var data = {
      email,
      token,
      password: values.password,
    };
    if (values.password === values.re_password) {
      props.dispatch(resetPassword(data));
      setMessage(props.auth.resetPasswordError);
      setShow(true);
    } else {
      setMessage("password does not match");
      setShow(true);
    }
  }

  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const analyze = (e) => {
    const val = e.target.value;
    if (strongRegex.test(val)) {
      setError(true);
      setMessage1("Strong Password");
    } else {
      setError(true);
      setMessage1(
        "Your password must be at-least 8 characters with uppercase, lowercase, number & special characters"
      );
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="min-height mt-5 pt-5">
      <div className="container">
        <div className="row h-100 justify-content-center mt-5">
          <div className="col-md-6 w-100 align-self-center">
            <h2 className="text-dark mb-0 text-center mb-4">Update Password</h2>
            <Card className="p-5 pb-3" style={{ borderRadius: "15px" }}>
              <Form>
                <Form.Group>
                  <Form.Label>New Password</Form.Label>
                  <PasswordTextField
                    name="password"
                    value={values.password}
                    onChange={handleChange("password")}
                    placeholder="New Password"
                    autoComplete="off"
                    onBlur={analyze}
                  />
                  {error ? (
                    <span
                      style={
                        message1 ===
                        "Your password must be at-least 8 characters with uppercase, lowercase, number & special characters"
                          ? {
                              color: "#cc3300",
                              marginTop: "2px",
                              fontSize: "11px",
                            }
                          : {
                              color: "#4BB543",
                              marginTop: "2px",
                              fontSize: "11px",
                            }
                      }
                    >
                      {message1}
                    </span>
                  ) : null}
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="password"
                    value={values.re_password}
                    onChange={handleChange("re_password")}
                    placeholder="Confirm New Password"
                  />
                </Form.Group>
                <div className="text-right">
                  <Form.Group className="mt-3">
                    <Button
                      variant="danger"
                      className="rounded-pill"
                      onClick={onFormSubmit}
                    >
                      Update
                    </Button>{" "}
                    <Button
                      type="submit"
                      variant="light"
                      className="rounded-pill"
                    >
                      Cancel
                    </Button>
                  </Form.Group>
                </div>
                <div className="text-muted">
                  <Link className="btn btn-link" to="/">
                    Login as a different user
                  </Link>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
      <CustomModal
        show={show}
        onHide={() => setShow(false)}
        message={props.auth.resetPasswordError || message}
        statusicon={
          props.auth.resetPasswordError === "Password updated!"
            ? Success
            : Error
        }
        button={
          props.auth.resetPasswordError === "Password updated!" ? (
            <Link to="/">
              <button className="btn btn-primary mt-3 rounded-pill px-4 py-2">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="btn btn-primary mt-3 rounded-pill px-4 py-2"
              onClick={() => setShow(false)}
            >
              Try again
            </button>
          )
        }
      />
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(ResetPasswordForm);

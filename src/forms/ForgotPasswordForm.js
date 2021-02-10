import React from "react";
//redux
import { connect } from "react-redux";
import { forgetPassword, receiveForgotPasswordError } from "_actions/auth";
// React router
import { Link } from "react-router-dom";
//react bootstrap

import { Alert, Card, Button, Form } from "react-bootstrap";

function ForgotPasswordForm(props) {
  const [values, setValues] = React.useState({
    email: "",
  });

  function onFormSubmit(event) {
    event.preventDefault();
    var postData = {
      email: values.email,
    };
    props.dispatch(forgetPassword(postData));
  }

  return (
    <div className="bg-light container-fluid d-flex justify-content-center align-items-center h-75">
      <div className="container ">
        <h3 className="text-center">Forgot Password</h3>
        <Card
          className="mt-5"
          style={{ borderRadius: "15px", width: "fit-content", margin: "auto" }}
        >
          <Form onSubmit={onFormSubmit} className="p-5">
            {props.auth.forgotPasswordError.status === "ERROR" && (
              <Alert
                variant="danger"
                onClose={() => {
                  receiveForgotPasswordError({});
                }}
                dismissible
              >
                Email Doesn't exist please try again with another.
              </Alert>
            )}

            <small className="text-secondary d-flex justify-content-center p-3">
              Please enter the email address associated with this account
            </small>
            <Form.Group>
              <Form.Control
                type="email"
                value={values.email}
                onChange={(event) => {
                  setValues({ ...values, email: event.target.value });
                }}
                placeholder="Email"
                required
              ></Form.Control>
            </Form.Group>
            <div className="d-flex">
              <Link
                className="btn btn-link"
                to="/login"
                style={{ color: "#e0475b" }}
              >
                Back to Login
              </Link>
              <Button
                type="submit"
                variant="primary"
                className="ml-auto "
                style={{ borderRadius: "20px" }}
              >
                Retrieve
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(ForgotPasswordForm);

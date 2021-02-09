import React from "react";
//redux
import { connect } from "react-redux";
import { forgetPassword, receiveForgotPasswordError } from "_actions/auth";
// React router
import { Link } from "react-router-dom";
//react bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

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
    <Form onSubmit={onFormSubmit} className="">
      <Form.Group>
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
      </Form.Group>
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
        <Link className="btn btn-link" to="/login">
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
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(ForgotPasswordForm);

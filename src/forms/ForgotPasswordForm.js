import React from "react";
//redux
import { connect } from "react-redux";
import * as Action from "_actions";
// React router
import { Link } from "react-router-dom";
//react bootstrap
import AlertMessage from "components/AlertMessage";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import Mail from "assets/img/Mail.svg";
import Loading from "components/Loading";

function ForgotPasswordForm(props) {
  const [values, setValues] = React.useState({
    email: "",
  });

  function onFormSubmit(event) {
    event.preventDefault();
    var postData = {
      email: values.email,
    };
    props.dispatch(Action.forgetPassword(postData));
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
            <AlertMessage
              variant="danger"
              error={
                props.reset.forgotPasswordError && {
                  message: "Email Doesn't exist please try again.",
                }
              }
              onDismiss={() => {
                props.dispatch(Action.receiveForgotPasswordError(null));
              }}
            ></AlertMessage>
            <small className="text-secondary d-flex justify-content-center p-3">
              Please enter the email address associated with this account
            </small>

            <Form.Group>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="bg-white border-right-0">
                    <img
                      alt="mail"
                      src={Mail}
                      className="img-fluid"
                      width="20"
                      height="20"
                    />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="email"
                  className="border-left-0"
                  value={values.email}
                  onChange={(event) => {
                    setValues({ ...values, email: event.target.value });
                  }}
                  placeholder="Email"
                  required
                ></Form.Control>
              </InputGroup>
            </Form.Group>

            <div className="d-flex align-items-center">
              <Link className="red-link" to="/">
                Back to Login
              </Link>
              <Button
                type="submit"
                variant="primary"
                className="ml-auto "
                style={{ borderRadius: "20px" }}
              >
                {props.reset.isFetching ? <Loading /> : "Retrieve"}
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { reset: state.reset };
}
export default connect(mapStateToProps)(ForgotPasswordForm);

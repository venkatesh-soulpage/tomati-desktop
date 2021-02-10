import React from "react";
//redux
import { connect } from "react-redux";
import { resetPassword } from "_actions/auth";
// React router
import { Link, useLocation } from "react-router-dom";
//react bootstrap

// local components
import PasswordTextField from "components/PasswordTextField";

import { Card, Button, Form } from "react-bootstrap";

function ResetPasswordForm(props) {
  const [values, setValues] = React.useState({
    token: "",
    password: "",
    re_password: "",
  });

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
    if (values.password === values.re_password) {
      var data = {
        email,
        token,
        password: values.password,
      };
      console.log(data, "DATA");
      props.dispatch(resetPassword(data));
    } else {
    }
  }

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="bg-light container-fluid d-flex justify-content-center align-items-center h-75 mt-5">
      <div className="container ">
        <h3 className="text-center">Forgot Password</h3>
        <Card
          className="mt-5"
          style={{ borderRadius: "15px", width: "fit-content", margin: "auto" }}
        >
          <Form onSubmit={onFormSubmit} className="p-5">
            <Form.Group></Form.Group>
            <h3>Reset Password</h3>

            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <PasswordTextField
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                placeholder="New Password"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                value={values.re_password}
                onChange={handleChange("re_password")}
                placeholder="Confirm New Password"
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="primary">
                Update
              </Button>{" "}
              <Button type="submit" variant="light">
                Cancel
              </Button>
            </Form.Group>
            <div className="text-muted">
              <Link className="btn btn-link" to="/login">
                Login as a different user
              </Link>
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
export default connect(mapStateToProps)(ResetPasswordForm);

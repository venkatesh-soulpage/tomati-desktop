import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Loading from "components/Loading";

const ChangePassword = ({
  values,
  handleChange,
  handlePasswordToggle,
  error,
  message,
  handlePasswordUpate,
  handlePasswordToggle2,
  props,
  setError,
  setMessage,
}) => {
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const analyze = (e) => {
    if (strongRegex.test(e.target.value)) {
      setError(false);
    } else {
      if (values.current_password === e.target.value) {
        setMessage("Old password and New password cannot be same");
      } else {
        setMessage(
          "Your password must be at-least 8 characters with uppercase, lowercase, number & special characters"
        );
      }
      setError(true);
    }
  };
  return (
    <div>
      <div>
        <Form.Group>
          <InputGroup className="w-50">
            <Form.Control
              type={values.hidden ? "text" : "password"}
              placeholder="Current Password"
              value={values.current_password}
              onChange={handleChange("current_password")}
              required
              className="w-50 border-right-none"
            />
            <div className="input-group-append">
              <div className="show-button" onClick={handlePasswordToggle}>
                <small>{values.hidden ? "Hide" : "Show"}</small>
              </div>
            </div>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <InputGroup className="w-50">
            <Form.Control
              type={values.hidden2 ? "text" : "password"}
              placeholder="New Password"
              value={values.new_password}
              onChange={handleChange("new_password")}
              required
              className="w-50 border-right-none"
              onBlur={analyze}
            />
            <div className="input-group-append">
              <div className="show-button" onClick={handlePasswordToggle2}>
                <small>{values.hidden2 ? "Hide" : "Show"}</small>
              </div>
            </div>
          </InputGroup>
          {error ? <span className="message-style">{message}</span> : null}
        </Form.Group>
        <button
          className="btn btn-danger mt-4"
          onClick={handlePasswordUpate}
          disabled={!values.current_password || !values.new_password}
        >
          {props.auth.isFetching &&
          values.current_password &&
          values.new_password ? (
            <Loading />
          ) : (
            "Save"
          )}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;

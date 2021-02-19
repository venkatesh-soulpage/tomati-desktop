import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordTextField from "components/PasswordTextField";
import { Link } from "react-router-dom";

function PersonalDetails({
  values,
  handleChange,
  handleEmailCheck,
  props,
  setValues,
  message,
  setMessage,
}) {
  const [error, setError] = useState(false);
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const analyze = (e) => {
    const val = e.target.value;
    if (strongRegex.test(e.target.value)) {
      setError(true);
      setMessage("Strong Password");
    } else {
      setError(true);
      setMessage(
        "Your password must be at-least 8 characters with uppercase, lowercase, number & special characters"
      );
    }
  };

  return (
    <>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="FullName"
          value={values.full_name}
          onChange={handleChange("full_name")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Company Name"
          value={values.company_name}
          onChange={handleChange("company_name")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange("email")}
          onBlur={() => {
            console.log("blur");
            handleEmailCheck(values.email);
          }}
          required
        />
        <Form.Text>
          {props.auth.verifySuccess === "This Email is available" ? (
            <small style={{ color: "#4BB543" }}>
              {props.auth.verifySuccess}
            </small>
          ) : props.auth.verifySuccess === "Enter valid Email" ? (
            <small style={{ color: "#E0475B" }}>
              {props.auth.verifySuccess}
            </small>
          ) : (
            props.auth.verifyError && (
              <small style={{ color: "#E0475B" }}>Email is already taken</small>
            )
          )}
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <PasswordTextField
          value={values.password}
          onChange={handleChange("password")}
          placeholder="Password"
          required
          onBlur={analyze}
        />
        {error ? (
          <span
            style={
              message ===
              "Your password must be at-least 8 characters with uppercase, lowercase, number & special characters"
                ? { color: "#cc3300", marginTop: "2px", fontSize: "11px" }
                : { color: "#4BB543", marginTop: "2px", fontSize: "11px" }
            }
          >
            {message}
          </span>
        ) : null}
      </Form.Group>
      <Form.Group className="d-flex mt-3 mt-md-0">
        <Form.Check className="mt-0" type="checkbox" required />
        <Form.Text>
          <p className="m-0">
            I agree to Tomati{" "}
            <Link
              style={{ color: "#E0475B" }}
              to="/termspolicy"
              target="_blank"
            >
              <u>
                <b>Terms</b>
              </u>
            </Link>{" "}
            and{" "}
            <Link
              style={{ color: "#E0475B" }}
              to="/privacypolicy"
              target="_blank"
            >
              <u>
                <b>Privacy Policy</b>
              </u>
            </Link>
            .
          </p>
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="I agree to receive Tomati news and updates."
          checked={values.is_notifications_permited}
          onChange={() =>
            setValues({
              ...values,
              is_notifications_permited: !values.is_notifications_permited,
            })
          }
        />
      </Form.Group>

      <Form.Group className="d-flex justify-content-end mt-5">
        <Button
          type="submit"
          form="register-form"
          className="btn btn-danger mt-md-3 mt-5 rounded-pill px-4"
          style={{ borderRadius: "30px", width: "140px", height: "54px" }}
        >
          Continue
        </Button>
      </Form.Group>
    </>
  );
}

export default PersonalDetails;

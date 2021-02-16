import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordTextField from "components/PasswordTextField";
import { Link } from "react-router-dom";
function PersonalDetails({ values, handleChange, handleEmailCheck, props }) {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  const mediumRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );

  const analyze = (e) => {
    const val = e.target.value;
    if (strongRegex.test(e.target.value)) {
      setError(true);
      setMessage("Strong Password");
    } else if (mediumRegex.test(e.target.value)) {
      setError(true);
      setMessage("Weak Password");
    } else {
      setError(true);
      setMessage(
        "Password must contain one capital letter, one small letter, one number and one symbol"
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
              "Password must contain one capital letter, one small letter, one number and one symbol"
                ? { color: "#cc3300", marginTop: "2px" }
                : { color: "#4BB543", marginTop: "2px" }
            }
          >
            {message}
          </span>
        ) : null}
      </Form.Group>
      <Form.Group className="d-flex">
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
        />
      </Form.Group>

      <Form.Group className="d-flex justify-content-end mt-5">
        <Button
          type="submit"
          form="register-form"
          className="btn btn-danger mt-3 rounded-pill px-4"
        >
          Continue
        </Button>
      </Form.Group>
    </>
  );
}

export default PersonalDetails;

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordTextField from "components/PasswordTextField";
import { Link } from "react-router-dom";
function PersonalDetails({ values, handleChange, handleEmailCheck, props }) {
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
        />
      </Form.Group>
      <Form.Group className="d-flex ">
        <Form.Check type="checkbox" required />
        <Form.Text>
          <p>
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
              target="_top"
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

      <Form.Group className="d-flex justify-content-end">
        <Button
          type="submit"
          form="register-form"
          className="btn btn-primary mt-3"
          style={{ borderRadius: "30px", width: "140px", height: "54px" }}
        >
          Continue
        </Button>
      </Form.Group>
    </>
  );
}

export default PersonalDetails;

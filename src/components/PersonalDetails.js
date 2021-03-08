import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordTextField from "components/PasswordTextField";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

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

  let inputProps = {
    placeholder: "Date of Birth",
  };

  return (
    <>
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
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="FullName"
          value={values.first_name}
          onChange={handleChange("first_name")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={values.last_name}
          onChange={handleChange("last_name")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Phone Number"
          value={values.phone_number}
          onChange={handleChange("phone_number")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Datetime
          inputProps={inputProps}
          value={values.date_of_birth}
          onChange={(e) =>
            setValues({ ...values, date_of_birth: moment(e).format() })
          }
        />
      </Form.Group>
      <Form.Group></Form.Group>
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
      <PasswordTextField
        value={values.confirm}
        onChange={handleChange("confirm")}
        placeholder="Confirm Password"
        required
        onBlur={analyze}
      />

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

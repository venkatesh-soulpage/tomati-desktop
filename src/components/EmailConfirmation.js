import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Back from "../assets/img/Back.svg";
function EmailConfirmation({
  values,
  handleChange,
  handleStep,
  props,
  getEmailRegisterOtp,
}) {
  return (
    <>
      <Form.Group>
        <Form.Label style={{ fontSize: "15px", fontFamily: "Poppins" }}>
          We've sent you a six-digit confirmation code to {values.email}. Please
          enter it below to confirm your email address.
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter 6-digit code"
          value={values.code}
          onChange={handleChange("code")}
          required
        />
      </Form.Group>
      <Form.Group className="m-0 p-0 mt-5">
        <Form.Label
          className="m-0 p-0"
          style={{ fontSize: "16px", fontFamily: "Poppins" }}
        >
          Didn't get the code ?
        </Form.Label>
        <Form.Label
          className="m-0 p-0"
          style={{
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#E0475B",
          }}
          onClick={() => {
            props.dispatch(getEmailRegisterOtp({ email: values.email }));
          }}
        >
          &nbsp; Send code again
        </Form.Label>
      </Form.Group>
      <Form.Group className="m-0 p-0 mb-5">
        <Form.Label
          className="m-0 p-0"
          style={{ fontSize: "16px", fontFamily: "Poppins" }}
        >
          Or
        </Form.Label>
        <Form.Label
          className="m-0 p-0"
          style={{
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#E0475B",
          }}
          onClick={() => {
            handleStep("step", 1);
          }}
        >
          &nbsp; Change email
        </Form.Label>
      </Form.Group>

      <Form.Group className="d-flex justify-content-between">
        <img
          className="mt-3"
          style={{ height: "54px" }}
          src={Back}
          alt="icon"
          onClick={() => {
            handleStep("step", 1);
          }}
        />
        <Button
          type="submit"
          form="email-form"
          className="btn btn-primary mt-3"
          style={{ borderRadius: "30px", width: "140px", height: "54px" }}
        >
          Continue
        </Button>
      </Form.Group>
    </>
  );
}

export default EmailConfirmation;

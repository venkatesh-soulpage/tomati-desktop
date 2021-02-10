import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordTextField from "components/PasswordTextField";

function PersonalDetails({ values, handleChange, setValues, handleStep }) {
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
          required
        />
      </Form.Group>
      <Form.Group>
        <PasswordTextField
          value={values.password}
          onChange={handleChange("password")}
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="I agree to Tomati Terms and Privacy Policy."
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="I agree to receive Tomati news and updates."
        />
      </Form.Group>

      <Form.Group className="d-flex justify-content-end">
        <Button
          form="personal-form"
          type="submit"
          // onClick={handleStep("step", 2)}
          className="btn btn-primary mt-3"
          style={{ borderRadius: "20px" }}
        >
          Continue
        </Button>
      </Form.Group>
    </>
  );
}

export default PersonalDetails;

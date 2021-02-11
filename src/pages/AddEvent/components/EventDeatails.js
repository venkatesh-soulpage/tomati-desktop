import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const EventDetails = ({
  handleStep,
  values,
  handleChange,
  setValues,
  handleFile,
}) => {
  return (
    <div>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Event Name"
          value={values.name}
          onChange={handleChange("name")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone Number"
          value={values.phone_number}
          onChange={handleChange("phone_number")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address"
          value={values.address}
          onChange={handleChange("address")}
          as="textarea"
          rows={3}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Description"
          value={values.description}
          onChange={handleChange("description")}
          as="textarea"
          rows={3}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          id="coverImage"
          accept=".png ,.jpg, .jpeg"
          label="Custom file input"
          type="file"
          custom
          className="d-none"
          onChange={handleFile("cover_image")}
        />

        <Card className="p-4">
          <label for="coverImage">
            <h6>Upload Cover Image</h6>
          </label>
        </Card>
      </Form.Group>
      <Form.Group>
        <Form.File
          accept=".png, .jpg,.jpeg"
          id="logoImage"
          label="Custom file input"
          type="file"
          custom
          className="d-none"
          onChange={handleFile("logo_img")}
        />
        <Card className="p-4">
          <label for="logoImage">
            <h6>Upload Logo Image</h6>
          </label>
        </Card>
      </Form.Group>
      <Form.Group className="d-flex justify-content-end">
        <Button
          onClick={handleStep}
          form="register-form"
          className="btn btn-primary mt-3"
          style={{ borderRadius: "20px" }}
        >
          Continue
        </Button>
      </Form.Group>
    </div>
  );
};

export default EventDetails;

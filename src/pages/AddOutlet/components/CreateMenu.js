import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const CreateMenu = ({ values, handleChange, handleCreateOutlet }) => {
  return (
    <div>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Location"
          value={values.location_id}
          onChange={handleChange("location_id")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.File
          id="coverImage"
          label="Custom file input"
          custom
          className="d-none"
          value={values.menu}
          onChange={handleChange("menu")}
        />
        <Card className="p-4">
          <label for="coverImage">
            <h6>Upload Menu</h6>
          </label>
        </Card>
      </Form.Group>
      <Form.Group className="d-flex justify-content-end">
        <Button
          form="register-form"
          className="btn btn-primary mt-3"
          style={{ borderRadius: "20px" }}
          onClick={handleCreateOutlet}
        >
          Continue
        </Button>
      </Form.Group>
    </div>
  );
};

export default CreateMenu;

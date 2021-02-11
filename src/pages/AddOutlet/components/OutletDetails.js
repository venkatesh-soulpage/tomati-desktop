import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const OutletDetails = ({ handleStep, values, handleChange, setValues }) => {
  const fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });
  return (
    <div>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Outlet Name"
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
          label="Custom file input"
          type="file"
          custom
          className="d-none"
          value={values.cover_image}
          onChange={async (e) => {
            console.log(e.target.files[0].name);
            const url = await fileToBase64(e.target.files[0]);
            console.log(url);
            // setValues({ ...values, cover_image: e.target.files.FileList });
          }}
        />
        <Card className="p-4">
          <label for="coverImage">
            <h6>Upload Cover Image</h6>
          </label>
        </Card>
      </Form.Group>
      <Form.Group>
        <Form.File
          id="coverImage"
          label="Custom file input"
          type="file"
          custom
          className="d-none"
          value={values.logo_img}
          onChange={handleChange("logo_img")}
        />
        <Card className="p-4">
          <label for="coverImage">
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

export default OutletDetails;

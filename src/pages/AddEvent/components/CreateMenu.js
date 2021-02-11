import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Papa from "papaparse";
import _ from "lodash";

const CreateMenu = ({
  values,
  handleChange,
  handleCreateOutlet,
  setValues,
}) => {
  const uploadFile = (data) => {
    const { data: csv_data } = data;
    setValues({ ...values, menu: _.reject(csv_data, { name: "" }) });
  };
  return (
    <div>
      <Form.Group>
        <Form.Control
          as="select"
          placeholder="Location"
          value={values.location}
          onChange={handleChange("location_id")}
          required
        >
          <option>Select Location</option>
          <option value={7}>Nigeria</option>
          <option disabled>Angola (Coming Soon)</option>
          <option disabled>Brazil (Coming Soon)</option>
          <option disabled>Colombia (Coming Soon)</option>
          <option disabled>France (Coming Soon)</option>
          <option disabled>Ghana (Coming Soon)</option>
          <option disabled>Kenya (Coming Soon)</option>
          <option disabled>Poland (Coming Soon)</option>
          <option disabled>South Africa (Coming Soon)</option>
          <option disabled>Spain (Coming Soon)</option>
          <option disabled>United Arab Emirates (Coming Soon)</option>
          <option disabled>United Kingdom (Coming Soon)</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.File
          id="coverImage"
          accept=".csv"
          label="Custom file input"
          custom
          className="d-none"
          onChange={(e) => {
            Papa.parse(e.target.files[0], {
              complete: uploadFile,
              header: true,
              transformHeader: (header) =>
                header.toLowerCase().replace(/\W/g, "_"),
            });
          }}
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

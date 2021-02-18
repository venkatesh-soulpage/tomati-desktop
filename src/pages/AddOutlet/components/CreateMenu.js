import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Papa from "papaparse";
import _ from "lodash";
import Back from "assets/img/Back.svg";
import UploadCover from "assets/img/UploadCover.svg";

const CreateMenu = ({
  values,
  handleChange,
  handleCreateOutlet,
  setValues,
  handleStepPrev,
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
          id="menu"
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
        <Card
          style={{ border: " 1px dashed", cursor: "pointer" }}
          className="p-2 d-flex pt-4"
        >
          <label for="menu" style={{ cursor: "pointer" }}>
            <h6>
              <img src={UploadCover} alt="icon" className="mx-4" />
              {values.menu ? (
                <span>{values.menu[0].name}</span>
              ) : (
                <span>Upload Menu</span>
              )}
            </h6>
          </label>
        </Card>
        <h6 className="mt-2" style={{ color: "#989CA4" }}>
          Only CSV Files
        </h6>
      </Form.Group>
      <Form.Group className="d-flex justify-content-between">
        <img
          className="mt-3"
          style={{ height: "54px", cursor: "pointer" }}
          src={Back}
          alt="icon"
          onClick={() => {
            handleStepPrev("step", 1);
          }}
        />
        <Button
          form="register-form"
          className="btn btn-primary mt-3 rounded-pill px-4"
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

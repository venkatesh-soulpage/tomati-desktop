import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Papa from "papaparse";
import _ from "lodash";
import UploadCover from "assets/img/UploadCover.svg";
import Back from "assets/img/Back.svg";

const CreateMenu = ({
  values,
  handleChange,
  handleCreateOutlet,
  setValues,
  handleStepPrev,
  props,
}) => {
  const [menuName, setMenuName] = useState(null);

  const arr =
    props.auth.locations &&
    props.auth.locations.filter((location) => {
      return location.id === 7;
    });
  const arr2 =
    props.auth.locations &&
    props.auth.locations.filter((location) => {
      return location.id !== 7;
    });
  const newLocations = arr && arr.concat(arr2);

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
          {_.map(newLocations, function (location) {
            return (
              <option
                key={location.id}
                value={location.id}
                disabled={location.id !== 7}
                onClick={() => {
                  setValues({ ...values, location });
                }}
              >
                {location.name} {location.id !== 7 && "(Coming Soon)"}
              </option>
            );
          })}
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
            setMenuName(e.target.files[0].name);

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
              {values.menu ? <span>{menuName}</span> : <span>Upload Menu</span>}
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

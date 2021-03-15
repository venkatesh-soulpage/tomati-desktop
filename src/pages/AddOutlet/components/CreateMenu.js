import React, { useState } from "react";
import { Form, Button, Card, Dropdown } from "react-bootstrap";
import Papa from "papaparse";
import _ from "lodash";
import Back from "assets/img/Back.svg";
import UploadCover from "assets/img/UploadCover.svg";
import Loading from "components/Loading";

const CreateMenu = ({
  values,
  handleCreateOutlet,
  setValues,
  handleStepPrev,
  props,
}) => {
  const [menuName, setMenuName] = useState(null);

  const uploadFile = (data) => {
    const { data: csv_data } = data;
    setValues({ ...values, menu: _.reject(csv_data, { name: "" }) });
  };

  return (
    <div>
      <Form.Group>
        <Dropdown>
          <Dropdown.Toggle className="custom-dropdown text-left d-flex justify-content-between align-items-center btn">
            {values.location_id
              ? _.find(props.outlet.locations, [
                  "id",
                  parseInt(values.location_id),
                ]).name
              : "Select Locations (required)"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {_.map(props.outlet.locations, function (location) {
              return (
                <Dropdown.Item
                  key={location.id}
                  value={location.id}
                  onClick={() => {
                    setValues((values) => ({
                      ...values,
                      location_id: location.id,
                    }));
                  }}
                >
                  {location.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
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
        <Card className="p-2 d-flex pt-4 b1-dash cr-p">
          <label for="menu" className="cr-p">
            <h6>
              <img src={UploadCover} alt="icon" className="mx-4" />
              {values.menu ? <span>{menuName}</span> : <span>Upload Menu</span>}
            </h6>
          </label>
        </Card>
        <h6 className="mt-2 grey-color">Only CSV Files</h6>
        <h6 className="mt-2 grey-color font-italic">
          watch the CSV tutorial here
        </h6>
        <h6 className="mt-2 grey-color font-italic">
          download CSV template here
        </h6>
      </Form.Group>
      <Form.Group className="d-flex justify-content-between">
        <img
          className="mt-3 ht-54 cr-p"
          src={Back}
          alt="icon"
          onClick={() => {
            handleStepPrev("step", 1);
          }}
        />
        <Button
          type="submit"
          form="email-form"
          className="btn btn-primary mt-3 rounded-pill px-4"
          onClick={handleCreateOutlet}
        >
          {props.outlet.isFetching ? <Loading /> : "Continue"}
        </Button>
      </Form.Group>
    </div>
  );
};

export default CreateMenu;

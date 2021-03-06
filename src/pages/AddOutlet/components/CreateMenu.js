import React, { useState } from "react";
import { Form, Card, Dropdown } from "react-bootstrap";
import Papa from "papaparse";
import _ from "lodash";
import Back from "assets/img/Back.svg";
import UploadCover from "assets/img/UploadCover.svg";
import Loading from "components/Loading";
import { CSV_TEMPLATE_URL } from "constants/APIRoutes";

const CreateMenu = ({
  values,
  handleCreateOutlet,
  setValues,
  handleStepPrev,
  props,
  setError,
  setMessage,
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
            {values?.location_id
              ? _.find(props.outlet.locations, [
                  "id",
                  parseInt(values.location_id),
                ]).name
              : "Select Locations (required)"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-100">
            {_.map(props?.outlet?.locations, function (location) {
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
            if (e.target.files[0].size > 235520) {
              setError(true);
              setMessage("Maximum file size is 230Kb");
            } else {
              setMenuName(e.target.files[0].name);
              Papa.parse(e.target.files[0], {
                complete: uploadFile,
                header: true,
                transformHeader: (header) =>
                  header.toLowerCase().replace(/\W/g, "_"),
              });
            }
          }}
        />
        <Card className="p-2 d-flex pt-4 b1-dash cr-p">
          <label htmlFor="menu" className="cr-p">
            <h6 className="d-flex">
              <img src={UploadCover} alt="icon" className="mx-4" />
              {values?.menu ? (
                <span>{menuName}</span>
              ) : (
                <span>Upload Menu</span>
              )}
            </h6>
          </label>
        </Card>
        <h6 className="mt-2 grey-color">Only CSV Files 230Kb max.</h6>
        <h6 className="mt-2 grey-color font-italic">
          watch the CSV tutorial here
        </h6>
        <a className="mt-2 grey-link font-italic" href={CSV_TEMPLATE_URL}>
          download CSV template here
        </a>
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
        <button
          type="submit"
          form="email-form"
          className="btn btn-primary mt-3 rounded-pill px-4"
          onClick={handleCreateOutlet}
        >
          {props?.outlet?.isFetching ? <Loading /> : "Continue"}
        </button>
      </Form.Group>
    </div>
  );
};

export default CreateMenu;

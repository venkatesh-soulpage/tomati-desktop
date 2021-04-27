import React from "react";
import { Form, Card } from "react-bootstrap";
import UploadCover from "assets/img/UploadCover.svg";

// modal

const OutletDetails = ({
  handleStep,
  values,
  handleChange,
  setValues,
  handleFile,
  fileErr,
}) => {
  return (
    <div>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Menu Name"
          value={values?.name}
          onChange={handleChange("name")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Phone Number"
          value={values?.phone_number}
          onChange={handleChange("phone_number")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address"
          value={values?.address}
          onChange={handleChange("address")}
          as="textarea"
          rows={3}
          required
          maxLength="144"
        />
        <h6 className="mt-2 grey-color">Max length 144</h6>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Menu Bio"
          value={values?.description}
          onChange={handleChange("description")}
          as="textarea"
          rows={3}
          maxLength="144"
          required
        />
        <h6 className="mt-2 grey-color">Max length 144</h6>
      </Form.Group>
      <Form.Group>
        <Form.Control
          id="coverImage"
          accept=".png, .jpg,.jpeg"
          label="Custom file input"
          type="file"
          custom
          className="d-none"
          onChange={handleFile("cover_image")}
        />

        <Card className="p-2 pt-4 b1-dash cr-p">
          <label htmlFor="coverImage" className="cr-p">
            <h6>
              {" "}
              <img src={UploadCover} alt="icon" className="mx-4" />
              {values?.cover_image ? (
                <span>{values?.cover_image[0].name}</span>
              ) : (
                <span>Upload Menu Cover photo</span>
              )}
            </h6>
          </label>
        </Card>
        <h6 className="mt-2 grey-color">230Kb Max</h6>
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

        <Card className="p-2 d-flex pt-4 b1-dash cr-p">
          <label htmlFor="logoImage" className="cr-p">
            <h6>
              <img src={UploadCover} alt="icon" className="mx-4" />
              {values?.logo_img ? (
                <span>{values?.logo_img[0].name}</span>
              ) : (
                <span>Upload Logo</span>
              )}
            </h6>
          </label>
        </Card>
        <h6 className="mt-2 grey-color">230Kb Max</h6>
      </Form.Group>
      <Form.Group className="d-flex justify-content-end">
        <button
          type="submit"
          form="register-form"
          className="btn btn-primary mt-3 rounded-pill px-4 py-3"
        >
          Continue
        </button>
      </Form.Group>
    </div>
  );
};

export default OutletDetails;

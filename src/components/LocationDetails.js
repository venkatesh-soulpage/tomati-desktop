import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PasswordTextField from "components/PasswordTextField";
import Back from "../assets/img/Back.svg";
function LocationDetails({
  location,
  handleChangeLocation,
  setLocation,
  handleStep,
  handleSignUpData,
}) {
  return (
    <>
      <Form.Group>
        <Form.Label style={{ fontSize: "15px", fontFamily: "Poppins" }}>
          Ideal for Outlet working with a smaller team and focused on making the
          dine in experience safer for guests.
        </Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Location"
          value={location.location}
          onChange={handleChangeLocation("location")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Street Address"
          value={location.address}
          onChange={handleChangeLocation("address")}
          required
        />
      </Form.Group>
      <Form.Group className="m-0 p-0 mt-5 mb-5">
        <Form.Label
          className="m-0 p-0"
          style={{ fontSize: "16px", fontFamily: "Poppins" }}
        >
          Can't find your location?
        </Form.Label>
        <Form.Label
          className="m-0 p-0"
          style={{
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#E0475B",
          }}
        >
          &nbsp; Tell us
        </Form.Label>
      </Form.Group>

      <Form.Group className="d-flex justify-content-between">
        <img
          className="mt-3"
          style={{ height: "54px" }}
          src={Back}
          alt="icon"
          onClick={() => {
            handleStep("step", 2);
          }}
        />
        <Button
          type="submit"
          form="location-form"
          className="btn btn-primary mt-3"
          style={{ borderRadius: "20px", width: "140px", height: "54px" }}
        >
          Continue
        </Button>
      </Form.Group>
    </>
  );
}

export default LocationDetails;

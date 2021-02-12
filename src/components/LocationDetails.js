import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Back from "../assets/img/Back.svg";
import Success from "../assets/img/Success.svg";
import { Link } from "react-router-dom";
function LocationDetails({
  values,
  handleChange,
  handleStep,
  props,
  handleClose,
  show,
}) {
  const [modal, setModal] = React.useState(false);
  const handleCloseup = () => setModal(false);
  const handleModal = () => setModal(true);

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

  console.log(newLocations);
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
          as="select"
          placeholder="Location"
          value={values.location}
          onChange={handleChange("location")}
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
        <Form.Control
          type="text"
          placeholder="Street Address"
          value={values.address}
          onChange={handleChange("address")}
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
            cursor: "pointer",
          }}
          onClick={() => {
            handleModal();
          }}
        >
          &nbsp; Tell us
        </Form.Label>
      </Form.Group>

      <Form.Group className="d-flex justify-content-between">
        <img
          className="mt-3"
          style={{ height: "54px", cursor: "pointer" }}
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
          style={{ borderRadius: "30px", width: "140px", height: "54px" }}
        >
          Finish
        </Button>
      </Form.Group>
      <Modal
        show={modal}
        onHide={handleCloseup}
        style={{
          position: "absolute",
          // left: "50%",
          top: "25%",
          // transform: 'translate(-50%, -50%)',
        }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p
              className="mt-1"
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              Tell us your location
            </p>
            <p
              className="mt-3"
              style={{
                fontSize: "15px",
                fontFamily: "Poppins",
                fontWeight: "400",
              }}
            >
              We will let you know as soon as we get there.
            </p>
            <Form.Group>
              <Form.Control
                as="select"
                placeholder="Location"
                value={values.location}
                onChange={handleChange("location")}
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
            {/* <Link to={{ pathname: "/order-summary", state: { values } }}> */}
            <Button
              onClick={() => {
                handleCloseup();
              }}
              className="btn btn-primary mt-3"
              style={{ borderRadius: "30px", width: "140px", height: "54px" }}
            >
              Submit
            </Button>
            {/* </Link> */}
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={show}
        onHide={handleClose}
        style={{
          position: "absolute",
          // left: "50%",
          top: "25%",
          // transform: 'translate(-50%, -50%)',
        }}
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img className="img-fluid mt-3" src={Success} alt="icon" />
            <p
              className="mt-3"
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              Thanks for the headsup !
            </p>
            <Link to={{ pathname: "/order-summary", state: { values } }}>
              <Button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "30px", width: "140px", height: "54px" }}
              >
                Continue
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LocationDetails;

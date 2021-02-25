import React from "react";
// react bootstrap
import Success from "assets/img/Success.svg";
// react bootstrap
import { Modal, Button } from "react-bootstrap";
//react router
import { Link } from "react-router-dom";

function CustomModal(props) {
  console.log(props);
  return (
    <>
      <Modal
        {...props}
        className="rounded-pill"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-bottom-0" closeButton></Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
          <div className="col-12 text-center mt-4">
            <img className="img-fluid mt-3" src={props.statusicon} alt="icon" />
          </div>
          <p className="mt-3 w-75 text-center">{props.message}</p>
          {props.button}
          {/* {props.type === "forgot" ? (
            <Link to="/">
              <Button variant="outline-secondary rounded-pill px-4 py-2">
                Login
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline-secondary rounded-pill px-4 py-2"
              onClick={props.onHide}
            >
              Close
            </Button>
          )} */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomModal;

import React from "react";
// react bootstrap
import Success from "assets/img/Success.svg";
// react bootstrap
import { Modal, Button } from "react-bootstrap";
//react router
import { Link } from "react-router-dom";

function CustomModal(props) {
  return (
    <>
      <Modal
        {...props}
        className="rounded-pill"
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-bottom-0" closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="bg-white mt-0 pt-0 pb-5 text-center">
          <div className="col-12 text-center mt-4">
            <img className="img-fluid mt-3" src={Success} alt="icon" />
          </div>
          <p>{props.message}</p>
          {props.type === "forgot" ? (
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
          )}
        </Modal.Body>
        {/* <Modal.Footer className="text-center">
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default CustomModal;

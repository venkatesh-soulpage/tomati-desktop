import React from "react";
// react bootstrap
import { Modal } from "react-bootstrap";

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
        <Modal.Header className="border-bottom-0" closeButton></Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
          {props.statusicon ? (
            <div className="col-12 text-center mt-1">
              <img
                className="img-fluid mb-3"
                src={props.statusicon}
                alt="icon"
              />
            </div>
          ) : null}
          <p className="mt-3 mb-0 w-75 text-center">{props.message}</p>
          <div className="mt-5 mb-5">{props.button}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomModal;

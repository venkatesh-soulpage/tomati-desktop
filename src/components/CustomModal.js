import React from "react";
// react bootstrap

import { Modal, Button } from "react-bootstrap";

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
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <Button
            variant="outline-secondary rounded-pill px-4 py-2"
            onClick={props.onHide}
          >
            Close
          </Button>
        </Modal.Body>
        {/* <Modal.Footer className="text-center">
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default CustomModal;

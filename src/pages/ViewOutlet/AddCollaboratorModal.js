import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddCollaboratorModal = ({
  addCollaborator,
  setCollaborator,
  collaboratorDetail,
  handleChange,
  handleCollaborator,
}) => {
  return (
    <div>
      <Modal
        show={addCollaborator}
        onHide={() => setCollaborator(false)}
        style={{
          marginTop: "15%",
        }}
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Collaborator's Email"
                value={collaboratorDetail.owner_email}
                required
                onChange={handleChange("owner_email")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="FirstName LastName"
                value={collaboratorDetail.display_name}
                required
                onChange={handleChange("display_name")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Short Message"
                value={collaboratorDetail.custom_message}
                required
                onChange={handleChange("custom_message")}
              />
            </Form.Group>

            <Button
              className="btn btn-primary mt-3 rounded-pill"
              style={{ borderRadius: "30px", width: "140px", height: "54px" }}
              onClick={handleCollaborator}
            >
              Send
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddCollaboratorModal;

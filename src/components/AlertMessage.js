import React from "react";
// react bootstrap
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";

function AlertMessage(props) {
  function onAlertClose() {
    props.onDismiss();
  }

  if (props.error) {
    return (
      <Form.Group>
        <Alert variant={props.variant} onClose={onAlertClose} dismissible>
          {props.error.message}
        </Alert>
      </Form.Group>
    );
  } else {
    return null;
  }
}

export default AlertMessage;

import React from "react";
// React Bootstrap
import Button from "react-bootstrap/Button";
// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function PasswordTextFeild({ ...props }) {
  const [values, setValues] = React.useState({
    hidden: true,
  });

  function handlePasswordToggle(event) {
    event.preventDefault();
    setValues({ ...values, hidden: !values.hidden });
  }

  return (
    <div className="input-group">
      <input
        type={values.hidden ? "password" : "text"}
        className="form-control"
        {...props}
      />
      <div className="input-group-append">
        <Button
          className="btn-transparent active"
          onClick={handlePasswordToggle}
        >
          {values.hidden ? "Show" : "Hide"}
        </Button>
      </div>
    </div>
  );
}

export default PasswordTextFeild;

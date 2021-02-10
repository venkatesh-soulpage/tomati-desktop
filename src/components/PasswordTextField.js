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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60px",
            border: "1px solid #ced4da",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            backgroundColor: "transparent",
          }}
          onClick={handlePasswordToggle}
        >
          <small>{values.hidden ? "Show" : "Hide"}</small>
        </div>
      </div>
    </div>
  );
}

export default PasswordTextFeild;

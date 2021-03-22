import React from "react";

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
        className="form-control border-right-0"
        {...props}
      />
      <div className="input-group-append">
        <div className="show-button" onClick={handlePasswordToggle}>
          <small>{values.hidden ? "Show" : "Hide"}</small>
        </div>
      </div>
    </div>
  );
}

export default PasswordTextFeild;

import React, { useState, useEffect } from "react";
// redux
import { connect } from "react-redux";
import { updateUser } from "_actions/auth";
// react bootstrap
import { Form, InputGroup } from "react-bootstrap";
// bootstrap icons
import { CameraFill } from "react-bootstrap-icons";
// Router
import { withRouter, Link } from "react-router-dom";

const Index = (props) => {
  const [show, setShow] = useState(false);

  const [values, setValues] = React.useState({
    email: undefined,
    first_name: undefined,
    last_name: undefined,
    current_password: undefined,
    new_password: undefined,
    profile_img: undefined,
    hidden: false,
    hidden2: false,
  });

  useEffect(() => {
    if (props.auth.user) {
      const { first_name, last_name, email, profile_img } = props.auth.user;
      setValues({ first_name, last_name, email, profile_img });
    }
  }, [props.auth.user]);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const { user } = props.auth;

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const { first_name, last_name } = values;
    props.dispatch(updateUser({ first_name, last_name }));
  };

  const handlePasswordUpate = (e) => {
    e.preventDefault();
    const { current_password, new_password } = values;
    props.dispatch(updateUser({ current_password, new_password }));
    setShow(false);
  };

  const fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });

  function handlePasswordToggle(event) {
    event.preventDefault();
    setValues({ ...values, hidden: !values.hidden });
  }
  function handlePasswordToggle2(event) {
    event.preventDefault();
    setValues({ ...values, hidden2: !values.hidden2 });
  }

  if (!user) {
    return <div>loading</div>;
  }
  console.log(user);
  return (
    <div className="pt-0 pr-3 pl-4 pb-3">
      <h4 className="text-start form-legend pb-2" style={{ fontSize: "26px" }}>
        Settings
      </h4>
      <div className="card bg-white border p-5 mt-2">
        <h6
          className="text-start form-legend pb-4"
          style={{ fontSize: "16px" }}
        >
          Profile Details
        </h6>
        <div className="d-flex align-items-top">
          <div className="w-75 mr-4 mb-2">
            <Form>
              <Form.Group>
                <Form.Control
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange("first_name")}
                  value={values.first_name || user.first_name}
                  className="mb-3 h-100"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={values.last_name}
                  onChange={handleChange("last_name")}
                  value={values.last_name || user.last_name}
                  required
                  className="mb-3 h-100"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  // placeholder={user && user.email}
                  value={values.email || user.email}
                  onChange={handleChange("email")}
                  required
                  className="mb-3 h-100"
                />
              </Form.Group>
              <Form.Group>
                <button
                  className="btn w-25 btn-danger mt-5"
                  onClick={handleUpdateUser}
                >
                  Save
                </button>
              </Form.Group>{" "}
            </Form>
          </div>
          <div className="ml-auto w-50 h-75 border p-4">
            <h4 className="text-dark" style={{ fontSize: "16px" }}>
              Profile Picture
            </h4>
            <img
              className="rounded-circle mr-2 "
              src={user.profile_img}
              height={50}
              width={50}
            />
            <button className="btn h-75 btn-outline-dark">
              <label for="profileImage">
                <CameraFill className="mr-3" />
                {"  "} Add New
              </label>
            </button>
            <Form.Group>
              <Form.File
                type="file"
                id="profileImage"
                className="d-none"
                // placeholder={user && user.email}

                onChange={async (e) => {
                  const name = e.target.files[0].name;
                  const url = await fileToBase64(e.target.files[0]);
                  props.dispatch(
                    updateUser({
                      profile_image: { name, data: url },
                    })
                  );
                }}
                required
              />
            </Form.Group>
          </div>
        </div>
        <div className="d-flex align-items-center border-top mt-4" />
        <div className="">
          <h4 className="text-dark mt-5" style={{ fontSize: "16px" }}>
            Password
          </h4>
          {show ? (
            <div>
              <Form.Group>
                <InputGroup style={{ width: "50%" }}>
                  <Form.Control
                    type={values.hidden ? "text" : "password"}
                    placeholder="Current Password"
                    value={values.old_password}
                    onChange={handleChange("old_password")}
                    required
                    style={{ width: "50%", borderRight: "none" }}
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
                        cursor: "pointer",
                      }}
                      onClick={handlePasswordToggle}
                    >
                      <small>{values.hidden ? "Hide" : "Show"}</small>
                    </div>
                  </div>
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup style={{ width: "50%" }}>
                  <Form.Control
                    type={values.hidden2 ? "text" : "password"}
                    placeholder="New Password"
                    value={values.new_password}
                    onChange={handleChange("new_password")}
                    required
                    style={{ width: "50%", borderRight: "none" }}
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
                        cursor: "pointer",
                      }}
                      onClick={handlePasswordToggle2}
                    >
                      <small>{values.hidden2 ? "Hide" : "Show"}</small>
                    </div>
                  </div>
                </InputGroup>
              </Form.Group>
              <button
                className="btn btn-danger mt-4"
                onClick={handlePasswordUpate}
              >
                Save
              </button>
            </div>
          ) : (
            <button
              className="btn btn-danger mt-4"
              onClick={() => setShow(true)}
            >
              Change Password
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default withRouter(connect(mapStateToProps)(Index));

import React, { useState, useEffect } from "react";
// redux
import { connect } from "react-redux";
import * as Action from "_actions";
// react bootstrap
import { Form, InputGroup, Button } from "react-bootstrap";
// bootstrap icons
import { CameraFill } from "react-bootstrap-icons";
// Router
import { withRouter } from "react-router-dom";
import CustomModal from "components/CustomModal";
//image assets
import Success from "assets/img/Success.svg";
import Error from "assets/img/Error.svg";
import User from "assets/img/User.png";
import Loading from "components/Loading";

const Index = (props) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [temp, setTemp] = useState(User);

  const [values, setValues] = React.useState({
    email: undefined,
    first_name: undefined,
    last_name: undefined,
    current_password: undefined,
    new_password: undefined,
    profile_image: undefined,
    hidden: false,
    hidden2: false,
  });

  const [error, setError] = useState(false);
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const analyze = (e) => {
    if (strongRegex.test(e.target.value)) {
      setError(false);
    } else {
      console.log(values.current_password);
      console.log(e.target.value);
      if (values.current_password === e.target.value) {
        setMessage("Old password and New password cannot be same");
      } else {
        setMessage(
          "Your password must be at-least 8 characters with uppercase, lowercase, number & special characters"
        );
      }
      setError(true);
    }
  };
  console.log(values);

  useEffect(() => {
    if (props.auth.userData) {
      const { first_name, last_name, email, profile_img } = props.auth.userData;
      setValues({ first_name, last_name, email, profile_img });
      if (profile_img) {
        setTemp(profile_img);
      }
    }
  }, [props.auth.userData]);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const { userData } = props.auth;
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const { first_name, last_name, profile_image } = values;
    if (profile_image) {
      const url = await fileToBase64(profile_image);
      props.dispatch(
        Action.updateUser({
          first_name,
          last_name,
          profile_image: {
            name: profile_image.name.replace(/\s/g, ""),
            data: url,
          },
        })
      );
      setSuccess(true);
    } else {
      props.dispatch(
        Action.updateUser({
          first_name,
          last_name,
        })
      );
      setSuccess(true);
    }
    props.dispatch(Action.getUserData());
  };

  const handlePasswordUpate = (e) => {
    e.preventDefault();
    const { current_password, new_password } = values;

    console.log(values);
    if (!error) {
      props.dispatch(Action.updateUser({ current_password, new_password }));
      setShow(false);
      setSuccess(true);
    }
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

  const handleImg = (e) => {
    setValues({ ...values, profile_image: e.target.files[0] });
    setTemp(URL.createObjectURL(e.target.files[0]));
  };

  if (!userData) {
    return <div>loading</div>;
  }
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
                  value={values.first_name}
                  className="mb-3 h-100"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={values.last_name}
                  onChange={handleChange("last_name")}
                  required
                  className="mb-3 h-100"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={values.email}
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
                  {props.auth.isFetching ? <Loading /> : "Save"}
                </button>
              </Form.Group>{" "}
            </Form>
          </div>
          <div className="ml-auto w-50 h-75 border p-4">
            <h4 className="text-dark" style={{ fontSize: "16px" }}>
              Profile Picture
            </h4>
            <div className="d-flex justify-content-between align-items-center">
              <img
                className="rounded-circle"
                src={temp}
                alt="pic"
                height="50px"
                width="50px"
              />
              <button className="btn h-75 btn-outline-dark">
                <label
                  htmlFor="profileImage"
                  style={{ cursor: "pointer", margin: 0 }}
                  className="d-flex align-items-center"
                >
                  <CameraFill className="mr-3" />
                  Add New
                </label>
              </button>
            </div>
            <Form.Group>
              <Form.File
                type="file"
                id="profileImage"
                className="d-none"
                onChange={handleImg}
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
                    value={values.current_password}
                    onChange={handleChange("current_password")}
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
                    onBlur={analyze}
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
                {error ? (
                  <span
                    style={
                      message ===
                      "Your password must be at-least 8 characters with uppercase, lowercase, number & special characters"
                        ? {
                            color: "#cc3300",
                            marginTop: "2px",
                            fontSize: "11px",
                          }
                        : {
                            color: "#4BB543",
                            marginTop: "2px",
                            fontSize: "11px",
                          }
                    }
                  >
                    {message}
                  </span>
                ) : null}
              </Form.Group>
              <button
                className="btn btn-danger mt-4"
                onClick={handlePasswordUpate}
              >
                {props.auth.isFetching ? <Loading /> : "Save"}
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
      <CustomModal
        show={success}
        message={props.auth.message || props.auth.error}
        statusicon={
          props.auth.message ? Success : props.auth.error ? Error : null
        }
        button={
          <Button
            className="btn btn-primary mt-3 rounded-pill px-4 py-2"
            onClick={() => setSuccess(false)}
          >
            Close
          </Button>
        }
      />
    </div>
  );
};
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default withRouter(connect(mapStateToProps)(Index));

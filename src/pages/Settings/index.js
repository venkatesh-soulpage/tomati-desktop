import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getUser, updateUser } from "_actions/auth";
import { useFormik } from "formik";
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
  };

  const fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });

  if (!user) {
    return <div>loading</div>;
  }
  console.log(values);
  return (
    <div className="p-3" style={{ marginTop: "3%" }}>
      <h4 className="text-start form-legend pb-5">Settings</h4>
      <div className="card bg-white border p-5 mt-2">
        <div className="d-flex align-items-center">
          <div>
            <Form>
              <Form.Group>
                <Form.Control
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange("first_name")}
                  value={values.first_name || user.first_name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={values.last_name}
                  onChange={handleChange("last_name")}
                  value={values.last_name || user.last_name}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  // placeholder={user && user.email}
                  value={values.email || user.email}
                  onChange={handleChange("email")}
                  required
                />
              </Form.Group>
              <Form.Group>
                <button
                  className="btn btn-danger mt-2"
                  onClick={handleUpdateUser}
                >
                  Save
                </button>
              </Form.Group>{" "}
            </Form>
          </div>
          <div className="ml-auto border p-4">
            <h4 className="text-dark">Profile Picture</h4>
            <img
              className="rounded-circle mr-5 ml-3"
              src={values.profile_img || user.profile_img}
              height={50}
              width={50}
            />

            <button className="btn btn-outline-dark ml-5 mr-5">
              <label for="profileImage">Add New</label>
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
                      profile_img: { name, data: url },
                    })
                  );
                }}
                required
              />
            </Form.Group>
          </div>
        </div>
        <div className="d-flex align-items-center border-top" />
        <div className="">
          <h4 className="text-dark mt-3">Password</h4>
          {show ? (
            <div>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Old Password"
                  onChange={handleChange("old_password")}
                  required
                  style={{ width: "50%" }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  onChange={handleChange("new_password")}
                  required
                  style={{ width: "50%" }}
                />
              </Form.Group>
              <button
                className="btn btn-danger mt-2"
                onClick={handlePasswordUpate}
              >
                Save
              </button>
            </div>
          ) : (
            <button
              className="btn btn-danger mt-2"
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

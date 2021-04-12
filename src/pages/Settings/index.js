import React, { useState, useEffect } from "react";
// redux
import { connect } from "react-redux";
import * as Action from "_actions";
// react bootstrap
import { Button } from "react-bootstrap";
// bootstrap icons
// Router
import { withRouter } from "react-router-dom";
import CustomModal from "components/CustomModal";
//image assets
import Success from "assets/img/Success.svg";
import Error from "assets/img/Error.svg";
import User from "assets/img/User.png";
import Loading from "components/Loading";
import ProfileDetails from "./ProfileDetails";
import ChangePassword from "./ChangePassword";

const Index = (props) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [edit, setEdit] = useState(false);
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
    if (edit) {
      const { first_name, last_name, profile_image } = values;
      if (profile_image) {
        const url = await fileToBase64(profile_image);
        const res = await props.dispatch(
          Action.updateUser({
            first_name,
            last_name,
            profile_image: {
              name: profile_image.name.replace(/\s/g, ""),
              data: url,
            },
          })
        );
        if (res) {
          setSuccess(true);
        }
      } else {
        if (!first_name || !last_name) {
          props.dispatch(Action.updateUserError("Values cannot be empty"));
          setSuccess(true);
        } else {
          const res = await props.dispatch(
            Action.updateUser({
              first_name,
              last_name,
            })
          );
          if (res) {
            setSuccess(true);
          }
        }
      }
      props.dispatch(Action.getUserData());
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handlePasswordUpate = async (e) => {
    e.preventDefault();
    const { current_password, new_password } = values;
    if (!error) {
      if (current_password === new_password) {
        props.dispatch(
          Action.updateUserError("Old password and New password cannot be same")
        );
        setSuccess(true);
      } else {
        const res = await props.dispatch(
          Action.updateUser({ current_password, new_password })
        );
        if (res) {
          setShow(false);
          setSuccess(true);
        }
      }
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
    return (
      <div>
        <Loading textSecondary={true} />
      </div>
    );
  }
  return (
    <div className="pt-0 pr-3 pl-4 pb-3">
      <h4 className="text-start form-legend pb-2 fs-26">Settings</h4>
      <div className="card bg-white border p-5 mt-2">
        <h6 className="text-start form-legend pb-4 fs-16">Profile Details</h6>
        <ProfileDetails
          values={values}
          edit={edit}
          handleChange={handleChange}
          setSuccess={setSuccess}
          props={props}
          handleUpdateUser={handleUpdateUser}
          handleImg={handleImg}
          temp={temp}
        />
        <div className="d-flex align-items-center border-top mt-4" />
        <div className="">
          <h4 className="text-dark mt-5 fs-16">Password</h4>
          {show ? (
            <ChangePassword
              values={values}
              handleChange={handleChange}
              handlePasswordToggle={handlePasswordToggle}
              error={error}
              message={message}
              handlePasswordUpate={handlePasswordUpate}
              handlePasswordToggle2={handlePasswordToggle2}
              props={props}
              setError={setError}
              setMessage={setMessage}
            />
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
        onHide={() => setSuccess(false)}
        message={props.auth.message || props.auth.error}
        statusicon={
          props.auth.message ? Success : props.auth.error ? Error : <Loading />
        }
        button={
          <Button
            className="btn btn-primary mt-3 rounded-pill px-4 py-2"
            onClick={() => {
              setSuccess(false);
              props.dispatch(Action.updateUserReponse(null));
              props.dispatch(Action.updateUserError(null));
            }}
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

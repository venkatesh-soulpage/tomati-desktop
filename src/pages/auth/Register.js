import React from "react";
// Redux
import { connect } from "react-redux";
import {
  userRegistration,
  receiveUserData,
  handleRegisterError,
  verify,
  resetMessage,
  getEmailRegisterOtp,
  getLocationRegister,
  checkEmailCode,
} from "_actions/auth";
// Router imports
import { Redirect, withRouter, useLocation } from "react-router-dom";
// Bootstrap Imports
import Form from "react-bootstrap/Form";
import { Card, ProgressBar } from "react-bootstrap";
// components
import AlertMessage from "components/AlertMessage";
import PersonalDetails from "components/PersonalDetails";
import EmailConfirmation from "components/EmailConfirmation";
import LocationDetails from "components/LocationDetails";

function Register(props) {
  const [message, setMessage] = React.useState("");
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const [values, setValues] = React.useState({
    email: query.get("email"),
    password: "",
    full_name: "",
    company_name: "",
    step: 1,
    code: "",
    city: "",
    location: "",
    address: "",
    state: "",
    is_notifications_permited: false,
    role: "collaborator",
    token: query.get("token"),
  });
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(function () {
    window.scroll(0, 0);
    props.dispatch(receiveUserData({}));
    props.dispatch(handleRegisterError(null));
    props.dispatch(getLocationRegister());
  }, []);

  // For handling changes in the inputs
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };
  // For handling step in the inputs
  const handleStep = (name, value) => {
    setValues((values) => ({ ...values, [name]: value }));
  };

  // Handling the Signup data and sending it to the service.
  const handleSignUpData = (event) => {
    event.preventDefault();
    if (props.auth.verifyError === "This Email is already taken") {
    } else if (
      message ===
      "Your password must be at-least 8 characters with uppercase, lowercase, number & special characters"
    ) {
      console.log(message);
    } else {
      handleStep("step", values.step + 1);
      props.dispatch(getEmailRegisterOtp({ email: values.email }));
    }
  };
  // Handling the email confirmation data and sending it to the service.
  const handleConfirmation = (event) => {
    event.preventDefault();

    props
      .dispatch(
        checkEmailCode({
          email: values.email,
          code: values.code,
        })
      )
      .then((responseData) => {
        console.log("confirmation\n", responseData);
        if (responseData === "Success!") {
          handleStep("step", values.step + 1);
        }
      });
  };

  // Validation true or false
  const validate =
    values.full_name !== "" ||
    values.company_name !== "" ||
    values.email !== "" ||
    values.password !== "";

  // Handling the location data and sending it to the service.
  const handleLocation = (event) => {
    event.preventDefault();
    handleShow();
    // if (validate) {
    //   props
    //     .dispatch(
    //       userRegistration({
    //         full_name: values.full_name,
    //         company_name: values.company_name,
    //         email: values.email,
    //         password_hash: values.password,
    //         plan_id: 1,
    //         location_id: values.location,
    //       })
    //     )
    //     .then((responseData) => {
    //       if (responseData.Message === "Success") {
    //         handleShow();
    //       }
    //     });
    // } else {
    //   console.log("Missing Forms");
    // }
  };
  const handleEmailCheck = (email) => {
    props.dispatch(verify(email));
    props.dispatch(resetMessage());
  };

  const { step } = values;
  console.log("props\n", props);
  return (
    <div
      className="bg-light container-fluid py-md-5 p-0 px-md-4"
      style={{ height: "100vh" }}
    >
      <div className="container px-md-5 p-0 register-container">
        <Card
          className="p-3 pt-5 p-md-5 register-card mt-5 mx-auto card align-self-center"
          style={{ borderRadius: "12px" }}
        >
          {step === 1 ? (
            <>
              <h4 className="text-md-start text-center form-legend font-weight-medium pb-3">
                Tell us About Yourself
              </h4>
              <Form
                id="register-form"
                onSubmit={handleSignUpData}
                // onLoad={() => props.handleRegisterError(null)}
                autoComplete="off"
              >
                <AlertMessage
                  variant="danger"
                  error={props.auth.registerError}
                  onDismiss={() => {
                    props.handleRegisterError(null);
                  }}
                ></AlertMessage>
                <PersonalDetails
                  values={values}
                  handleChange={handleChange}
                  handleEmailCheck={handleEmailCheck}
                  props={props}
                  setValues={setValues}
                  message={message}
                  setMessage={setMessage}
                />
              </Form>
              <div className="w-100 d-md-none mx-auto mt-4 text-center">
                <ProgressBar now={step * 33} variant="primary" />
                <small>Step {step}/3</small>
              </div>
            </>
          ) : step === 2 ? (
            <>
              <div className="text-md-start text-center font-weight-medium form-legend pb-3">
                Email Confirmation
              </div>
              <Form
                id="email-form"
                onSubmit={handleConfirmation}
                // onLoad={() => props.handleRegisterError(null)}
                autoComplete="off"
              >
                <AlertMessage
                  variant="danger"
                  error={props.auth.registerError}
                  onDismiss={() => {
                    props.handleRegisterError(null);
                  }}
                ></AlertMessage>
                <EmailConfirmation
                  values={values}
                  handleChange={handleChange}
                  handleStep={handleStep}
                  props={props}
                  getEmailRegisterOtp={getEmailRegisterOtp}
                />
              </Form>
              <div className="w-100 d-md-none mx-auto mt-4 text-center">
                <ProgressBar now={step * 33} variant="primary" />
                <small>Step {step}/3</small>
              </div>
            </>
          ) : step === 3 ? (
            <>
              <div className="text-md-start text-center font-weight-medium form-legend pb-3">
                Location
              </div>
              <Form
                id="location-form"
                onSubmit={handleLocation}
                // onLoad={() => props.handleRegisterError(null)}
                autoComplete="off"
              >
                <AlertMessage
                  variant="danger"
                  error={props.auth.registerError}
                  onDismiss={() => {
                    props.handleRegisterError(null);
                  }}
                ></AlertMessage>
                <LocationDetails
                  values={values}
                  handleChange={handleChange}
                  handleStep={handleStep}
                  props={props}
                  show={show}
                  alert={alert}
                  handleClose={handleClose}
                />
              </Form>
              <div className="w-100 d-md-none mx-auto mt-4 text-center">
                <ProgressBar now={step * 33} variant="primary" />
                <small>Step {step}/3</small>
              </div>
            </>
          ) : null}
        </Card>
        <div className="w-25 d-none d-md-block mx-auto mt-4 text-center">
          <ProgressBar now={step * 33} variant="primary" />
          <small>Step {step}/3</small>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

const mapDispatchToProps = {
  handleRegisterError,
};

export default withRouter(connect(mapStateToProps)(Register));

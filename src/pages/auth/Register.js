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
import { Redirect, withRouter } from "react-router-dom";
// Bootstrap Imports
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";
// custom components
// import PasswordTextField from "components/PasswordTextField";
// footer
// import Footer from "components/Footer";
// Alert Message
import AlertMessage from "components/AlertMessage";
import { Card, ProgressBar } from "react-bootstrap";
import PersonalDetails from "components/PersonalDetails";
import EmailConfirmation from "components/EmailConfirmation";
import LocationDetails from "components/LocationDetails";

function Register(props) {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    full_name: "",
    company_name: "",
    step: 1,
    code: "",
    location: "",
    address: "",
  });
  // const [code, setCode] = React.useState("");
  // const [location, setLocation] = React.useState({
  //   location: "",
  //   address: "",
  // });

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
  // const handleChangeCode = (name) => (event) => {
  //   const value = event.target.value;
  //   setCode(value);
  // };
  // const handleChangeLocation = (name) => (event) => {
  //   const value = event.target.value;
  //   setLocation((values) => ({ ...values, [name]: value }));
  // };
  const handleStep = (name, value) => {
    setValues((values) => ({ ...values, [name]: value }));
  };

  // Handling the Signup data and sending it to the service.
  const handleSignUpData = (event) => {
    event.preventDefault();
    handleStep("step", values.step + 1);
    props.dispatch(getEmailRegisterOtp({ email: values.email }));
  };
  // Handling the email confirmation data and sending it to the service.
  const handleConfirmation = (event) => {
    event.preventDefault();
    handleStep("step", values.step + 1);
    props.dispatch(checkEmailCode({ email: values.email, code: values.code }));
  };
  // Handling the location data and sending it to the service.
  const handleLocation = (event) => {
    event.preventDefault();
    props.dispatch(userRegistration(values));
  };
  const handleEmailCheck = (email) => {
    props.dispatch(verify(email));
    props.dispatch(resetMessage());
  };
  const HeaderText = {
    fontSize: "24px",
    fontFamily: "Poppins",
    fontWeight: "600",
  };
  const { step } = values;
  return (
    <div className="bg-light container-fluid py-5">
      <div className="container">
        <Card className="p-5 w-50 mt-5 mx-auto">
          {step === 1 ? (
            <>
              <div style={HeaderText} className="text-start form-legend pb-5">
                Tell us About Yourself
              </div>
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
                />
              </Form>
            </>
          ) : step === 2 ? (
            <>
              <div style={HeaderText} className="text-start form-legend pb-5">
                Email Confimation
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
            </>
          ) : step === 3 ? (
            <>
              <div style={HeaderText} className="text-start form-legend pb-5">
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
                />
              </Form>
            </>
          ) : null}
        </Card>
        <div className="w-25 mx-auto mt-4 text-center">
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

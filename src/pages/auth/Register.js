import React from "react";
// Redux
import { connect } from "react-redux";
import {
  userRegistration,
  receiveUserData,
  handleRegisterError,
} from "_actions/auth";
// Router imports
import { Redirect, withRouter } from "react-router-dom";
// Bootstrap Imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// custom components
import PasswordTextField from "components/PasswordTextField";
// footer
import Footer from "components/Footer";
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
  });

  React.useEffect(function () {
    window.scroll(0, 0);
    props.dispatch(receiveUserData({}));
    props.dispatch(handleRegisterError(null));
  }, []);

  // For handling changes in the inputs
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };
  const handleStep = (name, value) => (event) => {
    setValues((values) => ({ ...values, [name]: value }));
  };

  // Handling the Signup data and sending it to the service.
  function handleSignUpData(event) {
    event.preventDefault();
    // props.dispatch(userRegistration(values));
    handleStep("step", values.step + 1);
  }

  const { step } = values;

  console.log(values);

  return (
    <div className="bg-light container-fluid d-flex justify-content-center align-items-center h-100 mt-5">
      <div className="container ">
        <Card
          style={{
            borderRadius: "15px",
            width: "fit-content",
            margin: "auto",
          }}
        >
          <h3 className="text-center form-legend mt-5">
            Tell us About Yourself
          </h3>

          {step === 1 ? (
            <Form
              onSubmit={handleSignUpData}
              onLoad={() => props.handleRegisterError(null)}
              autoComplete="off"
              className="p-5"
              id="personal-form"
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
                setValues={setValues}
                handleStep={handleStep}
              />
            </Form>
          ) : step === 2 ? (
            <EmailConfirmation
              values={values}
              handleChange={handleChange}
              setValues={setValues}
              handleStep={handleStep}
            />
          ) : step === 3 ? (
            <LocationDetails
              values={values}
              handleChange={handleChange}
              setValues={setValues}
              handleStep={handleStep}
            />
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

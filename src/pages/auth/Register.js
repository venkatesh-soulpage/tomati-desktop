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
import { Card } from "react-bootstrap";
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
    props.dispatch(userRegistration(values));
  }

  const { step } = values;
  if (props.auth.userData.email) {
    return <Redirect to="/verify-email" />;
  } else {
    return (
      <div>
        <section className="section bg-light-blue pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <div className="paper elevated">
                  <Card className="p-5 ">
                    <h3 className="text-center form-legend pb-5">
                      Tell us About Yourself
                    </h3>
                    <Form
                      onSubmit={handleSignUpData}
                      onLoad={() => props.handleRegisterError(null)}
                      autoComplete="off"
                    >
                      <AlertMessage
                        variant="danger"
                        error={props.auth.registerError}
                        onDismiss={() => {
                          props.handleRegisterError(null);
                        }}
                      ></AlertMessage>
                      {step === 1 ? (
                        <PersonalDetails
                          values={values}
                          handleChange={handleChange}
                          setValues={setValues}
                          handleStep={handleStep}
                        />
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
                    </Form>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

const mapDispatchToProps = {
  handleRegisterError,
};

export default withRouter(connect(mapStateToProps)(Register));

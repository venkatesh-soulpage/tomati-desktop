import React from "react";
// Redux
import { connect } from "react-redux";
import * as Action from "_actions";
// Router imports
import { withRouter, Link } from "react-router-dom";
// Bootstrap Imports
import Form from "react-bootstrap/Form";
import { Card, ProgressBar, Modal } from "react-bootstrap";
// components
import AlertMessage from "components/AlertMessage";
import PersonalDetails from "components/PersonalDetails";
// image assets
import Success from "assets/img/Success.svg";
import { handleRegisterError } from "_actions";

function Register(props) {
  const [message, setMessage] = React.useState("");
  const [show, setShow] = React.useState(false);
  const urlParams = new URLSearchParams(window.location.search);

  const [values, setValues] = React.useState({
    email: urlParams.get("email"),
    first_name: null,
    last_name: null,
    phone_number: null,
    date_of_birth: null,
    password: "",
    gender: null,
    confirm: null,
    token: urlParams.get("token"),
    outlet_event: urlParams.get("outlet_event"),
    outlet_venue: urlParams.get("outlet_venue"),
  });

  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  // For handling changes in the inputs
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    props.dispatch(handleRegisterError(null));
    setValues((values) => ({ ...values, [name]: value }));
  };

  // Handling the Signup data and sending it to the service.
  const handleSignUpData = async (event) => {
    event.preventDefault();
    console.log(values);
    if (!strongRegex.test(values.password)) {
      props.dispatch(
        Action.handleRegisterError({ message: "Use valid password" })
      );
    } else {
      if (values.password === values.confirm) {
        const res = await props.dispatch(Action.collaboratorSignup(values));
        if (res) {
          setShow(true);
        }
      } else {
        props.dispatch(
          Action.handleRegisterError({ message: "Password does not match" })
        );
      }
    }
  };

  // Handling the location data and sending it to the service.

  const handleEmailCheck = (email) => {
    if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
      props.dispatch(Action.resetMessage());
      props.dispatch(Action.verify(email));
    } else {
      props.dispatch(Action.handleEmailSuccess("Enter valid Email"));
    }
  };

  const { step } = values;

  return (
    <div className="bg-light container-fluid py-md-5 p-0 px-md-4 htv-100">
      <div className="container px-md-5 p-0 register-container">
        <Card className="p-3 pt-5 p-md-5 br-12 register-card mt-5 mx-auto card align-self-center">
          <>
            <h4 className="text-md-start text-center form-legend font-weight-medium pb-3">
              You have been invited to join Tomati.App{" "}
            </h4>
            <Form
              id="register-form"
              onSubmit={handleSignUpData}
              autoComplete="off"
            >
              <AlertMessage
                variant="danger"
                error={props.auth.registerError}
                onDismiss={() => {
                  Action.handleRegisterError(null);
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
        </Card>
      </div>
      <Modal
        size="xs"
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        style={{ marginTop: "15%" }}
      >
        {" "}
        <Modal.Header className="border-0">
          <Modal.Title />
        </Modal.Header>
        <Modal.Body style={{ overflow: "hidden" }}>
          <div className="row pt-0 p-3 ">
            <div className="col-12 text-center mt-4">
              <img className="img-fluid mt-3" src={Success} alt="icon" />
            </div>
            <div className="col-12 mt-3">
              <h5 className="text-center">Successfull! </h5>
            </div>
            <div className="col-12 mt-3 text-center">
              <Link to="/">
                <button
                  className="btn btn-light mt-3"
                  style={{
                    borderRadius: "30px",
                    width: "140px",
                    height: "54px",
                    border: "0.5px solid black",
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Register));

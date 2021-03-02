import React, { useState } from "react";
//redux
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
//router
import { withRouter, Link } from "react-router-dom";
//auth
import { forgotPasswordToggle, receiveResetPassword } from "_actions/auth";
// local component
import ForgotPasswordForm from "forms/ForgotPasswordForm";
import CustomModal from "components/CustomModal";
import Success from "assets/img/Success.svg";

function ForgetPassword(props) {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");
  React.useEffect(() => {
    props.dispatch(forgotPasswordToggle(false));
    props.dispatch(receiveResetPassword({}));
    setMessage("Reset Password email has been sent to your registered  email");
    setShow(true);
  }, []);

  return (
    <>
      {props.auth.forgotPasswordToggle ? (
        // <ResetPasswordForm />
        //TO DO GET A MODAl WITH A TICK
        <div>
          <div className="ht-700"></div>
          <CustomModal
            show={show}
            onHide={() => setShow(false)}
            message={message}
            statusicon={Success}
            button={
              <Link to="/">
                {" "}
                <Button
                  className="btn btn-primary mt-3 rounded-pill px-4 py-2"
                  onClick={() => setShow(false)}
                >
                  Login
                </Button>
              </Link>
            }
          />
        </div>
      ) : (
        <ForgotPasswordForm />
      )}
    </>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(ForgetPassword));

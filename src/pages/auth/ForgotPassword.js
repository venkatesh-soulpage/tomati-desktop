import React, { useState } from "react";
//redux
import { connect } from "react-redux";
//router
import { withRouter, Link } from "react-router-dom";
//auth
import * as Action from "_actions";
// local component
import ForgotPasswordForm from "forms/ForgotPasswordForm";
import CustomModal from "components/CustomModal";
import Success from "assets/img/Success.svg";

function ForgotPassword(props) {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");
  React.useEffect(() => {
    props.dispatch(Action.forgotPasswordToggle(false));
    props.dispatch(Action.receiveResetPassword({}));
    setMessage("Reset Password email has been sent to your registered  email");
    setShow(true);
  }, []);

  return (
    <>
      {props.reset.forgotPasswordToggle ? (
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
                <button
                  className="btn btn-primary mt-3 rounded-pill px-4 py-2"
                  onClick={() => setShow(false)}
                >
                  Login
                </button>
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
  return { reset: state.reset };
}

export default withRouter(connect(mapStateToProps)(ForgotPassword));

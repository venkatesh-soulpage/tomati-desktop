import React, { useState } from "react";
//redux
import { connect } from "react-redux";
//router
import { withRouter } from "react-router-dom";
//auth
import { forgotPasswordToggle, receiveResetPassword } from "_actions/auth";
// local component
import ForgotPasswordForm from "forms/ForgotPasswordForm";
import CustomModal from "components/CustomModal";

function ForgetPassword(props) {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");
  React.useEffect(() => {
    props.dispatch(forgotPasswordToggle(false));
    props.dispatch(receiveResetPassword({}));
    setMessage("Reset Password Email has been sent to your registered E-mail");
    setShow(true);
  }, []);

  return (
    <>
      {props.auth.forgotPasswordToggle ? (
        // <ResetPasswordForm />
        //TO DO GET A MODAl WITH A TICK
        <div>
          <div style={{ height: "700px" }}></div>
          <CustomModal
            show={show}
            onHide={() => setShow(false)}
            message={message}
            type="forgot"
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

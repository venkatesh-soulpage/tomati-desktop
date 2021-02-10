import React from "react";
//redux
import { connect } from "react-redux";
//router
import { withRouter } from "react-router-dom";
//auth
import { forgotPasswordToggle, receiveResetPassword } from "_actions/auth";
// local component
import ForgotPasswordForm from "forms/ForgotPasswordForm";
import ResetPasswordForm from "forms/ResetPasswordForm";

function ForgetPassword(props) {
  React.useEffect(() => {
    props.dispatch(forgotPasswordToggle(true));
    props.dispatch(receiveResetPassword({}));
  }, []);

  return (
    <>
      {props.auth.forgotPasswordToggle ? (
        <ResetPasswordForm />
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

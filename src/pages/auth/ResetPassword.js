import React from "react";
//redux
import { connect } from "react-redux";
//router
import { withRouter } from "react-router-dom";
//auth
import {
  forgotPasswordToggle,
  receiveResetPassword,
  receiveForgotPasswordToken,
} from "_actions/auth";
// local component
import ForgotPasswordForm from "forms/ForgotPasswordForm";
import ResetPasswordForm from "forms/ResetPasswordForm";
import { useLocation } from "react-router-dom";

function ResetPassword(props) {
  const [values, setValues] = React.useState({
    email: "",
    token: "",
    password: "",
  });

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const email = query.get("email");
  const token = query.get("token");
  if (!email && !token) {
  }
  return <ResetPasswordForm />;
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(ResetPassword));

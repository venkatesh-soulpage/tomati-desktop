import React from "react";
//redux
import { connect } from "react-redux";
//router
import { withRouter } from "react-router-dom";
// local component
import ResetPasswordForm from "forms/ResetPasswordForm";
import { useLocation } from "react-router-dom";

function ResetPassword(props) {
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
  return { reset: state.reset };
}

export default withRouter(connect(mapStateToProps)(ResetPassword));

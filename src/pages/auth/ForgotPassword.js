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
// constants
import { AWS_S3_STATIC_URL } from "constants/APIRoutes";

import { Card } from "react-bootstrap";

function ForgetPassword(props) {
  React.useEffect(() => {
    props.dispatch(forgotPasswordToggle(false));
    props.dispatch(receiveResetPassword({}));
  }, []);

  return (
    <div className="container-fluid bg-light h-50 d-flex justify-content-center align-items-center">
      <div style={{ width: "35%" }}>
        <h3 className="text-center p-4">Forgot Password</h3>
        <Card className="p-3" style={{ borderRadius: "15px" }}>
          {props.auth.forgotPasswordToggle ? (
            <ResetPasswordForm />
          ) : (
            <ForgotPasswordForm />
          )}
        </Card>
      </div>
      {/* <section
      className="section bg-light-blue"
      style={{ minHeight: "100vh", height: "auto" }}
    >
      <div className="container">
        <div className="paper elevated">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img
                src={AWS_S3_STATIC_URL + "/23.png"}
                alt="forgot-password"
                className="rounded mx-auto d-block"
                width="80%"
              />
            </div>
            <div className="col-md-6 pt-4 pb-4">
              {props.auth.forgotPasswordToggle ? (
                <ResetPasswordForm />
              ) : (
                <ForgotPasswordForm />
              )}
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(ForgetPassword));

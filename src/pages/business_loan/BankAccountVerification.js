import React from "react";
// react redux
import { connect } from "react-redux";
import { handleApplicationStep, applicationUpdate } from "_actions/application";
// Plaid import
import PlaidLink from "react-plaid-link";

function BankAccountVerification(props) {
  function handleExit() {
    console.log("onexit");
  }

  function skipThisStep() {
    props.dispatch(
      handleApplicationStep(props.application.applicationStep + 1)
    );
  }

  function handleSuccess(token, metadata) {
    console.log(token);
    // console.log(JSON.stringify(metadata));
    props
      .dispatch(
        applicationUpdate({
          ...props.application.application_details,
          new_business_current: false,
          public_token: token
        })
      )
      .then(responseData => {
        skipThisStep();
      })
      .catch(errorData => {
        console.log(errorData);
      });
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 text-center">
            <h3>Link You Bank Account</h3>
            <p>Please Authenticate your bank account for verification</p>
            {process.env.PLAID_PUBLIC_KEY}
            <PlaidLink
              clientName="Ivy Lender"
              env="sandbox"
              product={["auth"]}
              publicKey="feb53715869ce752c9a75197491df3"
              onExit={handleExit}
              onSuccess={handleSuccess}
              className="btn-plaid"
            >
              Connect your Bank!
            </PlaidLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return { application: state.application };
}

export default connect(mapStateToProps)(BankAccountVerification);

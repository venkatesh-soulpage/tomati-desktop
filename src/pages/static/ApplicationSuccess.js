import React from "react";
// Router
import { Link } from "react-router-dom";
// Bootstrap Components
import Button from "react-bootstrap/Button";
// constants
import { AWS_S3_STATIC_URL } from "constants/APIRoutes";

function ApplicationSuccess() {
  return (
    <section className="section">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <img
              className="d-block rounded mx-auto"
              src={AWS_S3_STATIC_URL + "/24.png"}
              height="240px"
              alt="application-success"
            />
            <h1>Application Submitted Successfully</h1>
            <h3>
              Thank you for your submission. Our underwriting team will be in
              contact with you via email with the next steps.
            </h3>
            <p>The Ivy Lender Team</p>
            <Link to="/dashboard">
              <Button variant="primary" className="btn-rounded">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationSuccess;

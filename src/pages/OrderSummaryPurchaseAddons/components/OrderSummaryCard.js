import React from "react";
import BankTransferModal from "./BankTransferModal";
import LoginModal from "./LoginModal";

function OrderSummaryCard({ props, country, total, handlePay, handleFinish }) {
  const {
    address,
    company_name,
    email,
    full_name,
    state,
    city,
  } = props.location.state.values;
  return (
    <div>
      <div className="card px-4 py-3">
        <h5 className="font-weight-normal  mb-3">Order Summary</h5>

        <div
          className="container p-3"
          style={{
            border: "1px solid #C3CAD8",
            borderRadius: 5,
          }}
        >
          <div className="row">
            <div className="col-12">
              <h6 className="font-weight-normal">
                <small>Your Details</small>
              </h6>
            </div>
            <div className="col-4 mt-3">
              <h6 className="font-weight-normal">Full Name :</h6>
            </div>
            <div className="col-8 mt-3">
              {" "}
              <h6 className="font-weight-normal">{full_name}</h6>
            </div>
            <div className="col-4 mt-3">
              <h6 className="font-weight-normal">Company Name :</h6>
            </div>
            <div className="col-8 mt-3">
              {" "}
              <h6 className="font-weight-normal">{company_name}</h6>
            </div>
            <div className="col-4 mt-3">
              <h6 className="font-weight-normal">Email:</h6>
            </div>
            <div className="col-8 mt-3">
              {" "}
              <h6 className="font-weight-normal">{email}</h6>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div
            className=" p-3"
            style={{
              border: "1px solid #C3CAD8",
              borderRadius: 5,
            }}
          >
            <div className="row mt-2">
              <div className="col-12">
                <h6 className="font-weight-normal">
                  <small>Location</small>
                </h6>
              </div>
              <div className="col-4 mt-3">
                <h6 className="font-weight-normal">Country :</h6>
              </div>
              <div className="col-8 mt-3">
                {" "}
                <h6 className="font-weight-normal">
                  {country.length > 0 && country[0].name}
                </h6>
              </div>
              <div className="col-4 mt-3">
                <h6 className="font-weight-normal">State :</h6>
              </div>
              <div className="col-8 mt-3">
                {" "}
                <h6 className="font-weight-normal">{state}</h6>
              </div>
              <div className="col-4 mt-3">
                <h6 className="font-weight-normal">City:</h6>
              </div>
              <div className="col-8 mt-3">
                {" "}
                <h6 className="font-weight-normal">{city}</h6>
              </div>
              <div className="col-4 mt-3">
                <h6 className="font-weight-normal">Street:</h6>
              </div>
              <div className="col-8 mt-3">
                {" "}
                <h6 className="font-weight-normal">{address}</h6>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container p-3 pb-5">
            <div className=" pt-5 mt-5">
              {total > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    handlePay();
                  }}
                  className="btn btn-danger btn-lg rounded-pill mt-3 px-5"
                >
                  Pay Now
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    handleFinish();
                  }}
                  className="btn btn-danger btn-lg rounded-pill mt-3 px-5"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryCard;

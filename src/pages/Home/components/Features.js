import React, { useState } from "react";
// components
import Table from "components/Table";
// react router
import { Link } from "react-router-dom";

const Features = () => {
  const [details, setDetails] = useState({ type: "Outlet", plan: null });
  const [period, setPeriod] = useState("monthly");

  const ToggleStyle2 = {
    border: "1px solid #C3CAD8",
    borderRadius: "36px",
    marginTop: "10px",
  };

  const SmallTable = () => (
    <div className="row mt-4">
      <div
        className="container"
        style={{
          border: "1px solid #C3CAD8",
          borderRadius: 16,
          color: "#2C3A56",
        }}
      >
        <div className="row">
          <div className="col-12">
            <h3 className="text-center primary-text-color">Starter</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-5 mx-auto mb-3 text-center">
            <button
              style={{ background: "#00886C", color: "#fff", borderRadius: 20 }}
              block
            >
              Free
            </button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center  table-text-secondary">
              Complimentary menu setup assistance
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-7 mx-auto mb-3">
            <button className="btn-dark rounded-pill px-2" block>
              easy self setup
            </button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-3 mx-auto">
            <h4 className="text-center table-text-secondary">
              Number of outlets
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            <button className="btn-dark rounded-pill px-3">1</button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-3 mx-auto">
            <h4 className="text-center table-text-secondary">
              Number of events
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            <button className="btn-dark rounded-pill px-3">4 per Month</button>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">
              Collect contactless payments( instant remitance)
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3 mx-auto mb-3">
            <button className="btn-dark rounded-pill px-3" block>
              2%
            </button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">Free Users</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            {period === "monthly" ? (
              <button className="btn-dark rounded-pill px-3">
                5 Free Seats
              </button>
            ) : (
              <button className="btn-dark rounded-pill px-3">
                10 Free Seats
              </button>
            )}
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">
              Monthly Subscription
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <h3 className="text-center font-weight-normal">Free</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            <Link to="register">
              <button className="btn-danger rounded-pill px-3" block>
                Choose Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container mt-4 pt-5"
        style={{
          border: "1px solid #C3CAD8",
          borderRadius: 16,
          color: "#fff",
          background: "#E0475B",
        }}
      >
        <div className="row">
          <div className="col-12">
            <h3 className="text-center primary-text-color text-white">
              Growth
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-9  mx-auto mb-3 text-center">
            <button
              className="rounded-pill px-3"
              style={{ background: "#c83f51" }}
              block
            >
              Most Popular
            </button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto mb-3">
            <h4 className="text-center table-text-secondary">
              Complimentary menu setup assistance
            </h4>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">
              Number of Outlets
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto mb-3 text-center">
            <button className="btn-dark rounded-pill px-3" block>
              3
            </button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-3 mx-auto">
            <h4 className="text-center table-text-secondary">
              Number of events
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            <button className="btn-dark rounded-pill px-3">8 per Month</button>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">
              Collect contactless payments( instant remitance)
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3 mx-auto mb-3">
            <button className="btn-dark rounded-pill px-3" block>
              1.5%
            </button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">Free Users</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            {period === "monthly" ? (
              <button className="btn-dark rounded-pill px-3">
                15 Free Seats
              </button>
            ) : (
              <button className="btn-dark rounded-pill px-3">
                35 Free Seats
              </button>
            )}
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center font-weight-normal table-text-secondary">
              Monthly Subscription
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto text-center">
            {period === "monthly" ? (
              <h3 className="text-center ">$39</h3>
            ) : (
              <h3 className="text-center ">$374</h3>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            <Link to="register">
              <button className="btn-dark rounded-pill px-3" block>
                Choose Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container mt-4"
        style={{
          border: "1px solid #C3CAD8",
          borderRadius: 16,
          color: "#2C3A56",
        }}
      >
        <div className="row">
          <div className="col-12 mb-3">
            <h3 className="text-center primary-text-color mt-3">Premium</h3>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center  table-text-secondary">
              Complimentary menu setup assistance
            </h4>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-3 mx-auto">
            <h4 className="text-center table-text-secondary">
              Number of outlets
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            <button className="btn-dark rounded-pill px-3">10</button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-3 mx-auto">
            <h4 className="text-center table-text-secondary">
              Number of events
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            <button className="btn-dark rounded-pill px-3">12 per Month</button>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">
              Collect contactless payments( instant remitance)
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3 mx-auto mb-3">
            <button className="btn-dark rounded-pill px-3" block>
              1%
            </button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">Free Users</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            {period === "monthly" ? (
              <button className="btn-dark rounded-pill px-3">
                50 Free Seats
              </button>
            ) : (
              <button className="btn-dark rounded-pill px-3">
                50 Free Seats
              </button>
            )}
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center table-text-secondary">
              Monthly Subscription
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            {period === "monthly" ? (
              <h3 className="text-center ">$79</h3>
            ) : (
              <h3 className="text-center ">$758</h3>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3 text-center">
            <Link to="register">
              <button className="btn-dark rounded-pill px-3" block>
                Choose Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  const Toggle2 = () => (
    <div className="row">
      <div className="col-md-6 mx-auto" style={ToggleStyle2}>
        <div className="row">
          <div
            className="col-6 py-2 py-md-3 text-center"
            onClick={() => setPeriod("monthly")}
            style={
              period === "monthly"
                ? {
                    borderLeft: "1px solid #C3CAD8",
                    borderRadius: 35,
                    background: "#E0475B",
                    color: "#fff",
                    cursor: "pointer",
                  }
                : {
                    borderLeft: "1px solid #C3CAD8",
                    borderRadius: 35,
                    background: "#fff",
                    color: "#2C3A56",
                    cursor: "pointer",
                  }
            }
          >
            <h5 className="font-weight-normal m-0 hero-text-secondary">
              Monthly
            </h5>
          </div>

          <div
            className="col-6 py-2 py-md-3 text-center "
            style={
              period === "yearly"
                ? {
                    borderLeft: "1px solid #C3CAD8",
                    borderRadius: 35,
                    background: "#E0475B",
                    color: "#fff",
                    cursor: "pointer",
                  }
                : {
                    borderRadius: 35,
                    background: "#fff",
                    color: "#2C3A56",
                    cursor: "pointer",
                  }
            }
            onClick={() => setPeriod("yearly")}
          >
            {" "}
            <h5 className="font-weight-normal m-0 hero-text-secondary">
              Yearly
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="row bg-white pb-5 mx-0" id="features">
      <div className="col-10 offset-1 pb-1 pt-5">
        <h3 className="container pt-5 pb-0 m-auto text-center faq-header">
          Our Plans
        </h3>
        <Toggle2 />
        <div className="d-none d-md-block ">
          <Table period={period} setPeriod={setPeriod} />
        </div>

        <div className="d-block d-lg-none">
          <SmallTable />
        </div>
      </div>
    </div>
  );
};

export default Features;

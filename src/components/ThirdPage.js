import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import Table from "./Table";

const ThirdPage = () => {
  const [details, setDetails] = useState({ type: "Outlet", plan: null });
  const [period, setPeriod] = useState("monthly");

  const SmallTableStyle = {
    color: "#2C3A56",
  };

  const HeadingStyle = {
    fontSize: "36px",
    fontWeight: "semibold",
    lineHeight: "52px",
    color: "#2C3A56",
    marginTop: "72px",
  };

  const ToggleStyle = {
    border: "1px solid #C3CAD8",
    borderRadius: "36px",
    marginTop: "54px",
  };

  const ToggleStyle2 = {
    border: "1px solid #C3CAD8",
    borderRadius: "36px",
    marginTop: "10px",
  };

  const Toggle2 = () => (
    <div className="row mb-5">
      <div className="col-md-6 mx-auto" style={ToggleStyle2}>
        <div className="row">
          <div
            className="col-6 p-3 text-center"
            style={
              period === "monthly"
                ? {
                    borderLeft: "1px solid #C3CAD8",
                    borderRadius: 35,
                    background: "#E0475B",
                    color: "#fff",
                  }
                : {
                    borderLeft: "1px solid #C3CAD8",
                    borderRadius: 35,
                    background: "#fff",
                    color: "#2C3A56",
                  }
            }
          >
            <h5
              className="font-weight-normal"
              onClick={() => setPeriod("monthly")}
            >
              Monthly
            </h5>
          </div>

          <div
            className="col-6 p-3 text-center"
            style={
              period === "yearly"
                ? {
                    borderLeft: "1px solid #C3CAD8",
                    borderRadius: 35,
                    background: "#E0475B",
                    color: "#fff",
                  }
                : {
                    borderRadius: 35,
                    background: "#fff",
                    color: "#2C3A56",
                  }
            }
          >
            {" "}
            <h5
              className="font-weight-normal"
              onClick={() => setPeriod("yearly")}
            >
              Yearly
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="row p-0 m-0">
      <div className="col-10 offset-1">
        <h3 className="text-center" style={HeadingStyle}>
          Our Plans
        </h3>
        <Toggle2 />
        <Table period={period} setPeriod={setPeriod} />
      </div>
    </div>
  );
};

export default ThirdPage;

import React, { useState } from "react";
import Table from "components/Table";
import { Button } from "react-bootstrap";

const Features = () => {
  const [details, setDetails] = useState({ type: "Outlet", plan: null });
  const [period, setPeriod] = useState("monthly");

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

  const SmallTable = () => (
    <div className="row">
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
            <h3 className="text-center">Starter</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-5 mx-auto mb-3">
            <Button
              style={{ background: "#00886C", color: "#fff", borderRadius: 20 }}
              block
            >
              Free
            </Button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center font-weight-normal">
              We convert your hard copy menu to digital
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-7 mx-auto mb-3">
            <Button
              style={{ background: "#2C3A56", color: "#fff", borderRadius: 20 }}
              block
            >
              Self Managed
            </Button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-3 mx-auto">
            {details.type === "Outlet" ? (
              <h4 className="text-center font-weight-normal">
                Premium QR Menu Table Tags
              </h4>
            ) : (
              <h4 className="text-center font-weight-normal">
                Number of events (per month){" "}
              </h4>
            )}
          </div>
        </div>
        <div className="row">
          {details.type === "Outlet" ? (
            <div className="col-10 mx-auto mb-3">
              <Button
                style={{
                  background: "#2C3A56",
                  color: "#fff",
                  borderRadius: 20,
                }}
                block
              >
                Downloadable Tags
              </Button>
            </div>
          ) : (
            <div className="col-3 mx-auto mb-3">
              <Button
                style={{
                  background: "#2C3A56",
                  color: "#fff",
                  borderRadius: 20,
                }}
                block
              >
                5
              </Button>
            </div>
          )}
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center font-weight-normal">
              Accept contactless payments (Unlike your bank we remit instantly +
              no pos network issues){" "}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3 mx-auto mb-3">
            <Button
              style={{ background: "#2C3A56", color: "#fff", borderRadius: 20 }}
              block
            >
              2%
            </Button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center font-weight-normal">
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
          <div className="col-10 mx-auto mb-3">
            <Button
              style={{ background: "#E0475B", color: "#fff", borderRadius: 20 }}
              block
            >
              Choose Plan
            </Button>
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
            <h3 className="text-center">Growth</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-9  mx-auto mb-3">
            <Button
              style={{ background: "#E0475B", color: "#fff", borderRadius: 20 }}
              block
            >
              Most Popular
            </Button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto mb-3">
            <h4 className="text-center font-weight-normal">
              We convert your hard copy menu to digital
            </h4>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            {details.type === "Outlet" ? (
              <h4 className="text-center font-weight-normal">
                Premium QR Menu Table Tags
              </h4>
            ) : (
              <h4 className="text-center font-weight-normal">
                Number of events (per month){" "}
              </h4>
            )}
          </div>
        </div>
        <div className="row">
          {details.type === "Outlet" ? (
            <div className="col-8 mx-auto mb-3">
              <Button
                style={{
                  background: "#2C3A56",
                  color: "#fff",
                  borderRadius: 20,
                }}
                block
              >
                10 Free Tags
              </Button>
            </div>
          ) : (
            <div className="col-3 mx-auto mb-3">
              <Button
                style={{
                  background: "#2C3A56",
                  color: "#fff",
                  borderRadius: 20,
                }}
                block
              >
                10
              </Button>
            </div>
          )}
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center font-weight-normal">
              Accept contactless payments (Unlike your bank we remit instantly +
              no pos network issues){" "}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mx-auto mb-3">
            <Button
              style={{ background: "#2C3A56", color: "#fff", borderRadius: 20 }}
              block
            >
              1.5 %
            </Button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center font-weight-normal">
              Monthly Subscription
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <h3 className="text-center ">₦19,999</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto mb-3">
            <Button
              style={{ background: "#2C3A56", color: "#fff", borderRadius: 20 }}
              block
            >
              Choose Plan
            </Button>
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
            <h3 className="text-center">Premium</h3>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-4 mx-auto">
            <h4 className="text-center font-weight-normal">
              We convert your hard copy menu to digital
            </h4>
          </div>
        </div>

        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            {details.type === "Outlet" ? (
              <h4 className="text-center font-weight-normal">
                Premium QR Menu Table Tags
              </h4>
            ) : (
              <h4 className="text-center font-weight-normal">
                Number of events (per month){" "}
              </h4>
            )}
          </div>
        </div>
        <div className="row">
          {details.type === "Outlet" ? (
            <div className="col-7 mx-auto mb-3">
              <Button
                style={{
                  background: "#2C3A56",
                  color: "#fff",
                  borderRadius: 20,
                }}
                block
              >
                20 free Tags
              </Button>
            </div>
          ) : (
            <div className="col-7 mx-auto mb-3">
              <Button
                style={{
                  background: "#2C3A56",
                  color: "#fff",
                  borderRadius: 20,
                }}
                block
              >
                custom
              </Button>
            </div>
          )}
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mx-auto">
            <h4 className="text-center font-weight-normal">
              Accept contactless payments (Unlike your bank we remit instantly +
              no pos network issues){" "}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-3 mx-auto mb-3">
            <Button
              style={{ background: "#2C3A56", color: "#fff", borderRadius: 20 }}
              block
            >
              1 %
            </Button>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-3 mx-auto">
            <h4 className="text-center font-weight-normal">
              Remove tomati.app branding
            </h4>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />
        <div className="row">
          <div className="col-10 mb-3 mx-auto">
            <h4 className="text-center font-weight-normal">
              Support for menu content changes
            </h4>
          </div>
        </div>
        <div className="row mb-4" style={{ borderTop: "1px solid #C3CAD8" }} />

        <div className="row">
          <div className="col-10 mx-auto mb-3">
            <Button
              style={{ background: "#E0475B", color: "#fff", borderRadius: 20 }}
              block
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
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
    <div className="row p-0 m-0 pb-5" id="features">
      <div className="col-10 offset-1">
        <h3
          className="container pt-5 pb-5 m-auto text-center"
          style={HeadingStyle}
        >
          Our Plans
        </h3>
        <Toggle2 />
        <div className="d-none d-lg-block">
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

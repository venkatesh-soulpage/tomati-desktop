import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import CrossIcon from "assets/img/CrossIcon.svg";
import RightIcon from "assets/img/RightIcon.svg";

// react router
import { Link } from "react-router-dom";

const Table = ({ period, setPeriod }) => {
  const [details, setDetails] = useState({ type: "Outlet", plan: null });

  const ButtonStyle3 = {
    border: "1px solid black",
    borderRadius: "20px",
    background: "#fff",
    color: "#000",
    width: "100%",
  };
  const ButtonStyle4 = {
    border: "1px solid black",
    borderRadius: "20px",
    background: "#2C3A56",
    color: "#fff",
    width: "100%",
  };

  const SmallButton = {
    border: "1px solid black",
    borderRadius: "20px",
    background: "#fff",
    color: "#000",
    width: "70%",
    height: "23px",
    padding: 0,
    fontSize: "12px",
  };
  const TableStyle = {
    border: "2px solid #2C3A56",
    borderRadius: "15px",
    marginTop: "90px",
  };

  const Style1 = { fontWeight: "600", fontSize: "24px", marginLeft: "10px" };

  const Style2 = { borderBottom: "1px solid #A9A9A9", height: "50px" };

  const Style3 = {
    fontWeight: "medium",
    fontSize: "16px",
    marginLeft: "10px",
    marginBottom: "0px",
  };

  const Style4 = { borderBottom: "1px solid #A9A9A9", height: "50px" };

  const Style5 = { borderBottom: "1px solid #A9A9A9", height: "50px" };

  return (
    <div className="row mx-auto w-75">
      <div className="col-12 mx-auto" style={TableStyle}>
        <div className="row">
          <div
            className="col-lg-6 d-none d-lg-block"
            style={{ color: "#2C3A56" }}
          >
            <div className="row">
              <div
                className="col-12 d-flex align-items-center"
                style={{ borderBottom: "1px solid #A9A9A9", height: "115px" }}
              >
                <h5 style={Style1}>Features</h5>
              </div>
              <div className="col-12 d-flex align-items-center" style={Style2}>
                <p style={Style3}>Complimentary menu setup assistance</p>
              </div>
              <div className="col-12 d-flex align-items-center" style={Style2}>
                <p style={Style3}>No of outlets</p>
              </div>
              <div className="col-12 d-flex align-items-center" style={Style2}>
                <p style={Style3}>No of events</p>
              </div>
              <div className="col-12 d-flex align-items-center" style={Style2}>
                <p style={Style3}>
                  Collect contactless payments( instant remitance)
                </p>
              </div>
              <div className="col-12 d-flex align-items-center" style={Style2}>
                <p style={Style3}>Custom Reports</p>
              </div>
              <div className="col-12 d-flex align-items-center" style={Style2}>
                <p style={Style3}>Dedicated account manager</p>
              </div>
              <div className="col-12 d-flex align-items-center" style={Style2}>
                <p style={Style3}>Free Users</p>
              </div>
              <div className="col-12 d-flex align-items-center" style={Style2}>
                <p style={Style3}>Replace tomati.app with your brand</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2" style={{ background: "#2C3A56" }}>
            <div className="row">
              <div
                className="col-12 text-white text-center pt-4"
                style={{ borderBottom: "1px solid #A9A9A9", height: "115px" }}
              >
                <h5 style={Style1}>Starter</h5>
                <div
                  className="p-1 mt-2"
                  style={{
                    border: "1px solid #00886C",
                    borderRadius: 24,
                    background: "#00886C",
                    // opacity: '11%',
                  }}
                >
                  <small className="text-white">Free</small>
                </div>
              </div>

              <div
                className="col-12 d-flex align-items-center text-white justify-content-center"
                style={Style4}
              >
                <p style={Style3}>easy self setup</p>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <p style={Style3}>1</p>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <p style={Style3}>4 per month</p>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white "
                style={Style4}
              >
                <p style={Style3}>2 %</p>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <Image src={CrossIcon} alt="icon" />
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <Image src={CrossIcon} alt="icon" />
              </div>

              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                {period === "monthly" ? (
                  <h6 style={Style3}>5 free seats</h6>
                ) : (
                  <h6 style={Style3}>10 free seats</h6>
                )}
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <Image src={CrossIcon} alt="icon" />
              </div>

              <div
                className="col-12 d-flex flex-column align-items-center justify-content-center text-white"
                style={{ height: "136px" }}
              >
                <p style={Style3}>Free</p>

                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    className="mt-2"
                    variant="outline"
                    style={ButtonStyle3}
                    onClick={() => {}}
                  >
                    <small> Choose Plan</small>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-2 p-3"
            style={{
              background: "#E0475B",
              borderRadius: "15px 15px 0px 0px",
              marginTop: "-20px",
            }}
          >
            <div className="row">
              <div
                className="col-12 p-2 text-center text-white"
                style={{ borderBottom: "1px solid #A9A9A9", height: "119px" }}
              >
                <h5 style={Style1}>Growth</h5>
                <div
                  className="p-1 mt-2"
                  style={{
                    // border: '1px solid #707070',
                    borderRadius: 24,
                    background: "rgb(204 17 68 / 55%)",
                    // opacity: '11%',
                  }}
                >
                  <small className="text-white">Most Popular</small>
                </div>
              </div>
              <div
                className="col-12 d-flex justify-content-center align-items-center"
                style={Style4}
              >
                <Image src={RightIcon} alt="icon" />
              </div>
              <div
                className="col-12 d-flex justify-content-center align-items-center text-white"
                style={Style4}
              >
                <p style={Style3}>3</p>
              </div>
              <div
                className="col-12 d-flex justify-content-center align-items-center text-white"
                style={Style4}
              >
                <p style={Style3}>8 per month</p>
              </div>
              <div
                className="col-12 d-flex justify-content-center align-items-center text-white"
                style={Style4}
              >
                <p style={Style3}>1.5 %</p>
              </div>
              <div
                className="col-12 d-flex justify-content-center align-items-center text-white"
                style={Style4}
              >
                <Image src={RightIcon} alt="icon" />
              </div>
              <div
                className="col-12 d-flex justify-content-center align-items-center text-white"
                style={Style4}
              >
                <Image src={CrossIcon} alt="icon" />
              </div>

              <div
                className="col-12 d-flex justify-content-center align-items-center text-white"
                style={Style4}
              >
                {period === "monthly" ? (
                  <h6 style={Style3}>15 free seats</h6>
                ) : (
                  <h6 style={Style3}>35 free seats</h6>
                )}
              </div>
              <div
                className="col-12 d-flex justify-content-center align-items-center text-white"
                style={Style4}
              >
                <Image src={CrossIcon} alt="icon" />
              </div>

              <div
                className="col-12 d-flex flex-column justify-content-center align-items-center text-white"
                style={{ height: "136px" }}
              >
                {period === "monthly" ? (
                  <h6 style={Style3}>$39</h6>
                ) : (
                  <h6 style={Style3}>$374</h6>
                )}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  {" "}
                  <Button
                    className="mt-2"
                    variant="outline"
                    style={ButtonStyle4}
                    onClick={() => {}}
                  >
                    <small>Choose Plan</small>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-2"
            style={{ background: "#2C3A56", borderRadius: "0px 12px 12px 0px" }}
          >
            <div className="row">
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={{ borderBottom: "1px solid #A9A9A9", height: "115px" }}
              >
                <h5 style={Style1}>Premium</h5>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center"
                style={Style4}
              >
                <Image src={RightIcon} alt="icon" />
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <p style={Style3}>10</p>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <p style={Style3}>12</p>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white "
                style={Style4}
              >
                <p className="text-center" style={Style3}>
                  1 % (lowest fees)
                </p>
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <Image src={RightIcon} alt="icon" />
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <Image src={RightIcon} alt="icon" />
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                {period === "monthly" ? (
                  <h6 style={Style3}>50 free seats</h6>
                ) : (
                  <h6 style={Style3}>50 free seats</h6>
                )}
              </div>
              <div
                className="col-12 d-flex align-items-center justify-content-center text-white"
                style={Style4}
              >
                <Image src={RightIcon} alt="icon" />
              </div>

              <div
                className="col-12 d-flex flex-column align-items-center justify-content-center text-white"
                style={{ height: "136px" }}
              >
                {period === "monthly" ? (
                  <h6 style={Style3}>$79</h6>
                ) : (
                  <h6 style={Style3}>$758</h6>
                )}
                <Button
                  className="mt-2"
                  variant="outline"
                  style={ButtonStyle3}
                  disabled
                >
                  <small>Choose Plan</small>
                </Button>
                <p className="text-center">
                  <a
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "10px",
                    }}
                    href="mailto:hello@tomati.app"
                    target="_top_blank"
                  >
                    Need a custom plan?
                    <Button style={SmallButton}>Contact</Button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

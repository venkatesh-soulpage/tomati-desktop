import React from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PasswordTextField from "components/PasswordTextField";
import { Dash, Plus, CheckCircle } from "react-bootstrap-icons";
import Success from "assets/img/Success.svg";
import {
  userRegistration,
  userLogin,
  getPlansRequest,
  getLocationRegister,
} from "_actions/auth";
// Router imports
import { Redirect, withRouter } from "react-router-dom";
import { localeData } from "moment";

function Index(props) {
  // Plan Id State Intialisation
  const [id, setId] = React.useState(null);

  // Normal State Intialisation
  const [error, setError] = React.useState(false);
  const [hide, setHide] = React.useState(false);
  const [show, setShow] = React.useState(false);

  //Price State Initialisation
  const [price, setPrice] = React.useState(0);

  // Outlet State Intialisation
  const [no_of_outlets, setOutlet] = React.useState(0);
  const [ioutlet, setIOutlet] = React.useState(0);
  const [outletaddonprice, setOutletaddonprice] = React.useState(0);
  const [ioutletaddonprice, setIOutletaddonprice] = React.useState(0);

  // Event State Intialisation
  const [no_of_events, setEvent] = React.useState(0);
  const [ievent, setIEvent] = React.useState(0);
  const [eventaddonprice, setEventaddonprice] = React.useState(0);
  const [ieventaddonprice, setIEventaddonprice] = React.useState(0);

  // Qr Code State Intialisation
  const [no_of_qrcodes, setQrcodes] = React.useState(0);
  const [iqr, setIQr] = React.useState(0);
  const [qraddonprice, setQraddonprice] = React.useState(0);
  const [iqraddonprice, setIQraddonprice] = React.useState(0);

  // Users State Intialisation
  const [no_of_users, setUsers] = React.useState(0);
  const [iuser, setIUser] = React.useState(0);
  const [useraddonprice, setUseraddonprice] = React.useState(0);
  const [iuseraddonprice, setIUseraddonprice] = React.useState(0);

  const {
    address,
    company_name,
    email,
    full_name,
    location,
    password,
  } = props.location.state.values;

  React.useEffect(function () {
    window.scroll(0, 0);
    props.dispatch(getPlansRequest());
    props.dispatch(getLocationRegister());
  }, []);
  const locationObj = props?.auth?.locations?.filter((loc) => {
    if (loc.id == location) {
      return loc;
    }
  });
  const handleChange = (e) => {
    const id = e.target.value;
    setId(id);
    let cost = props?.auth?.plans?.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });

    // Set Price on onchange
    setPrice(cost[0].price);

    // set Qr codes states on change
    setQrcodes(cost[0].qr_tags_limit);
    setIQr(cost[0].qr_tags_limit);
    setQraddonprice(cost[0].qr_tags_addon_price);
    setIQraddonprice(cost[0].qr_tags_limit);

    // set Users states on change
    setUsers(cost[0].user_limit);
    setUseraddonprice(cost[0].user_addon_price);
    setIUseraddonprice(cost[0].user_limit);
    setIUser(cost[0].user_limit);

    // set Outlet states on change
    setOutlet(cost[0].outlet_limit);
    setOutletaddonprice(cost[0].outlet_addon_price);
    setIOutletaddonprice(cost[0].outlet_limit);
    setIOutlet(cost[0].outlet_limit);

    // set Event states on change
    setEvent(cost[0].event_limit);
    setEventaddonprice(cost[0].event_addon_price);
    setIEventaddonprice(cost[0].event_limit);
    setIEvent(cost[0].event_limit);
  };

  const handleOutlet = (val) => {
    if (val) {
      setOutlet(no_of_outlets + 1);
    } else {
      if (no_of_outlets !== ioutlet) {
        setOutlet(no_of_outlets - 1);
      }
    }
  };

  const handleEvent = (val) => {
    if (val) {
      setEvent(no_of_events + 1);
    } else {
      if (no_of_events !== ievent) {
        setEvent(no_of_events - 1);
      }
    }
  };
  const handleQrCode = (val) => {
    if (val) {
      setQrcodes(no_of_qrcodes + 1);
    } else {
      if (no_of_qrcodes !== iqr) {
        setQrcodes(no_of_qrcodes - 1);
      }
    }
  };

  const handleUser = (val) => {
    if (val) {
      setUsers(no_of_users + 1);
    } else {
      if (no_of_users !== iuser) {
        setUsers(no_of_users - 1);
      }
    }
  };
  const handlePayment = () => {
    props
      .dispatch(
        userRegistration({
          full_name: full_name,
          company_name: company_name,
          email: email,
          password_hash: password,
          plan_id: id,
          location_id: location,
          no_of_outlets,
          no_of_events,
          no_of_users,
          no_of_qrcodes,
        })
      )
      .then((response) => {
        setShow(true);
      })
      .catch((error) => {});
    console.log("Missing Forms");
    // }
  };
  let outletTotal = outletaddonprice * (no_of_outlets - ioutletaddonprice);
  let eventTotal = eventaddonprice * (no_of_events - ieventaddonprice);
  let qrTotal = qraddonprice * (no_of_qrcodes - iqraddonprice);
  let userTotal = useraddonprice * (no_of_users - iuseraddonprice);

  let subTotal = outletTotal + qrTotal + eventTotal + userTotal + price;
  let Tax = 0;
  let Total = outletTotal + qrTotal + eventTotal + userTotal + price - Tax;

  const handleLoginData = () => {
    const { email, password } = props.location.state.values;
    var postData = {
      email: email,
      password: password,
    };
    props
      .dispatch(userLogin(postData))
      .then((userData) => {
        props.history.push("/dashboard");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div style={{ marginTop: "100px", marginBottom: "50px" }}>
        <div>
          <div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-md-8 ">
                  <div
                    style={{
                      border: "1px solid #C3CAD8",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <div className="col-12">
                        <h5 className="font-weight-normal mt-5">
                          Order Summary
                        </h5>
                      </div>
                      <div className="col-12 mt-4">
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
                              <h6 className="font-weight-normal">
                                Full Name :
                              </h6>
                            </div>
                            <div className="col-8 mt-3">
                              {" "}
                              <h6 className="font-weight-normal">
                                {full_name}
                              </h6>
                            </div>
                            <div className="col-4 mt-3">
                              <h6 className="font-weight-normal">
                                Company Name :
                              </h6>
                            </div>
                            <div className="col-8 mt-3">
                              {" "}
                              <h6 className="font-weight-normal">
                                {company_name}
                              </h6>
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
                      </div>
                    </div>
                    <div>
                      <div className="col-12 mt-4">
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
                                <small>Address</small>
                              </h6>
                            </div>
                            <div className="col-4 mt-3">
                              <h6 className="font-weight-normal">Country :</h6>
                            </div>
                            <div className="col-8 mt-3">
                              {" "}
                              <h6 className="font-weight-normal">
                                {locationObj && locationObj[0].name}
                              </h6>
                            </div>
                            <div className="col-4 mt-3">
                              <h6 className="font-weight-normal">State :</h6>
                            </div>
                            <div className="col-8 mt-3">
                              {" "}
                              <h6 className="font-weight-normal">
                                {locationObj &&
                                  locationObj[0].childrens[0].name}
                              </h6>
                            </div>
                            {/* <div className="col-4 mt-3">
                              <h6 className="font-weight-normal">City:</h6>
                            </div>
                            <div className="col-8 mt-3">
                              {" "}
                              <h6 className="font-weight-normal">Eyland</h6>
                            </div>
                            <div className="col-4 mt-3">
                              <h6 className="font-weight-normal">Street:</h6>
                            </div>
                            <div className="col-8 mt-3">
                              {" "}
                              <h6 className="font-weight-normal">
                                24 Fermont Street
                              </h6>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-4">
                      <div className="container p-3">
                        <div>
                          <h3>Payment Options</h3>
                          <div class="radio">
                            <label>
                              <input type="radio" name="optradio" checked />
                              Credit/Debit Card
                            </label>
                          </div>
                          <div class="radio">
                            <label>
                              <input type="radio" name="optradio" />
                              Bank Transfer - for customers in Nigeria
                            </label>
                          </div>
                          {error ? (
                            <div>
                              <small style={{ color: "#E0475B" }}>
                                Please select the plan
                              </small>
                            </div>
                          ) : null}

                          {Total > 0 ? (
                            <button
                              type="button"
                              onClick={() => {
                                setHide(true);
                              }}
                              className="btn btn-primary mt-3"
                              style={{
                                borderRadius: "30px",
                                width: "140px",
                                height: "54px",
                              }}
                            >
                              Pay Now
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                if (!id) {
                                  setError(true);
                                } else {
                                  handlePayment();
                                }
                              }}
                              className="btn btn-primary mt-3"
                              style={{
                                borderRadius: "30px",
                                width: "140px",
                                height: "54px",
                              }}
                            >
                              Finish
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    style={{
                      border: "1px solid #C3CAD8",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="col-12">
                      <p
                        className="mt-5"
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      >
                        Your Order
                      </p>
                    </div>
                    <div className="col-12 mt-3">
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                        }}
                      >
                        Plan
                      </p>
                    </div>
                    <div className="col-12 mt-3">
                      <select
                        style={{
                          width: "100%",
                          height: "56px",
                        }}
                        onChange={handleChange}
                        className="pl-3"
                      >
                        <option value="">Select Plan</option>
                        {props?.auth?.plans?.map((plan) => (
                          <option value={plan.id}>{plan.plan}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="col-12 mt-3 pt-3 d-flex border-top">
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {" "}
                          Number of outlets
                        </p>
                      </div>

                      <div className="col-12 mt-0">
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          A location that requires a separate menu and/or QR
                          Code
                        </p>
                      </div>

                      <div className="col-12">
                        <div className="row">
                          <div
                            className="col-6 ml-3 mt-3"
                            style={{
                              border: "1px solid #C3CAD8",
                              borderRadius: 5,
                            }}
                          >
                            <div className="row">
                              <div
                                className="col-6 p-2"
                                style={{ borderRight: "1px solid #C3CAD8" }}
                              >
                                <h6 className="font-weight-normal text-center">
                                  {no_of_outlets}
                                </h6>
                              </div>

                              <div
                                className="col-3 p-2 text-center"
                                style={{ borderRight: "1px solid #C3CAD8" }}
                              >
                                <Dash
                                  onClick={() => handleOutlet(false)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>

                              <div className="col-3 p-2 text-center">
                                <Plus
                                  onClick={() => handleOutlet(true)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-5 mt-3 p-2">
                            <h6 className="text-center">
                              <small
                                style={{ color: "#2C3A56", fontSize: "16px" }}
                              >
                                ₦ {outletTotal}
                              </small>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3 pt-3 d-flex border-top">
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {" "}
                          Number of events
                        </p>
                      </div>

                      <div className="col-12 mt-0">
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          A location that requires a separate menu and/or QR
                          Code
                        </p>
                      </div>

                      <div className="col-12">
                        <div className="row">
                          <div
                            className="col-6 ml-3 mt-3"
                            style={{
                              border: "1px solid #C3CAD8",
                              borderRadius: 5,
                            }}
                          >
                            <div className="row">
                              <div
                                className="col-6 p-2"
                                style={{ borderRight: "1px solid #C3CAD8" }}
                              >
                                <h6 className="font-weight-normal text-center">
                                  {no_of_events}
                                </h6>
                              </div>

                              <div
                                className="col-3 p-2 text-center"
                                style={{ borderRight: "1px solid #C3CAD8" }}
                              >
                                <Dash
                                  onClick={() => handleEvent(false)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>

                              <div className="col-3 p-2 text-center">
                                <Plus
                                  onClick={() => handleEvent(true)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-5 mt-3 p-2">
                            <h6 className="text-center">
                              <small
                                style={{ color: "#2C3A56", fontSize: "16px" }}
                              >
                                ₦ {eventTotal}
                              </small>
                            </h6>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-3 pt-3 border-top">
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {" "}
                          QR Menu Tags?
                        </p>
                      </div>
                      <div className="col-12 mt-3">
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          This plan already includes 10 free tags, need more?
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div
                            className="col-6 ml-3 mt-3"
                            style={{
                              border: "1px solid #C3CAD8",
                              borderRadius: 5,
                            }}
                          >
                            <div className="row">
                              <div
                                className="col-6 p-2"
                                style={{ borderRight: "1px solid #C3CAD8" }}
                              >
                                <h6 className="font-weight-normal text-center">
                                  {no_of_qrcodes}
                                </h6>
                              </div>

                              <div
                                className="col-3 p-2 text-center"
                                style={{ borderRight: "1px solid #C3CAD8" }}
                              >
                                <Dash
                                  onClick={() => handleQrCode(false)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>

                              <div className="col-3 p-2 text-center">
                                <Plus
                                  onClick={() => handleQrCode(true)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-5 mt-3 p-2">
                            <h6 className="text-center">
                              <small
                                style={{ color: "#2C3A56", fontSize: "16px" }}
                              >
                                ₦ {qrTotal}
                              </small>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3 pt-3 border-top">
                        <p
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {" "}
                          Users ?
                        </p>
                      </div>
                      <div className="col-12 mt-3">
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          This plan already includes 10 users, need more?
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row mb-3">
                          <div
                            className="col-6 ml-3 mt-3"
                            style={{
                              border: "1px solid #C3CAD8",
                              borderRadius: 5,
                            }}
                          >
                            <div className="row">
                              <div
                                className="col-6 p-2"
                                style={{ borderRight: "1px solid #C3CAD8" }}
                              >
                                <h6 className="font-weight-normal text-center">
                                  {no_of_users}
                                </h6>
                              </div>

                              <div
                                className="col-3 p-2 text-center"
                                style={{ borderRight: "1px solid #C3CAD8" }}
                              >
                                <Dash
                                  onClick={() => handleUser(false)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>

                              <div className="col-3 p-2 text-center">
                                <Plus
                                  onClick={() => handleUser(true)}
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-5 mt-3 p-2">
                            <h6 className="text-center">
                              <small
                                style={{ color: "#2C3A56", fontSize: "16px" }}
                              >
                                ₦ {userTotal}
                              </small>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-2 pt-3 border-top border-bottom">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Discount code (Optional)"
                          value={""}
                          onChange={() => {}}
                        />
                      </Form.Group>
                      {false ? (
                        <Form.Group
                          className="d-flex flex-row justify-content-between"
                          style={{ background: "#F5F6F9" }}
                        >
                          <p style={{ fontSize: "12px" }}>
                            Discount value applied
                          </p>
                          <p style={{ fontSize: "12px" }}>₦ 0</p>
                        </Form.Group>
                      ) : null}
                    </div>
                    <div className="col-12 mt-5">
                      <h6 className="text-right">
                        <small style={{ fontSize: "16px" }}>
                          Sub Total:{" "}
                          <small style={{ color: "#2C3A56", fontSize: "16px" }}>
                            ₦{subTotal}
                          </small>
                        </small>
                      </h6>
                    </div>
                    <div className="col-12 mt-2">
                      <h6 className="text-right">
                        <small style={{ fontSize: "16px" }}>
                          Tax:{" "}
                          <small style={{ color: "#2C3A56" }}>₦{Tax}</small>{" "}
                        </small>
                      </h6>
                    </div>
                    <div className="col-12 mt-5">
                      <h6 className="text-right">
                        <small style={{ fontSize: "16px" }}>
                          Total:{" "}
                          <small style={{ color: "#2C3A56", fontSize: "16px" }}>
                            ₦{Total}
                          </small>
                        </small>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hide ? (
        <Modal
          size="xs"
          show={hide}
          onHide={() => setHide(false)}
          className="mt-5"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h6>Bank Transfer</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ overflow: "hidden" }}>
            <div className="row pt-0 p-3 ">
              <div className="col-12">
                <h6>
                  <small style={{ color: "#CCBC2D" }}>Reference Code</small>
                </h6>
              </div>
              <div
                className="col-12 p-1"
                style={{
                  border: "1px solid #E5E283",
                  borderRadius: 5,
                  background: "#FFFFF3",
                  color: "#8B7E0D",
                }}
              >
                <p style={{ color: "#8B7E0D" }}>TM56748393764</p>
              </div>
              <div className="col-12 mt-2">
                <h6>
                  <small>
                    Please quote this code in your transfer reference, to make
                    sure we can find your payment
                  </small>
                </h6>
              </div>
              <div
                className="col-12"
                style={{ borderTop: "1px solid #F5F6F9" }}
              />
              <div className="col-12 mt-2">
                <h6 style={{ color: "#2C3A56" }}>Account Details</h6>
              </div>
              <div
                className="col-12 p-3"
                style={{
                  background: "#F5F6F9",
                  borderRadius: 5,
                  color: "#2C3A56",
                }}
              >
                <h6>Liquid Intel LTD</h6>
                <h6>1018881300</h6>
                <h6>Zenith Bank</h6>
              </div>
              <div className="col-12 p-2 text-center">
                <h6>
                  <small>
                    Click this button once you have made the transfer
                  </small>
                </h6>
              </div>
              <div className="col-12">
                <Button
                  style={{
                    borderRadius: 24,
                    background: "#E0475B",
                    color: "#fff",
                  }}
                  block
                  onClick={() => {
                    handlePayment();
                    setHide(false);
                  }}
                >
                  Confirm transfer
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
      {show ? (
        <Modal
          size="xs"
          show={show}
          onHide={() => setShow(false)}
          className="mt-5"
        >
          {" "}
          <Modal.Header>
            <Modal.Title />
          </Modal.Header>
          <Modal.Body style={{ overflow: "hidden" }}>
            <div className="row pt-0 p-3 ">
              <div className="col-12 text-center mt-4">
                <img className="img-fluid mt-3" src={Success} alt="icon" />
              </div>
              <div className="col-12 mt-3">
                <h5 className="text-center">Wasn't that so easy? </h5>
              </div>
              <div classsName="col-12 mt-3 text-center">
                <p className="text-center">
                  Now sit back and relax while we get your account set up.
                </p>
              </div>
              <div className="col-12 mt-3 text-center">
                <button
                  className="btn btn-light mt-3"
                  style={{
                    borderRadius: "30px",
                    width: "140px",
                    height: "54px",
                    border: "0.5px solid black",
                    // backgroundColor: "transparent",
                  }}
                  onClick={handleLoginData}
                >
                  Login
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

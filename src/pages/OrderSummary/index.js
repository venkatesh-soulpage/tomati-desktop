import React from "react";
import { connect } from "react-redux";
import {
  userRegistration,
  userLogin,
  getPlansRequest,
  getLocationRegister,
  updateUser,
  // chargeBeeRequest,
  postDiscountValue,
  resetMessage,
  makePaymentRequest,
} from "_actions/auth";
import _, { values } from "lodash";

// Router imports
import { Redirect, withRouter } from "react-router-dom";
import OrderSummaryCard from "./components/OrderSummaryCard";
import YourOrderCard from "./components/YourOrderCard";
import BankTransferModal from "./components/BankTransferModal";
import LoginModal from "./components/LoginModal";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

function Index(props) {
  const [error, setError] = React.useState(false);
  const [activePlan, setActivePlan] = React.useState(null);
  const [userValues, setUserValues] = React.useState({});
  const [hide, setHide] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [radio, setRadio] = React.useState("Card");
  const [discountValue, setDiscountValue] = React.useState(undefined);
  const {
    address,
    company_name,
    email,
    full_name,
    location,
    password,
    state,
    city,
    is_notifications_permited,
  } = props.location.state.values;

  React.useEffect(function () {
    window.scroll(0, 0);
    props.dispatch(getPlansRequest());
    props.dispatch(getLocationRegister());
  }, []);
  React.useEffect(
    function () {
      if (props.auth.plans?.length > 0) setActivePlan(props.auth.plans[0]);
    },
    [props.auth.plans]
  );

  const handleActivePlan = (e) => {
    const active_plan = _.filter(props.auth.plans, [
      "id",
      parseInt(e.target.value),
    ]);
    active_plan && setActivePlan(active_plan[0]);
    setUserValues({});
  };
  const handleOutlet = (action) => (event) => {
    if (action === "plus") {
      if ("outletaddons" in userValues) {
        setUserValues((values) => {
          return { ...values, outletaddons: userValues.outletaddons + 1 };
        });
      } else {
        setUserValues((values) => {
          return { ...values, outletaddons: activePlan.outlet_limit + 1 };
        });
      }
    } else {
      if ("outletaddons" in userValues) {
        if (userValues.outletaddons > activePlan.outlet_limit) {
          setUserValues((values) => {
            return {
              ...values,
              outletaddons: userValues.outletaddons - 1,
            };
          });
        }
      }
    }
  };
  const handleQr = (action) => (event) => {
    if (action === "plus") {
      if ("qraddons" in userValues) {
        setUserValues((values) => {
          return { ...values, qraddons: userValues.qraddons + 1 };
        });
      } else {
        setUserValues((values) => {
          return { ...values, qraddons: activePlan.qr_tags_limit + 1 };
        });
      }
    } else {
      if ("qraddons" in userValues) {
        if (userValues.qraddons > activePlan.qr_tags_limit) {
          setUserValues((values) => {
            return {
              ...values,
              qraddons: userValues.qraddons - 1,
            };
          });
        }
      }
    }
  };

  const handleUsers = (action) => (event) => {
    if (action === "plus") {
      if ("useraddons" in userValues) {
        setUserValues((values) => {
          return { ...values, useraddons: userValues.useraddons + 1 };
        });
      } else {
        setUserValues((values) => {
          return { ...values, useraddons: activePlan.user_limit + 1 };
        });
      }
    } else {
      if ("useraddons" in userValues) {
        if (userValues.useraddons > activePlan.user_limit) {
          setUserValues((values) => {
            return {
              ...values,
              useraddons: userValues.useraddons - 1,
            };
          });
        }
      }
    }
  };
  const handleEvent = (action) => (event) => {
    if (action === "plus") {
      if ("eventaddons" in userValues) {
        setUserValues((values) => {
          return { ...values, eventaddons: userValues.eventaddons + 1 };
        });
      } else {
        setUserValues((values) => {
          return { ...values, eventaddons: activePlan.event_limit + 1 };
        });
      }
    } else {
      if ("eventaddons" in userValues) {
        if (userValues.eventaddons > activePlan.event_limit) {
          setUserValues((values) => {
            return {
              ...values,
              eventaddons: userValues.eventaddons - 1,
            };
          });
        }
      }
    }
  };
  const handleLoginData = () => {
    const { email, password } = props.location.state.values;
    console.log(email, "EAMIL FROM HANDLE LOGIN");
    console.log(password, "PASSWORD FROM HANDLE LOGIN");
    var postData = {
      email: email,
      password: password,
    };
    props
      .dispatch(userLogin(postData))
      .then((userData) => {
        console.log(userData, "USER DATA FROM SUCESS MESSAGE");
        props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error, "ERROR FROM AXIOS");
      });
  };
  if (!props.auth.locations) {
    return <>Loading...</>;
  }

  const country = _.filter(props.auth.locations, ["id", parseInt(location)]);

  const selected_state =
    country.length > 0 &&
    _.filter(country[0].childrens, ["id", parseInt(state)]);

  let outletPrice = 0;
  if ("outletaddons" in userValues) {
    const { outlet_addon_price, outlet_limit } = activePlan;
    outletPrice = outlet_addon_price * (userValues.outletaddons - outlet_limit);
  }
  let qrPrice = 0;
  if ("qraddons" in userValues) {
    const { qr_tags_addon_price, qr_tags_limit } = activePlan;
    qrPrice = qr_tags_addon_price * (userValues.qraddons - qr_tags_limit);
  }
  let userPrice = 0;
  if ("useraddons" in userValues) {
    const { user_addon_price, user_limit } = activePlan;
    userPrice = user_addon_price * (userValues.useraddons - user_limit);
  }
  let eventPrice = 0;
  if ("eventaddons" in userValues) {
    const { event_addon_price, event_limit } = activePlan;
    eventPrice = event_addon_price * (userValues.eventaddons - event_limit);
  }
  let discount_value = 0;
  let subTotal =
    parseFloat(activePlan?.price) +
    outletPrice +
    qrPrice +
    userPrice +
    eventPrice;

  if (props.auth.discountVal) {
    discount_value =
      parseInt(props.auth.discountVal?.discount_value) * subTotal * 0.01;
    discount_value = discount_value.toFixed(2);
    subTotal -=
      parseInt(props.auth.discountVal?.discount_value) * subTotal * 0.01;
  }
  let tax = subTotal * 0.075;
  tax = parseFloat(tax.toFixed(2));
  let total = subTotal + tax;
  const handlePayment = () => {
    console.log("handlepayment\n ");
    const inputs = {
      location_id: location,
      full_name: full_name,
      company_name: company_name,
      email: email,
      password_hash: password,
      plan_id: activePlan?.id,
      transaction_id: 1,
      is_notifications_permited: is_notifications_permited,
      state: selected_state && selected_state[0].name,
      city: city,
      street: address,
      no_of_outlets:
        "outletaddons" in userValues
          ? userValues?.outletaddons
          : activePlan?.outlet_limit,
      no_of_qrcodes:
        "qraddons" in userValues
          ? userValues?.qraddons
          : activePlan?.qr_tags_limit,
      no_of_users:
        "useraddons" in userValues
          ? userValues?.useraddons
          : activePlan?.user_limit,
      no_of_events:
        "eventaddons" in userValues
          ? userValues?.eventaddons
          : activePlan?.event_limit,
    };
    if (props?.auth?.user === null) {
      props
        .dispatch(userRegistration(inputs))
        .then((response) => {
          setHide(false);
          setShow(true);
          console.log("response for payment\n", response);
        })
        .catch((error) => {
          console.log("error\n", error);
        });
    } else {
      console.log("Update user in accounts table");
      props.dispatch(updateUser(inputs));
    }
  };

  const handleCheckout = () => {
    window.Chargebee.init({
      site: "tomati-test",
    }).openCheckout({
      hostedPage() {
        return axios
          .post("https://tomati-api.herokuapp.com/api/payment", {
            plan: activePlan?.chargebee_plan_id,
            addons: [
              {
                id: "additional-outlets-",
                unit_price: 2500,
                quantity: 1,
              },
              {
                id: "additional-events-",
                unit_price: 2500,
                quantity: 1,
              },
              {
                id: "cbdemo_additionaluser",
                unit_price: 1000,
                quantity: 1,
              },
            ],
          })
          .then((response) => {
            console.log("RESPONSE\n", response);
            return response.data;
          });
      },
      success(hostedPageId) {
        console.log(hostedPageId);
      },
      close() {
        handlePayment();
        console.log("checkout new closed");
      },
      step(step) {
        console.log("checkout", step);
      },
    });
  };
  const handleFinish = () => {
    // if (radio === "Card") {
    handleCheckout();
    // handlePayment();
    // } else {
    // handlePayment();
    // }
  };
  const handlePay = () => {
    if (radio === "Card") {
      handleCheckout(activePlan);
    } else {
      setHide(true);
    }
  };
  console.log("props\n", props);
  // console.log("props activePlan\n", activePlan);
  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row">
        <div className="col-md-8">
          <OrderSummaryCard
            props={props}
            country={country}
            selected_state={selected_state}
            total={total}
            setHide={setHide}
            handlePayment={handlePayment}
            radio={radio}
            setRadio={setRadio}
            handlePay={handlePay}
            handleFinish={handleFinish}
          />
        </div>
        <div className="col-md-4">
          <YourOrderCard
            props={props}
            activePlan={activePlan}
            handleActivePlan={handleActivePlan}
            userValues={userValues}
            handleOutlet={handleOutlet}
            outletPrice={outletPrice}
            handleQr={handleQr}
            qrPrice={qrPrice}
            handleUsers={handleUsers}
            userPrice={userPrice}
            handleEvent={handleEvent}
            eventPrice={eventPrice}
            discount_value={discount_value}
            discountValue={discountValue}
            setDiscountValue={setDiscountValue}
            subTotal={subTotal}
            tax={tax}
            total={total}
          />
        </div>
      </div>
      {hide ? (
        <BankTransferModal
          props={props}
          hide={hide}
          setHide={setHide}
          handlePayment={handlePayment}
          radio={radio}
        />
      ) : null}
      {show ? (
        <LoginModal
          show={show}
          setShow={setShow}
          handleLoginData={handleLoginData}
        />
      ) : null}
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

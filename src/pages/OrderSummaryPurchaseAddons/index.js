import React from "react";
import { connect } from "react-redux";
import {
  userRegistration,
  getPlansRequest,
  getLocationRegister,
  updateUser,
  getUser,
  getSubscriptionId,
} from "_actions/auth";
import _ from "lodash";

// Router imports
import { withRouter, Link as RouteLink } from "react-router-dom";
import OrderSummaryCard from "./components/OrderSummaryCard";
import YourOrderCard from "./components/YourOrderCard";
import LoginModal from "./components/LoginModal";
import CustomModal from "components/CustomModal";
import AuthAPI from "services/auth";
import Success from "assets/img/Success.svg";

function Index(props) {
  const [activePlan, setActivePlan] = React.useState(null);
  const [userValues, setUserValues] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
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
    plan_id,
    plan,
  } = props.location.state.values;

  React.useEffect(function () {
    window.scroll(0, 0);
    props.dispatch(getPlansRequest());
    props.dispatch(getLocationRegister());
    props.dispatch(getUser());
  }, []);
  React.useEffect(
    function () {
      if (plan) setActivePlan(plan);
    },
    [plan]
  );

  const handleOutlet = (action) => (event) => {
    if (action === "plus") {
      if ("outletaddons" in userValues) {
        setUserValues((values) => {
          return { ...values, outletaddons: userValues.outletaddons + 1 };
        });
      } else {
        setUserValues((values) => {
          return {
            ...values,
            outletaddons: props?.auth?.user?.no_of_outlets + 1,
          };
        });
      }
    } else {
      if ("outletaddons" in userValues) {
        if (userValues.outletaddons > props?.auth?.user?.no_of_outlets) {
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
          return { ...values, qraddons: props?.auth?.user?.no_of_qrcodes + 1 };
        });
      }
    } else {
      if ("qraddons" in userValues) {
        if (userValues.qraddons > props?.auth?.user?.no_of_qrcodes) {
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
          return { ...values, useraddons: props?.auth?.user?.no_of_users + 1 };
        });
      }
    } else {
      if ("useraddons" in userValues) {
        if (userValues.useraddons > props?.auth?.user?.no_of_users) {
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
          return {
            ...values,
            eventaddons: props?.auth?.user?.no_of_events + 1,
          };
        });
      }
    } else {
      if ("eventaddons" in userValues) {
        if (userValues.eventaddons > props?.auth?.user?.no_of_events) {
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

  if (!props.auth.locations) {
    return <>Loading...</>;
  }

  const country = _.filter(props.auth.locations, ["id", parseInt(location)]);

  const selected_state =
    country.length > 0 &&
    _.filter(country[0].childrens, ["id", parseInt(state)]);

  let outletPrice = 0;
  if ("outletaddons" in userValues) {
    const { outlet_addon_price } = activePlan;
    outletPrice =
      outlet_addon_price *
      (userValues.outletaddons - props?.auth?.user?.no_of_outlets);
  }
  let qrPrice = 0;
  if ("qraddons" in userValues) {
    const { qr_tags_addon_price } = activePlan;
    qrPrice =
      qr_tags_addon_price *
      (userValues.qraddons - props?.auth?.user?.no_of_qrcodes);
  }
  let userPrice = 0;
  if ("useraddons" in userValues) {
    const { user_addon_price } = activePlan;
    userPrice =
      user_addon_price *
      (userValues.useraddons - props?.auth?.user?.no_of_users);
  }
  let eventPrice = 0;
  if ("eventaddons" in userValues) {
    const { event_addon_price } = activePlan;
    eventPrice =
      event_addon_price *
      (userValues.eventaddons - props?.auth?.user?.no_of_events);
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

  subTotal = parseFloat(subTotal.toFixed(2));
  let tax = subTotal * 0.075;
  tax = parseFloat(tax.toFixed(2));
  let total = subTotal + tax;
  total = parseFloat(total.toFixed(2));

  const no_of_outlets =
    "outletaddons" in userValues
      ? userValues?.outletaddons
      : props?.auth?.user?.no_of_outlets;
  const no_of_qrs =
    "qraddons" in userValues
      ? userValues?.qraddons
      : props?.auth?.user?.no_of_qrcodes;
  const no_of_users =
    "useraddons" in userValues
      ? userValues?.useraddons
      : props?.auth?.user?.no_of_users;
  const no_of_events =
    "eventaddons" in userValues
      ? userValues?.eventaddons
      : props?.auth?.user?.no_of_events;

  const handlePayment = (transaction_id) => {
    const inputs = {
      location_id: location,
      full_name: full_name,
      company_name: company_name,
      email: email,
      password_hash: password,
      plan_id: activePlan?.id,
      transaction_id: transaction_id,
      is_notifications_permited: is_notifications_permited,
      state: selected_state && selected_state[0].name,
      city: city,
      street: address,
      no_of_outlets: no_of_outlets,
      no_of_qrcodes: no_of_qrs,
      no_of_users: no_of_users,
      no_of_events: no_of_events,
    };
    if (props?.auth?.user !== null) {
      props.dispatch(updateUser(inputs));
    }
  };

  const handleCheckout = () => {
    let outletQuantity = no_of_outlets - activePlan?.outlet_limit;
    let eventQuantity = no_of_events - activePlan?.event_limit;
    let userQuantity = no_of_users - activePlan?.user_limit;
    let qrQuantity = no_of_qrs - props?.auth?.user?.no_of_qrcodes;
    const addonArray = [];
    if (outletQuantity !== 0) {
      let outletObject = {
        id: activePlan?.chargebee_outlets_addon_id,
        unit_price: parseFloat(activePlan?.outlet_addon_price) * 100,
        quantity: outletQuantity,
      };
      addonArray.push(outletObject);
    }
    if (eventQuantity !== 0) {
      let eventObject = {
        id: activePlan?.chargebee_events_addon_id,
        unit_price: parseFloat(activePlan?.event_addon_price) * 100,
        quantity: eventQuantity,
      };
      addonArray.push(eventObject);
    }
    if (userQuantity !== 0) {
      let userObject = {
        id: activePlan?.chargebee_collaborators_addon_id,
        unit_price: parseFloat(activePlan?.user_addon_price) * 100,
        quantity: userQuantity,
      };
      addonArray.push(userObject);
    }
    if (qrQuantity !== 0) {
      let qrObject = {
        id: activePlan?.chargebee_qr_addon_id,
        unit_price: parseFloat(activePlan?.qr_tags_addon_price) * 100,
        quantity: qrQuantity,
      };
      addonArray.push(qrObject);
    }

    props
      .dispatch(
        getSubscriptionId({ hostedPageId: props?.auth?.user?.transaction_id })
      )
      .then((res) => {
        return AuthAPI.UpdatePayment({
          plan_id: plan?.chargebee_plan_id,
          addons: addonArray,
          subscription_id: res.hosted_page.content.subscription.id,
        }).then((response) => {
          handlePayment(props?.auth?.user?.transaction_id);
          return response.data;
        });
      });
    setSuccess(true);
  };
  const handleFinish = () => {
    handleCheckout();
  };
  const handlePay = () => {
    handleCheckout(activePlan);
  };
  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="d-flex row ">
        <div className="col-md-8 order-2 order-md-1 mt-3 mt-md-0">
          <OrderSummaryCard
            props={props}
            country={country}
            total={total}
            handlePay={handlePay}
            handleFinish={handleFinish}
          />
        </div>
        <div className="col-md-4 order-1 order-md-2">
          <YourOrderCard
            props={props}
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
            plan_id={plan_id}
          />
        </div>
      </div>
      <CustomModal
        show={success}
        onHide={() => setSuccess(false)}
        statusicon={Success}
        message="You plan is updated successfully !"
        button={
          <RouteLink to="/">
            <button
              className="btn btn-light mt-3"
              style={{
                borderRadius: "30px",
                width: "140px",
                height: "54px",
                border: "0.5px solid black",
                // backgroundColor: "transparent",
              }}
              // onClick={handleLoginData}
            >
              Home
            </button>
          </RouteLink>
        }
      />
      {show ? <LoginModal show={show} setShow={setShow} /> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

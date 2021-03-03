import React from "react";
import { connect } from "react-redux";
import * as Action from "_actions";
import AuthAPI from "services/auth";
import _ from "lodash";
// Router imports
import { Redirect, withRouter, Link as RouteLink } from "react-router-dom";
import OrderSummaryCard from "./components/OrderSummaryCard";
import YourOrderCard from "./components/YourOrderCard";
import LoginModal from "./components/LoginModal";
import CustomModal from "components/CustomModal";
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
  } = props.location.state.values;

  React.useEffect(function () {
    window.scroll(0, 0);
    props.dispatch(Action.getPlansRequest());
    props.dispatch(Action.getLocationRegister());
    props.dispatch(Action.getUser());
  }, []);
  React.useEffect(
    function () {
      if (props.order.plans?.length > 0) setActivePlan(props.order.plans[0]);
    },
    [props.order.plans]
  );

  if (!props.order.locations) {
    return <>Loading...</>;
  }
  console.log(props);
  const country = _.filter(props.order.locations, ["id", parseInt(location)]);

  const selected_state =
    country.length > 0 &&
    _.filter(country[0].childrens, ["id", parseInt(state)]);

  let outletPrice = 0;
  if ("outletaddons" in userValues) {
    const { outlet_addon_price, outlet_limit } = activePlan;
    activePlan.subscription_type === "yearly"
      ? (outletPrice =
          outlet_addon_price * (userValues.outletaddons - outlet_limit) * 12)
      : (outletPrice =
          outlet_addon_price * (userValues.outletaddons - outlet_limit));
  }
  let qrPrice = 0;
  if ("qraddons" in userValues) {
    const { qr_tags_addon_price, qr_tags_limit } = activePlan;
    qrPrice = qr_tags_addon_price * (userValues.qraddons - qr_tags_limit);
  }
  let userPrice = 0;
  if ("useraddons" in userValues) {
    const { user_addon_price, user_limit } = activePlan;
    activePlan.subscription_type === "yearly"
      ? (userPrice =
          user_addon_price * (userValues.useraddons - user_limit) * 12)
      : (userPrice = user_addon_price * (userValues.useraddons - user_limit));
  }
  let eventPrice = 0;
  if ("eventaddons" in userValues) {
    const { event_addon_price, event_limit } = activePlan;
    activePlan.subscription_type === "yearly"
      ? (eventPrice =
          event_addon_price * (userValues.eventaddons - event_limit) * 12)
      : (eventPrice =
          event_addon_price * (userValues.eventaddons - event_limit));
  }
  let discount_value = 0;
  let subTotal =
    parseFloat(activePlan?.price) +
    outletPrice +
    qrPrice +
    userPrice +
    eventPrice;

  if (props.order.discountVal) {
    discount_value =
      parseInt(props.order.discountVal?.discount_value) * subTotal * 0.01;
    discount_value = discount_value.toFixed(2);
    subTotal -=
      parseInt(props.order.discountVal?.discount_value) * subTotal * 0.01;
  }
  let tax = subTotal * 0.075;
  tax = parseFloat(tax.toFixed(2));
  let total = subTotal + tax;

  const no_of_outlets =
    "outletaddons" in userValues
      ? userValues?.outletaddons
      : activePlan?.outlet_limit;
  const no_of_qrs =
    "qraddons" in userValues ? userValues?.qraddons : activePlan?.qr_tags_limit;
  const no_of_users =
    "useraddons" in userValues
      ? userValues?.useraddons
      : activePlan?.user_limit;
  const no_of_events =
    "eventaddons" in userValues
      ? userValues?.eventaddons
      : activePlan?.event_limit;

  let prevOutlets =
    props?.order?.user?.no_of_outlets -
    props?.order?.user?.plan[0]?.outlet_limit;
  let prevQrs =
    props?.order?.user?.no_of_qrcodes -
    props?.order?.user?.plan[0]?.qr_tags_limit;
  let prevUsers =
    props?.order?.user?.no_of_users - props?.order?.user?.plan[0]?.user_limit;
  let prevEvents =
    props?.order?.user?.no_of_events - props?.order?.user?.plan[0]?.event_limit;

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
      state: state,
      city: city,
      street: address,
      no_of_outlets: no_of_outlets + prevOutlets,
      no_of_qrcodes: no_of_qrs + prevQrs,
      no_of_users: no_of_users + prevUsers,
      no_of_events: no_of_events + prevEvents,
    };
    if (props?.order?.user !== null) {
      props.dispatch(Action.resetDiscountMessage());
      props.dispatch(Action.updateUser(inputs));
    }
  };

  const handleCheckout = async () => {
    let addonOutlet = no_of_outlets - activePlan?.outlet_limit;
    let addonEvent = no_of_events - activePlan?.event_limit;
    let addonUser = no_of_users - activePlan?.user_limit;
    let addonQr = no_of_qrs - activePlan?.qr_tags_limit;
    let coupon = null;
    if (props.order.discountVal) {
      coupon = [discountValue];
    }
    const addonArray = [];
    if (addonOutlet !== 0) {
      let outletObject = {
        id: activePlan?.chargebee_outlets_addon_id,
        unit_price: parseFloat(activePlan?.outlet_addon_price) * 100,
        quantity: addonOutlet,
      };
      addonArray.push(outletObject);
    }
    if (addonEvent !== 0) {
      let eventObject = {
        id: activePlan?.chargebee_events_addon_id,
        unit_price: parseFloat(activePlan?.event_addon_price) * 100,
        quantity: addonEvent,
      };
      addonArray.push(eventObject);
    }
    if (addonUser !== 0) {
      let userObject = {
        id: activePlan?.chargebee_collaborators_addon_id,
        unit_price: parseFloat(activePlan?.user_addon_price) * 100,
        quantity: addonUser,
      };
      addonArray.push(userObject);
    }
    if (addonQr !== 0) {
      let qrObject = {
        id: activePlan?.chargebee_qr_addon_id,
        unit_price: parseFloat(activePlan?.qr_tags_addon_price) * 100,
        quantity: addonQr,
      };
      addonArray.push(qrObject);
    }

    await props.dispatch(
      Action.getSubscriptionId(
        {
          hostedPageId: props?.order?.user?.transaction_id,
        },
        {
          plan_id: activePlan?.chargebee_plan_id,
          addons: addonArray,
          coupon,
        }
      )
    );
    // if (props.order.updateSubscriptionSuccess.status) {
    handlePayment(props?.order?.user?.transaction_id);
    setSuccess(true);
    // }
  };

  let orderProps = {
    props,
    activePlan,
    userValues,
    outletPrice,
    qrPrice,
    userPrice,
    eventPrice,
    discount_value,
    discountValue,
    setDiscountValue,
    subTotal,
    tax,
    total,
    setUserValues,
    setActivePlan,
  };
  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="d-flex row ">
        <div className="col-md-8 order-2 order-md-1 mt-3 mt-md-0">
          <OrderSummaryCard
            props={props}
            country={country}
            selected_state={selected_state}
            total={total}
            handleCheckout={handleCheckout}
          />
        </div>
        <div className="col-md-4 order-1 order-md-2">
          <YourOrderCard {...orderProps} />
        </div>
      </div>
      <CustomModal
        show={success}
        onHide={() => setSuccess(false)}
        statusicon={Success}
        message="Your plan has updated successfully !"
        button={
          <RouteLink to="/">
            <button
              className="btn btn-light mt-3"
              style={{
                borderRadius: "30px",
                width: "140px",
                height: "54px",
                border: "0.5px solid black",
              }}
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
  return { auth: state.auth, order: state.order };
}

export default withRouter(connect(mapStateToProps)(Index));

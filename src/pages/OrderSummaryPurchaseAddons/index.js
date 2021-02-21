import React from "react";
import { connect } from "react-redux";
import {
  userRegistration,
  userLogin,
  getPlansRequest,
  getLocationRegister,
  updateUser,
  chargeBeeRequest,
  postDiscountValue,
  resetMessage,
  makePaymentRequest,
  getUser,
  getSubscriptionId,
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
    plan_id,
    plan,
  } = props.location.state.values;

  console.log(plan);
  console.log(props);

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
  // const handleLoginData = () => {
  //   const { email, password } = props.location.state.values;
  //   console.log(email, "EAMIL FROM HANDLE LOGIN");
  //   console.log(password, "PASSWORD FROM HANDLE LOGIN");
  //   var postData = {
  //     email: email,
  //     password: password,
  //   };
  //   props
  //     .dispatch(userLogin(postData))
  //     .then((userData) => {
  //       console.log(userData, "USER DATA FROM SUCESS MESSAGE");
  //       props.history.push("/dashboard");
  //     })
  //     .catch((error) => {
  //       console.log(error, "ERROR FROM AXIOS");
  //     });
  // };
  if (!props.auth.locations) {
    return <>Loading...</>;
  }

  const country = _.filter(props.auth.locations, ["id", parseInt(location)]);

  const selected_state =
    country.length > 0 &&
    _.filter(country[0].childrens, ["id", parseInt(state)]) &&
    state;

  let outletPrice = 0;
  if ("outletaddons" in userValues) {
    const { outlet_addon_price, outlet_limit } = activePlan;
    outletPrice =
      outlet_addon_price *
      (userValues.outletaddons - props?.auth?.user?.no_of_outlets);
  }
  let qrPrice = 0;
  if ("qraddons" in userValues) {
    const { qr_tags_addon_price, qr_tags_limit } = activePlan;
    qrPrice =
      qr_tags_addon_price *
      (userValues.qraddons - props?.auth?.user?.no_of_qrcodes);
  }
  let userPrice = 0;
  if ("useraddons" in userValues) {
    const { user_addon_price, user_limit } = activePlan;
    userPrice =
      user_addon_price *
      (userValues.useraddons - props?.auth?.user?.no_of_users);
  }
  let eventPrice = 0;
  if ("eventaddons" in userValues) {
    const { event_addon_price, event_limit } = activePlan;
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
  let tax = subTotal * 0.075;
  tax = parseFloat(tax.toFixed(2));
  let total = subTotal + tax;
  let no_of_outlets =
    "outletaddons" in userValues
      ? userValues?.outletaddons
      : activePlan?.outlet_limit;

  let no_of_qrcodes =
    "qraddons" in userValues ? userValues?.qraddons : activePlan?.qr_tags_limit;

  let no_of_users =
    "useraddons" in userValues
      ? userValues?.useraddons
      : activePlan?.user_limit;

  let no_of_events =
    "eventaddons" in userValues
      ? userValues?.eventaddons
      : activePlan?.event_limit;
  const createId = (length) => {
    let result = "";
    const characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  let transaction_id = createId(13);
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
      no_of_qrcodes: no_of_qrcodes,
      no_of_users: no_of_users,
      no_of_events: no_of_events,
    };
    if (props?.auth?.user === null) {
      props
        .dispatch(userRegistration(inputs))
        .then((response) => {
          setHide(false);
          setShow(true);
        })
        .catch((error) => {
          console.log("error\n", error);
        });
    } else {
      props.dispatch(updateUser(inputs));
    }
  };

  const handleCheckout = () => {
    let outletQuantity = no_of_outlets - activePlan?.outlet_limit;
    let eventQuantity = no_of_events - activePlan?.event_limit;
    let userQuantity = no_of_users - activePlan?.user_limit;
    let qrQuantity = no_of_qrcodes - activePlan?.qr_tags_limit;

    const addonArray = [];
    if (outletQuantity !== 0) {
      let outletObject = {
        id: "additional-outlets-",
        unit_price: 2500,
        quantity: outletQuantity,
      };
      addonArray.push(outletObject);
    }
    if (eventQuantity !== 0) {
      let eventObject = {
        id: "additional-events-",
        unit_price: 2500,
        quantity: eventQuantity,
      };
      addonArray.push(eventObject);
    }
    if (userQuantity !== 0) {
      let userObject = {
        id: "cbdemo_additionaluser",
        unit_price: 1000,
        quantity: userQuantity,
      };
      addonArray.push(userObject);
    }
    if (qrQuantity !== 0) {
      let qrObject = {
        id: "qr-menu-tags",
        unit_price: 700,
        quantity: qrQuantity,
      };
      addonArray.push(qrObject);
    }
    let URL = "";
    if (process.env.NODE_ENV === "production") {
      URL = "https://tomati-api.herokuapp.com/api/payment/update-subsciption";
    } else {
      URL = "http://localhost:3000/api/payment/update-subsciption";
    }
    console.log(activePlan);
    props
      .dispatch(
        getSubscriptionId({ hostedPageId: props?.auth?.user?.transaction_id })
      )
      .then((res) => {
        console.log(res);
        return axios
          .post(URL, {
            plan_id: plan?.chargebee_plan_id,
            addons: addonArray,
            subscription_id: res.hosted_page.content.subscription.id,
          })
          .then((response) => {
            console.log(response);
            handlePayment(props?.auth?.user?.transaction_id);
            return response.data;
          });
      });
  };
  const handleFinish = () => {
    handleCheckout();
  };
  const handlePay = () => {
    if (radio === "Card") {
      handleCheckout(activePlan);
    } else {
      setHide(true);
    }
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
            setHide={setHide}
            handlePayment={handlePayment}
            radio={radio}
            setRadio={setRadio}
            handlePay={handlePay}
            handleFinish={handleFinish}
          />
        </div>
        <div className="col-md-4 order-1 order-md-2">
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
            plan_id={plan_id}
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
          transaction_id={transaction_id}
        />
      ) : null}
      {show ? (
        <LoginModal
          show={show}
          setShow={setShow}
          // handleLoginData={handleLoginData}
        />
      ) : null}
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

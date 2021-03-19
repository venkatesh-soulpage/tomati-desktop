import React, { useEffect, useState } from "react";
// redux
import * as Action from "_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// bootstrap icons
import { GeoAltFill } from "react-bootstrap-icons";
//local component
import Error from "assets/img/Error.svg";
import Success from "assets/img/Success.svg";
import CustomModal from "components/CustomModal";
import Loading from "components/Loading";
import Alert from "react-bootstrap/Alert";

const Index = (props) => {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [activate, setActivate] = useState(false);
  const [search, setSearch] = useState("");
  const [icon, setIcon] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    props.dispatch(Action.userOutlets());
    if (props.auth.userData) {
      props.dispatch(
        Action.getUserLimits({
          subscription_id: props?.auth?.userData?.transaction_id,
        })
      );
    }
  }, [props.auth.userData]);

  const { outlet, auth } = props;

  useEffect(() => {
    const menuQuantity = auth?.limit?.subscription?.addons.find(
      (addon) => addon.id === "free-menu"
    ).quantity;
    const outletsLength = props.outlet?.outlets?.length;
    const status = auth?.limit?.subscription?.status;
    if (outletsLength > menuQuantity) {
      setActivate(true);
      if (status !== "active" && status !== "in_trail") {
        setShow(true);
      }
    } else if (outletsLength <= menuQuantity) {
      if (status !== "active" && status !== "in_trail") {
        setShow(true);
      }
    }
  }, [props.auth.limit, props.outlet.outlets]);

  let filteredOutlets =
    outlet &&
    outlet.outlets.filter((outlet) => {
      return outlet.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  const menuQuantity = auth?.limit?.subscription?.addons.find(
    (addon) => addon.id === "free-menu"
  ).quantity;

  const handleAddoutlet = () => {
    if (
      props.auth?.limit?.subscription?.status !== "active" &&
      props.auth?.limit?.subscription?.status !== "in_trial"
    ) {
      setIcon(Error);
      setMessage(
        "Your account is inactive. Reactivate Subscription to add new menu."
      );
      setError(true);
    } else if (!auth?.userData?.is_subscription_active) {
      setIcon(Error);
      setMessage(
        <div>
          Your account is inactive, this might be a billing issue. Please
          contact{" "}
          <a target="_blank" href="mailto:hello@tomati.app">
            hello@tomati.app
          </a>
        </div>
      );
      setError(true);
    } else if (menuQuantity <= outlet.outlets.length) {
      setMessage(
        "You have exceeded your plan limit. Change plan to add new menu."
      );
      setIcon(Error);
      setError(true);
    } else {
      props.history.push("/dashboard/addoutlet");
    }
  };

  const toggleMenu = async (data, status) => {
    const res = await props.dispatch(Action.toggleMenu(data, status));
    if (res) {
      setIcon(res.status ? Success : Error);
      setMessage(
        <div>
          {res.message}{" "}
          {res.message === "Please upgrade your plan or contact" ? (
            <a target="_blank" href="mailto:hello@tomati.app">
              hello@tomati.app
            </a>
          ) : null}
        </div>
      );
      setError(true);
    }
  };

  const handleCheckout = () => {
    const chargebeeInstance = window.Chargebee.init({
      site: process.env.REACT_APP_AWS ? "tomati" : "tomati-test",
    });
    let cbPortal = chargebeeInstance.createChargebeePortal();
    cbPortal.open({
      async close() {
        const prevPlan = props.auth.limit.subscription;
        const res = await props.dispatch(
          Action.getUserLimits({
            subscription_id: props?.auth?.userData?.transaction_id,
          })
        );
        if (
          res.subscription.plan_id !== prevPlan.plan_id ||
          res.subscription.status !== prevPlan.status
        ) {
          await props.dispatch(Action.updateMenuStatus());
          props.history.go();
        }
      },
    });
  };

  return (
    <div className="pt-0 pr-3 pl-4 pb-3">
      {/* stats */}

      <Alert
        show={show}
        variant="danger"
        onClose={() => {
          setShow(false);
        }}
        style={{ position: "absolute", top: 15, zIndex: "99999999" }}
        dismissible
      >
        Your account is inactive. Reactivate Subscription to add new menu.
      </Alert>

      <div className="d-flex align-items-center">
        <div className="">
          <h3 className="font-weight-bold text-dark m-0">Menu</h3>
        </div>
        <div className="ml-auto  mr-3">
          <h4 className="lead m-0">Total Menus: {outlet?.outlets.length}</h4>
        </div>
        <div className=" mr-3">
          <button className="btn btn-dark btn-sm">
            {auth.limit ? auth.limit.subscription.plan_id : null}
          </button>
        </div>
        <div className="btn btn-outline-dark btn-sm" onClick={handleCheckout}>
          Change
        </div>
      </div>
      <div
        className="card px-4 py-3 shadow-sm mt-3"
        style={{ borderRadius: 6 }}
      >
        <div className="d-flex align-items-center">
          <div>
            <button
              className="btn btn-danger rounded-pill"
              onClick={handleAddoutlet}
              // disabled={
              //   props.auth?.limit?.subscription?.status !== "active" &&
              //   props.auth?.limit?.subscription?.status !== "in_trial"
              // }
            >
              + Add New Menu
            </button>
          </div>
          {/* <div className="ml-auto mr-3" onClick={handleCheckout}>
            <a className="btn btn-dark rounded-pill">+ Addons</a>
          </div> */}

          <div className=" ml-auto">
            <input
              className="form-control "
              type="text"
              placeholder="Filter by search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      {props.outlet.isFetching ? (
        <div className="mt-5">
          <Loading textSecondary={true} />
        </div>
      ) : (
        filteredOutlets &&
        filteredOutlets.map((outlet, id) => {
          return (
            <div
              key={id}
              className="card px-4 py-4 mt-3"
              style={{ borderRadius: 6 }}
            >
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="m-0 font-weight-bold">{outlet.name}</h6>
                  <p className="m-0 mt-2 text-dark">
                    <GeoAltFill className="mr-2" />
                    {outlet.address}
                  </p>
                </div>

                <div className="ml-auto mr-3">
                  <div className="d-flex flex-row align-items-center">
                    {activate ? (
                      <button
                        className="btn btn-danger w-100 ml-auto mr-3"
                        onClick={() => {
                          toggleMenu(outlet.id, !outlet.is_venue_active);
                        }}
                        disabled={
                          props.auth?.limit?.subscription?.status !==
                            "active" &&
                          props.auth?.limit?.subscription?.status !== "in_trial"
                        }
                      >
                        {outlet.is_venue_active ? "Deactivate" : "Activate"}
                      </button>
                    ) : null}

                    <button
                      onClick={() => {
                        props.history.push({
                          pathname: "/dashboard/viewoutlet",
                          state: outlet.id,
                        });
                      }}
                      className="btn btn-danger w-100"
                      disabled={!outlet.is_venue_active}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
      <CustomModal
        show={error}
        onHide={() => {
          setError(false);
          setIcon(null);
        }}
        message={message}
        statusicon={icon}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { outlet: state.outlet, auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

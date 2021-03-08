import React, { useEffect, useState } from "react";
// redux
import * as Action from "_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// bootstrap icons
import { GeoAltFill } from "react-bootstrap-icons";
//local component
import Error from "assets/img/Error.svg";
import CustomModal from "components/CustomModal";

const Index = (props) => {
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
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
  useEffect(() => {}, [props.outlet.outlets]);

  const { outlet, auth } = props;

  let filteredOutlets =
    outlet &&
    outlet.outlets.filter((outlet) => {
      return outlet.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  const handleAddoutlet = () => {
    const menuAddon = auth.limit.subscription.addons.find(
      (addon) => addon.id === "free-menu"
    );
    if (!auth?.userData?.is_subscription_active) {
      setMessage(
        <div>
          Your account is inactive, this might be a billing issue. Please
          contact{" "}
          <a target="_blank" href="mailto:support@tomati.app">
            support@tomati.app
          </a>
        </div>
      );
      setError(true);
    } else if (menuAddon.quantity <= outlet.outlets.length) {
      setMessage(
        "You have 0 menus left on your plan. To add new menu upgrade your plan here."
      );
      setError(true);
    } else {
      props.history.push("/dashboard/addoutlet");
    }
  };

  const toggleMenu = async (data, status) => {
    const res = await props.dispatch(Action.toggleMenu(data, status));
    if (res) {
      setMessage(
        <div>
          {/* Please upgrade your plan or contact{" "} */}
          {res}{" "}
          {res === "Please upgrade your plan or contact" ? (
            <a target="_blank" href="mailto:support@tomati.app">
              support@tomati.app
            </a>
          ) : null}
        </div>
      );
      setError(true);
    }
  };

  return (
    <div className="pt-0 pr-3 pl-4 pb-3">
      {/* stats */}
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
        <a className="btn btn-outline-dark btn-sm" data-cb-type="portal">
          Change
        </a>
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
            >
              + Add New Menu
            </button>
          </div>
          <div className="ml-auto mr-3">
            <a className="btn btn-dark rounded-pill" data-cb-type="portal">
              + Addons
            </a>
          </div>

          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Filter by search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      {props.outlet.isFetching ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only ">Loading...</span>
          </div>
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
                    <div
                      className="btn btn-danger w-100 ml-auto mr-3"
                      onClick={() => {
                        toggleMenu(outlet.id, !outlet.is_venue_active);
                      }}
                    >
                      {outlet.is_venue_active ? "Deactivate" : "Activate"}
                    </div>

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
        onHide={() => setError(false)}
        message={message}
        statusicon={Error}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { outlet: state.outlet, auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

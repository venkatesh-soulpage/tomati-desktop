import React, { useEffect, useState } from "react";
// redux
import { userOutlets } from "_actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
// react bootstrap
import { Modal, Button } from "react-bootstrap";
// bootstrap icons
import { GeoAltFill } from "react-bootstrap-icons";
//local component
import Success from "assets/img/Success.svg";
import Error from "assets/img/Error.svg";
import CustomModal from "components/CustomModal";

const Index = (props) => {
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    props.dispatch(userOutlets());
  }, []);

  const { outlet, order } = props;

  let filteredOutlets =
    outlet &&
    outlet.outlets.filter((outlet) => {
      return outlet.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  const handleAddoutlet = () => {
    if (!order?.user?.is_subscription_active) {
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
    } else if (order.user.plan[0].outlet_limit === outlet.outlets.length) {
      setMessage(
        "You have 0 outlets left on your plan. To add new outlets upgrade your plan here."
      );
      setError(true);
    } else {
      props.history.push("/dashboard/addoutlet");
    }
  };

  return (
    <div className="pt-0 pr-3 pl-4 pb-3">
      {/* stats */}
      <div className="d-flex align-items-center">
        <div className="">
          <h3 className="font-weight-bold text-dark m-0">Outlet</h3>
        </div>
        <div className="ml-auto  mr-3">
          <h4 className="lead m-0">Total Outlets: {outlet?.outlets.length}</h4>
        </div>
        <div className=" mr-3">
          <button className="btn btn-dark btn-sm">
            {order?.user?.plan[0]?.plan}
          </button>
        </div>
        <div className="">
          <Link
            to={{
              pathname: "/order-summary",
              state: {
                values: {
                  company_name: order?.user?.last_name,
                  email: order?.user?.email,
                  full_name: order?.user?.first_name,
                  location: order?.user?.location_id,
                  state: order?.user?.state_id,
                  city: order?.user?.city,
                  address: order?.user?.street,
                  plan_id: order?.user?.plan_id,
                },
              },
            }}
          >
            <button className="btn btn-outline-dark btn-sm">Change</button>
          </Link>
        </div>
      </div>
      {/* outlet */}
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
              + Add New Outlet
            </button>
          </div>
          <div className="ml-auto mr-3">
            <Link
              to={{
                pathname: "/order-summary/purchase-addones",
                state: {
                  values: {
                    company_name: order?.user?.last_name,
                    email: order?.user?.email,
                    full_name: order?.user?.first_name,
                    location: order?.user?.location_id,
                    state: order?.user?.state_id,
                    city: order?.user?.city,
                    address: order?.user?.street,
                    plan: order?.user?.plan[0],
                    plan_id: order?.user?.plan_id,
                  },
                },
              }}
            >
              <button className="btn btn-dark rounded-pill">+ Addons</button>
            </Link>
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

      {/* show outlets */}
      {filteredOutlets &&
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
                  {/* <Link to="/dashboard/viewoutlet"> */}
                  <button
                    onClick={() => {
                      props.history.push({
                        pathname: "/dashboard/viewoutlet",
                        state: outlet.id,
                      });
                    }}
                    className="btn btn-danger w-100"
                  >
                    View
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      <CustomModal
        show={error}
        onHide={() => setError(false)}
        message={message}
        statusicon={Error}
        button={
          !order?.user?.is_subscription_active ? null : (
            <Link
              to={{
                pathname: "/order-summary",
                state: {
                  values: {
                    company_name: order?.user?.last_name,
                    email: order?.user?.email,
                    full_name: order?.user?.first_name,
                    location: order?.user?.location_id,
                    state: order?.user?.state_id,
                    city: order?.user?.city,
                    address: order?.user?.street,
                    plan: order?.user?.plan[0],
                    plan_id: order?.user?.plan_id,
                  },
                },
              }}
            >
              <Button className="btn btn-primary mt-3 rounded-pill px-4 py-2">
                Upgrade
              </Button>
            </Link>
          )
        }
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { outlet: state.outlet, auth: state.auth, order: state.order };
}

export default withRouter(connect(mapStateToProps)(Index));

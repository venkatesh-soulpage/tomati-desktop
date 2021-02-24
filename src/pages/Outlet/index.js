import React, { useEffect, useState } from "react";
// redux
import { userOutlets } from "_actions/outlet";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
// react bootstrap
import { Modal, Button } from "react-bootstrap";
// bootstrap icons
import { GeoAltFill } from "react-bootstrap-icons";
//local component
import Success from "assets/img/Success.svg";

const Index = (props) => {
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  console.log(props);
  useEffect(() => {
    props.dispatch(userOutlets());
  }, []);

  const { outlet, auth } = props;

  let filteredOutlets =
    outlet &&
    outlet.outlets.filter((outlet) => {
      console.log(outlet);
      return outlet.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  console.log(filteredOutlets);

  const handleAddoutlet = () => {
    console.log(auth.user.plan.outlet_limit);

    if (auth.user.plan[0].outlet_limit === outlet.outlets.length) {
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
            {auth?.user?.plan[0]?.plan}
          </button>
        </div>
        <div className="">
          <Link
            to={{
              pathname: "/order-summary",
              state: {
                values: {
                  company_name: auth?.user?.last_name,
                  email: auth?.user?.email,
                  full_name: auth?.user?.first_name,
                  location: auth?.user?.location?.id,
                  state: auth?.user?.state,
                  city: auth?.user?.city,
                  address: auth?.user?.street,
                  plan_id: auth?.user?.plan_id,
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
                    company_name: auth?.user?.last_name,
                    email: auth?.user?.email,
                    full_name: auth?.user?.first_name,
                    location: auth?.user?.location?.id,
                    state: auth?.user?.state,
                    city: auth?.user?.city,
                    address: auth?.user?.street,
                    plan: auth?.user?.plan[0],
                    plan_id: auth?.user?.plan_id,
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
      <Modal
        show={error}
        onHide={() => setError(false)}
        style={{ marginTop: "15%" }}
      >
        {" "}
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img className="img-fluid mt-3" src={Success} alt="icon" />
            <p
              className="mt-3"
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              Please Upgrade Your Plan !
            </p>
            <Link
              to={{
                pathname: "/order-summary",
                state: {
                  values: {
                    company_name: auth?.user?.last_name,
                    email: auth?.user?.email,
                    full_name: auth?.user?.first_name,
                    location: auth?.user?.location,
                  },
                },
              }}
            >
              <Button className="btn btn-primary mt-3 rounded-pill px-4 py-2">
                Continue
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

function mapStateToProps(state) {
  return { outlet: state.outlet, auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

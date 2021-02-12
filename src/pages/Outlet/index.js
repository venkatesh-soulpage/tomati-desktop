import React, { useEffect, useState } from "react";
import { userOutlets } from "_actions/outlet";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
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
          <button className="btn btn-dark btn-sm">Premium/monthly</button>
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
                  location: auth?.user?.location,
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
            <select class="form-control">
              <option>Sort By</option>
            </select>
          </div>
          <div>
            <input
              class="form-control"
              type="text"
              placeholder="Filter by search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* warning */}
      {/* <div class="alert alert-warning mt-3 mb-3" role="alert">
        A simple warning alert—check it out!
      </div> */}
      {/* show outlets */}
      {filteredOutlets &&
        filteredOutlets.map((outlet, id) => {
          return (
            <div
              key={id}
              className="card px-4 py-3 mt-3"
              style={{ borderRadius: 6 }}
            >
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="m-0 font-weight-bold">{outlet.name}</h6>
                  <p className="m-0 text-dark">{outlet.address}</p>
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
                    className="btn btn-danger"
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
              <Button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "30px", width: "140px", height: "54px" }}
              >
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

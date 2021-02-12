import React, { useEffect, useState } from "react";
import { userOutlets } from "_actions/outlet";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Success from "assets/img/Success.svg";

const Index = (props) => {
  const [error, setError] = useState(false);
  console.log(props);
  useEffect(() => {
    props.dispatch(userOutlets());
  }, []);

  const { outlet, auth } = props;

  const handleAddoutlet = () => {
    console.log(outlet.outlets.length);

    if (auth.user.plan_id === 1 && outlet.outlets.length >= 1) {
      setError(true);
    } else {
      props.history.push("/dashboard/addoutlet");
    }
  };
  return (
    <div className="p-4 ml-4">
      {/* stats */}
      <div className="d-flex align-items-center">
        <div className="">
          <h3 className="font-weight-bold text-dark m-0">Outlet</h3>
        </div>
        <div className="ml-auto  mr-3">
          <h4 className="lead m-0">Total Outlets: X</h4>
        </div>
        <div className=" mr-3">
          <button className="btn btn-dark btn-sm">Premium/Monthly</button>
        </div>
        <div className="">
          <button className="btn btn-outline-dark btn-sm">Change</button>
        </div>
      </div>
      {/* outlet */}
      <div className="card px-4 py-3 shadow-sm mt-3">
        <div className="d-flex align-items-center">
          <div>
            <button className="btn btn-danger" onClick={handleAddoutlet}>
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
            />
          </div>
        </div>
      </div>

      {/* warning */}
      <div class="alert alert-warning mt-3 mb-3" role="alert">
        A simple warning alert—check it out!
      </div>
      {/* show outlets */}
      {outlet &&
        outlet.outlets.map((outlet, id) => {
          return (
            <div key={id} className="card px-4 py-3  mt-3">
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
        style={{
          position: "absolute",
          // left: "50%",
          top: "25%",
          // transform: 'translate(-50%, -50%)',
        }}
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
            <Link to={{ pathname: "/dashboard/outlet" }}>
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

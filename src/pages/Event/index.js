import React, { useEffect, useState } from "react";
import { userEvents } from "_actions/event";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Success from "assets/img/Success.svg";
import { values } from "lodash";

const Index = (props) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    props.dispatch(userEvents());
  }, []);

  console.log(props);
  const { event, auth } = props;

  let filteredEvents =
    event &&
    event.events.filter((event) => {
      console.log(event);
      return event.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  const handleAddEvent = () => {
    console.log(auth.user.plan.event_limit);

    if (auth.user.plan[0].event_limit === event.events.length) {
      setError(true);
    } else {
      props.history.push("/dashboard/addevent");
    }
  };

  return (
    <div className="pt-0 pr-3 pl-4 pb-3">
      {/* stats */}
      <div className="d-flex align-items-center">
        <div className="">
          <h3 className="font-weight-bold text-dark m-0">Event</h3>
        </div>
        <div className="ml-auto  mr-3">
          <h4 className="lead m-0">Total Events: {event?.events.length}</h4>
        </div>
        <div className=" mr-3">
          <button className="btn btn-dark btn-sm">Premium/Monthly</button>
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
              onClick={handleAddEvent}
              className="btn btn-danger rounded-pill"
            >
              + Add New Event
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

      {filteredEvents &&
        filteredEvents.map((event, id) => {
          return (
            <div
              key={id}
              className="card px-4 py-3  mt-3"
              style={{ borderRadius: 6 }}
            >
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="m-0 font-weight-bold">{event.name}</h6>
                  <p className="m-0 text-dark">{event.address}</p>
                </div>
                <div className="ml-auto mr-3">
                  <Link
                    to={{ pathname: "/dashboard/viewevent", state: event.id }}
                  >
                    <button className="btn btn-danger">View</button>
                  </Link>
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
  return { event: state.event, auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

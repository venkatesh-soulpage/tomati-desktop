import React, { useEffect } from "react";
import { userEvents } from "_actions/event";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

const Index = (props) => {
  useEffect(() => {
    props.dispatch(userEvents());
  }, []);

  console.log(props);
  const { event } = props;
  return (
    <div className="p-4 ml-4">
      {/* stats */}
      <div className="d-flex align-items-center">
        <div className="">
          <h3 className="font-weight-bold text-dark m-0">Event</h3>
        </div>
        <div className="ml-auto  mr-3">
          <h4 className="lead m-0">Total Events: X</h4>
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
            <button
              onClick={() => props.history.push("/dashboard/addevent")}
              className="btn btn-danger"
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
            />
          </div>
        </div>
      </div>

      {/* warning */}
      <div class="alert alert-warning mt-3 mb-3" role="alert">
        A simple warning alert—check it out!
      </div>
      {/* show outlets */}

      {event &&
        event.events.map((event, id) => {
          return (
            <div key={id} className="card px-4 py-3  mt-3">
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
    </div>
  );
};

function mapStateToProps(state) {
  return { event: state.event };
}

export default withRouter(connect(mapStateToProps)(Index));

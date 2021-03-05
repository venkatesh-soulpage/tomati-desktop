import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import * as Action from "_actions";
import { Link, withRouter } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { GeoAltFill } from "react-bootstrap-icons";

const Index = (props) => {
  const { user } = props.location.state;
  useEffect(() => {
    props.dispatch(Action.userOutlets({ account_id: user.id }));
    props.dispatch(Action.userEvents({ account_id: user.id }));
  }, []);
  console.log(props, "USER");
  const { outlet, event } = props;

  return (
    <div className="p-4">
      <h6 className="m-0 my-4 font-weight-bold">
        {user.first_name + " " + user.last_name}
      </h6>
      <Tabs defaultActiveKey="menus">
        <Tab eventKey="menus" title="Menus">
          {outlet &&
            outlet.outlets.map((outlet, id) => {
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
                      <Link
                        to={{
                          pathname: "/dashboard/viewoutlet",
                          state: outlet.id,
                        }}
                      >
                        <button className="btn btn-danger">View</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </Tab>

        {/* <Tab eventKey="events" title="Events">
          {event &&
            event.events.map((event, id) => {
              return (
                <div
                  key={id}
                  className="card px-4 py-4  mt-3"
                  style={{ borderRadius: 6 }}
                >
                  <div className="d-flex align-items-center">
                    <div>
                      <h6 className="m-0 font-weight-bold">{event.name}</h6>
                      <p className="m-0 mt-2  text-dark">
                        <GeoAltFill className="mr-2" />
                        {event.address}
                      </p>
                    </div>
                    <div className="ml-auto mr-3">
                      <Link
                        to={{
                          pathname: "/dashboard/viewevent",
                          state: event.id,
                        }}
                      >
                        <button className="btn btn-danger">View</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </Tab> */}
      </Tabs>
    </div>
  );
};
function mapStateToProps(state) {
  return { auth: state.auth, outlet: state.outlet, event: state.event };
}

export default withRouter(connect(mapStateToProps)(Index));

import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import * as Action from "_actions";
import { Link, withRouter } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { GeoAltFill } from "react-bootstrap-icons";
import Loading from "components/Loading";

const Index = (props) => {
  useEffect(() => {
    props.dispatch(Action.getSelectedUser());
  }, []);
  useEffect(() => {
    props.dispatch(
      Action.userOutlets({ account_id: props.auth.selectedUser?.id })
    );
  }, [props.auth.selectedUser]);
  const { outlet } = props;
  const { selectedUser: user } = props.auth;

  if (!user) {
    return <Loading textSecondary={true} />;
  }
  return (
    <div className="p-4">
      <h6 className="m-0 my-4 font-weight-bold">
        {user.first_name + " " + user.last_name}
      </h6>
      <Tabs defaultActiveKey="menus">
        <Tab eventKey="menus" title="Menus">
          {props.outlet.isFetching ? (
            <div className="mt-5">
              <Loading text-secondary={true} />
            </div>
          ) : (
            outlet &&
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
            })
          )}
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

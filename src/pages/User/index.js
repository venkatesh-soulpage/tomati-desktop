import React, { useState, useEffect } from "react";
// redux
import { connect } from "react-redux";
import * as Action from "_actions";
import { Link, withRouter } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { GeoAltFill } from "react-bootstrap-icons";
import Loading from "components/Loading";
import CustomModal from "components/CustomModal";
import Error from "assets/img/Error.svg";

const Index = (props) => {
  useEffect(() => {
    props.dispatch(Action.getSelectedUser());
  }, []);
  useEffect(() => {
    props.auth.selectedUser?.id && props.dispatch(
      Action.userOutlets({ account_id: props.auth.selectedUser?.id })
    );
  }, [props.auth.selectedUser]);
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(Error);
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
              <Loading textSecondary={true} />
            </div>
          ) : (
            outlet &&
            outlet.outlets.map((outlet, id) => {
              return (
                <div key={id} className="card px-4 py-4 mt-3 br-5">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6 className="m-0 font-weight-bold">{outlet.name}</h6>
                      <p className="m-0 mt-2 text-dark">
                        <GeoAltFill className="mr-2" />
                        {outlet.address}
                      </p>
                    </div>
                    <div className="ml-auto mr-3">
                      <button className="mr-2 btn btn-danger" onClick={async () => {
                         const res = await props.dispatch(Action.toggleMenu(outlet.id, !outlet.is_venue_active, props.auth.selectedUser?.id));
                         res.message && setShow(res.message);
                        }}>
                          {outlet.is_venue_active ? "Deactivate" : "Activate"}
                        </button>
                      <Link
                        to={{
                          pathname: "/dashboard/outlet/viewoutlet",
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
      </Tabs>
      <CustomModal
                         show={show}
                         onHide={() => {
                           setShow(false);
                         }}
                         message={show}
                         statusicon={icon}
                       />
    </div>
  );
};
function mapStateToProps(state) {
  return { auth: state.auth, outlet: state.outlet, event: state.event };
}

export default withRouter(connect(mapStateToProps)(Index));

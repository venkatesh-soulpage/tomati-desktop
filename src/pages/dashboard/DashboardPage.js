import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SideDrawer from "../SideDrawer";
import Outlet from "../Outlet";
import Event from "../Event";
import ViewOutlet from "../ViewOutlet";
import ViewEvent from "../ViewEvent";
import AddOutlet from "../AddOutlet";
import AddEvent from "../AddEvent";
import Settings from "../Settings";

import { connect } from "react-redux";
import { getUser, updateUser } from "_actions/auth";
// Router
import { withRouter, Link } from "react-router-dom";

function DashboardPage(props) {
  useEffect(() => {
    props.dispatch(getUser());
  }, []);

  return (
    <div className="container mt-4">
      <div style={{ marginTop: "100px" }}>
        <div className="dashboard-grid-wrapper">
          <div className="dashboard-grid-header"></div>
          <div className="dashboard-left-sidebar">
            <SideDrawer />
          </div>
          <div className="dashboard-grid-main">
            <Switch>
              <Route exact path={props.match.path} component={Outlet} />

              <Route
                exact
                path={`${props.match.path}/outlet`}
                component={Outlet}
              />
              <Route
                exact
                path={`${props.match.path}/event`}
                component={Event}
              />
              <Route
                path={`${props.match.path}/viewoutlet`}
                component={ViewOutlet}
              />
              <Route
                path={`${props.match.path}/viewevent`}
                component={ViewEvent}
              />
              <Route
                exact
                path={`${props.match.path}/addoutlet`}
                component={AddOutlet}
              />
              <Route
                exact
                path={`${props.match.path}/addevent`}
                component={AddEvent}
              />
              <Route
                exact
                path={`${props.match.path}/settings`}
                component={Settings}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(DashboardPage));

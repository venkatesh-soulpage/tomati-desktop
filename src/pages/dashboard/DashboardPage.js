import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import * as Action from "_actions";
// react-router
import { Route, Switch } from "react-router-dom";
// local components
import SideDrawer from "../SideDrawer";
import Outlet from "../Outlet";
import Event from "../Event";
import ViewOutlet from "../ViewOutlet";
import ViewEvent from "../ViewEvent";
import AddOutlet from "../AddOutlet";
import AddEvent from "../AddEvent";
import Settings from "../Settings";
import AllUsers from "../AllUsers";
import User from "../User";

// Router
import { withRouter } from "react-router-dom";

function DashboardPage(props) {
  useEffect(() => {
    window.scroll(0, 0);
    props.dispatch(Action.getUserData());
  }, []);

  return (
    <div className="container mt-4">
      <div className="mt-100">
        <div className="dashboard-grid-wrapper">
          <div className="dashboard-grid-header"></div>
          <div className="dashboard-left-sidebar">
            <SideDrawer />
          </div>
          <div className="dashboard-grid-main">
            <Switch>
              {/* <Route exact path={props.match.path} component={Outlet} /> */}

              <Route
                exact
                path={`${props.match.path}/outlet`}
                component={Outlet}
              />
              {/* <Route
                exact
                path={`${props.match.path}/event`}
                component={Event}
              /> */}
              <Route
                path={`${props.match.path}/viewoutlet`}
                component={ViewOutlet}
              />
              {/* <Route
                path={`${props.match.path}/viewevent`}
                component={ViewEvent}
              /> */}
              <Route
                exact
                path={`${props.match.path}/addoutlet`}
                component={AddOutlet}
              />
              {/* <Route
                exact
                path={`${props.match.path}/addevent`}
                component={AddEvent}
              /> */}
              <Route
                exact
                path={`${props.match.path}/settings`}
                component={Settings}
              />
              <Route
                exact
                path={`${props.match.path}/all-users`}
                component={AllUsers}
              />
              <Route exact path={`${props.match.path}/user`} component={User} />
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

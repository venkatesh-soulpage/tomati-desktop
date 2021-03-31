import React from "react";
// image assets
import Icondashboard from "assets/img/Icondashboard.svg";
import Iconoutlet from "assets/img/Iconoutlet.svg";
import Iconwallet from "assets/img/Iconwallet.svg";
import Iconsettings from "assets/img/IconSetting.svg";
import velvet2 from "assets/img/velvet2.svg";
import outletInactive from "assets/img/outletInactive.svg";
import eventInactive from "assets/img/eventInactive.svg";
import settingsInactive from "assets/img/settingsInactive.svg";
import walletInactive from "assets/img/walletInactive.svg";
import logoutInactive from "assets/img/logoutInactive.svg";
import Loading from "components/Loading";
// Router
import { NavLink, useLocation } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import * as Action from "_actions";

const Index = (props) => {
  const currentLocation = useLocation();
  if (!props.auth.userData) {
    return <Loading textSecondary={true} />;
  }
  return (
    <div className="sidebar-sticky rounded">
      <ul className="nav flex-column">
        {props?.auth?.userData?.is_admin ? (
          <div>
            <li className=" py-4 border-bottom">
              <NavLink
                disabled
                className=" drawer-link"
                activeClassName="drawer-link-active"
                to="/dashboard/all-users"
              >
                <img className="mr-3" src={Iconsettings} alt="icon" /> Users
              </NavLink>
            </li>
          </div>
        ) : (
          <div>
            <li disabled className="py-4 border-bottom">
              <NavLink
                exact
                className="drawer-link blocked"
                activeClassName="drawer-link-active"
                to="/dashboard"
              >
                {currentLocation.pathname === "/dashboard" ? (
                  <img className="mr-3" src={Icondashboard} alt="icon" />
                ) : (
                  <img className="mr-3" src={Icondashboard} alt="icon" />
                )}
                Dashboard
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className=" py-4 border-bottom">
              <NavLink
                exact
                className="drawer-link"
                activeClassName="drawer-link-active"
                to="/dashboard/outlet"
              >
                {currentLocation.pathname === "/dashboard/outlet" ? (
                  <img className="mr-3" src={Iconoutlet} alt="icon" />
                ) : (
                  <img className="mr-3" src={outletInactive} alt="icon" />
                )}
                Menu
              </NavLink>
            </li>
            {/* <li disabled className=" py-4 border-bottom">
              <NavLink
                exact
                className=" drawer-link blocked"
                activeClassName="drawer-link-active"
                to="/dashboard/event"
              >
                {currentLocation.pathname === "/dashboard/event" ? (
                  <img className="mr-3" src={velvet2} alt="icon" />
                ) : (
                  <img className="mr-3" src={eventInactive} alt="icon" />
                )}
                Event
              </NavLink>
            </li> */}
            <li className=" py-4 border-bottom">
              <NavLink
                disabled
                className=" drawer-link blocked"
                activeClassName="drawer-link-active"
                to="/dashboard/wallet"
              >
                {currentLocation.pathname === "/dashboard/wallet" ? (
                  <img className="mr-3" src={Iconwallet} alt="icon" />
                ) : (
                  <img className="mr-3" src={walletInactive} alt="icon" />
                )}
                Wallet
              </NavLink>
            </li>

            <li className=" py-4 border-bottom">
              <NavLink
                disabled
                className=" drawer-link"
                activeClassName="drawer-link-active"
                to="/dashboard/settings"
              >
                {currentLocation.pathname === "/dashboard/settings" ? (
                  <img className="mr-3" src={Iconsettings} alt="icon" />
                ) : (
                  <img className="mr-3" src={settingsInactive} alt="icon" />
                )}
                Settings
              </NavLink>
            </li>
          </div>
        )}
        <li className=" py-3 border-bottom">
          <NavLink
            disabled
            className=" drawer-link"
            to="/"
            onClick={() => props.dispatch(Action.userSignOut())}
          >
            <img className="mr-3" src={logoutInactive} alt="icon" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Index);

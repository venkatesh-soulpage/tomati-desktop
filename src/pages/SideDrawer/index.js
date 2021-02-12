import React from "react";
import Icondashboard from "assets/img/Icondashboard.svg";
import Iconoutlet from "assets/img/Iconoutlet.svg";
import Iconwallet from "assets/img/Iconwallet.svg";
import Iconsettings from "assets/img/IconSetting.svg";
import Iconpower from "assets/img/IconLogout.svg";
import velvet2 from "assets/img/velvet2.svg";
// Router
import { NavLink, useLocation } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { userSignOut } from "_actions/auth";

const Index = (props) => {
  return (
    <div className="sidebar-sticky rounded">
      <ul className="nav flex-column">
        <li disabled className="py-4 border-bottom">
          <NavLink
            exact
            className="drawer-link"
            activeClassName="drawer-link-active"
            to="/dashboard"
            style={{ cursor: "not-allowed", pointerEvents: "none" }}
          >
            <img className="mr-3" src={Icondashboard} alt="icon" /> Dashboard
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
            <img className="mr-3" src={Iconoutlet} alt="icon" /> Outlet
          </NavLink>
        </li>
        <li className=" py-4 border-bottom">
          <NavLink
            exact
            className=" drawer-link"
            activeClassName="drawer-link-active"
            to="/dashboard/event"
          >
            <img className="mr-3" src={velvet2} alt="icon" /> Event
          </NavLink>
        </li>
        <li className=" py-4 border-bottom">
          <NavLink
            disabled
            className=" drawer-link"
            activeClassName="drawer-link-active"
            to="/dashboard/wallet"
            style={{ cursor: "not-allowed", pointerEvents: "none" }}
          >
            <img className="mr-3" src={Iconwallet} alt="icon" /> Wallet
          </NavLink>
        </li>
        <li className=" py-4 border-bottom">
          <NavLink
            disabled
            className=" drawer-link"
            activeClassName="drawer-link-active"
            to="/dashboard/settings"
          >
            <img className="mr-3" src={Iconsettings} alt="icon" /> Settings
          </NavLink>
        </li>
        <li className=" py-3 border-bottom">
          <NavLink
            disabled
            className=" drawer-link"
            to="#"
            onClick={() => props.dispatch(userSignOut())}
          >
            <img className="mr-3" src={Iconpower} alt="icon" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Index);

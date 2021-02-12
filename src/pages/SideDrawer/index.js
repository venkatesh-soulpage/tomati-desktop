import React from "react";
import { NavLink } from "react-router-dom";
import Icondashboard from "assets/img/Icondashboard.svg";
import Iconoutlet from "assets/img/Iconoutlet.svg";
import Iconwallet from "assets/img/Iconwallet.svg";
import Iconsettings from "assets/img/IconSetting.svg";
import Iconpower from "assets/img/IconLogout.svg";
import velvet2 from "assets/img/velvet2.svg";

const Index = () => {
  return (
    <div className="sidebar-sticky rounded">
      <ul className="nav flex-column">
        <li disabled className="py-4 border-bottom">
          <NavLink
            exact
            className="drawer-link"
            activeClassName="drawer-link-active"
            to="#"
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
            to="#"
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
            activeClassName="drawer-link-active"
            to="#"
          >
            <img className="mr-3" src={Iconpower} alt="icon" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Index;

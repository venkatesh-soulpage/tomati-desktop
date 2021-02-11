import React from "react";
import { NavLink } from "react-router-dom";
import Icondashboard from "../../assets/img/Icondashboard.svg";
import Iconoutlet from "../../assets/img/Iconoutlet.svg";
import Iconwallet from "../../assets/img/IconWallet.svg";
import Iconsettings from "../../assets/img/IconSetting.svg";
import Iconpower from "../../assets/img/IconLogout.svg";
import velvet2 from "../../assets/img/velvet2.svg";

const Index = () => {
  return (
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li disabled class="py-3 border-bottom">
          <NavLink
            exact
            className="drawer-link"
            activeClassName="drawer-link-active"
            to="#"
          >
            <img src={Icondashboard} alt="icon" /> Dashboard{" "}
            <span class="sr-only">(current)</span>
          </NavLink>
        </li>
        <li class=" py-3 border-bottom">
          <NavLink
            exact
            className="drawer-link"
            activeClassName="drawer-link-active"
            to="/dashboard/outlet"
          >
            <img src={Iconoutlet} alt="icon" /> Outlet
          </NavLink>
        </li>
        <li class=" py-3 border-bottom">
          <NavLink
            exact
            className=" drawer-link"
            activeClassName="drawer-link-active"
            to="/dashboard/event"
          >
            <img src={velvet2} alt="icon" /> Event
          </NavLink>
        </li>
        <li class=" py-3 border-bottom">
          <NavLink
            disabled
            className=" drawer-link"
            activeClassName="drawer-link-active"
            to="#"
          >
            <img src={Iconwallet} alt="icon" /> Wallet
          </NavLink>
        </li>
        <li class=" py-3 border-bottom">
          <NavLink
            disabled
            className=" drawer-link"
            activeClassName="drawer-link-active"
            to="#"
          >
            <img src={Iconsettings} alt="icon" /> Settings
          </NavLink>
        </li>
        <li class=" py-3 border-bottom">
          <NavLink
            disabled
            className=" drawer-link"
            activeClassName="drawer-link-active"
            to="#"
          >
            <img src={Iconpower} alt="icon" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Index;

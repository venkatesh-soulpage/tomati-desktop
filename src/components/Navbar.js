import React, { useEffect } from "react";
// Router
import { NavLink, useLocation } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { userSignOut, getUser } from "_actions/auth";
// Bootstrap imports
import { Navbar, Nav, Dropdown, NavItem, Container } from "react-bootstrap";
import NavLinkB from "react-bootstrap/NavLink";
import { Bell } from "react-bootstrap-icons";
// assets
import Logo from "assets/img/Logo.svg";
import toggle from "assets/img/toggle.svg";
import User from "assets/img/User.png";

// react-scroll
import { Link } from "react-scroll";

function Navigation(props) {
  // User SignOut
  function handleSignOut(event) {
    props.dispatch(userSignOut());
  }

  const location = useLocation();
  console.log(props.auth);

  return (
    <div
      className="fixed-top bg-white border-bottom"
      style={{ zIndex: "999999999" }}
    >
      <Container>
        <Navbar expand="md">
          <Navbar.Brand href={props.auth.isAuthenticated ? "/dashboard" : "/"}>
            <img
              src={Logo}
              className="img-fluid d-inline-block align-top logo-img "
              alt="Tomati.app"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
            <img src={toggle} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ fontSize: "smaller" }}>
              {props.auth.isAuthenticated ? (
                <Nav className="d-flex align-items-center">
                  <Nav.Link
                    as={NavLink}
                    to="/dashboard"
                    activeClassName="navlink-selected"
                  >
                    <Bell style={{ fontSize: "32px" }} />
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/dashboard"
                    activeClassName="navlink-selected"
                  >
                    <img
                      className="rounded-circle"
                      height="50px"
                      width="50px"
                      src={props?.auth?.userData?.profile_img || User}
                    />
                  </Nav.Link>
                  <p className="p-0 m-0">{props?.auth?.userData?.first_name}</p>
                </Nav>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Navigation);

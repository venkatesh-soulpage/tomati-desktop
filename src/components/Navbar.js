import React from "react";
// Router
import { NavLink } from "react-router-dom";
// Redux
import { connect } from "react-redux";
// Bootstrap imports
import { Navbar, Nav, Container } from "react-bootstrap";
import { Bell } from "react-bootstrap-icons";
// assets
import Logo from "assets/img/Logo.svg";
import toggle from "assets/img/toggle.svg";
import User from "assets/img/User.png";

function Navigation(props) {
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
            <img src={toggle} alt="toggle" />
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
                      alt="profile pic"
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

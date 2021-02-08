import React from "react";
// Router
import { NavLink } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { userSignOut } from "_actions/auth";
// Bootstrap imports
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLinkB from "react-bootstrap/NavLink";
// asserts
import ivy_logo from "assets/img/logo.svg";
// constants
import { AWS_S3_STATIC_URL } from "constants/APIRoutes";

function Navigation(props) {
  // User SignOut
  function handleSignOut(event) {
    props.dispatch(userSignOut());
  }

  return (
    <Navbar bg="light" expand="lg" className="elevated">
      {props.auth.isAuthenticated ? (
        <Navbar.Brand as={NavLink} to="/dashboard">
          <img
            src={AWS_S3_STATIC_URL + "/logo.svg"}
            alt="Ivy-lender-logo"
            height="56px"
          />
        </Navbar.Brand>
      ) : (
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={AWS_S3_STATIC_URL + "/logo.svg"}
            alt="Ivy-lender-logo"
            height="56px"
          />
        </Navbar.Brand>
      )}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {props.auth.isAuthenticated ? (
            <Nav>
              <Nav.Link
                as={NavLink}
                to="/dashboard"
                activeClassName="navlink-selected"
              >
                Dashboard
              </Nav.Link>
              <Dropdown as={NavItem} alignRight>
                <Dropdown.Toggle as={NavLinkB}>
                  {props.auth.userData.first_name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleSignOut}>LogOut</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                as={NavLink}
                exact
                to="/"
                activeClassName="navlink-selected"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/login"
                activeClassName="navlink-selected"
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/register"
                activeClassName="navlink-selected"
              >
                Register
              </Nav.Link>
            </Nav>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Navigation);

import React from "react";
// Router
import { NavLink, useLocation } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { userSignOut } from "_actions/auth";
// Bootstrap imports
import { Navbar, Nav, Dropdown, NavItem, Container } from "react-bootstrap";
import NavLinkB from "react-bootstrap/NavLink";
// assets
import Logo from "assets/img/Logo.svg";
// react-scroll
import { Link } from "react-scroll";

function Navigation(props) {
  // User SignOut
  function handleSignOut(event) {
    props.dispatch(userSignOut());
  }

  const location = useLocation();

  return (
    <div className="fixed-top bg-white border-bottom">
      <Container>
        <Navbar expand="md">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="Tomati.app"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ fontSize: "smaller" }}>
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
                      <Dropdown.Item onClick={handleSignOut}>
                        LogOut
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link
                    as={NavLink}
                    exact
                    to="/"
                    activeClassName="active-nav-text"
                    style={{ color: "inherit", cursor: "pointer" }}
                  >
                    Home
                  </Nav.Link>
                  {location.pathname === "/" && (
                    <>
                      <Link
                        className="nav-link"
                        smooth={true}
                        duration={1000}
                        to="works"
                        activeClass="active-nav-text"
                        style={{ color: "inherit", cursor: "pointer" }}
                      >
                        How it works
                      </Link>

                      <Link
                        className="nav-link"
                        smooth={true}
                        duration={1000}
                        to="features"
                        activeClass="active-nav-text"
                        style={{ color: "inherit", cursor: "pointer" }}
                      >
                        Features
                      </Link>

                      <Link
                        className="nav-link"
                        smooth={true}
                        duration={1000}
                        to="faq"
                        activeClass="active-nav-text"
                        style={{ color: "inherit", cursor: "pointer" }}
                      >
                        FAQ
                      </Link>
                    </>
                  )}
                  <Nav.Link
                    as={NavLink}
                    exact
                    to="/login"
                    activeClassName="active-nav-text"
                    style={{ color: "inherit", cursor: "pointer" }}
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    exact
                    to="/register"
                    className="register-button"
                    activeClassName="active-nav-text"
                    style={{ color: "inherit", cursor: "pointer" }}
                  >
                    Register
                  </Nav.Link>
                </Nav>
              )}
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

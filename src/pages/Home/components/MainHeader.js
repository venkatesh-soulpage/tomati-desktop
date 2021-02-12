import React from "react";
// Bootstrap imports
import { Button, Card, CardDeck } from "react-bootstrap";
// bootstrap-icons
import { ArrowRight } from "react-bootstrap-icons";
import Background from "assets/img/Background.svg";
import Group1 from "assets/img/Group1.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
export default function MainHeader() {
  return (
    <>
      <div
        className="hero-unit"
        style={{ backgroundImage: `url("{Background})` }}
      >
        <div className="container h-100">
          <div className="row h-100 justify-content-center">
            <div className="col-md-9 align-self-center text-center">
              <h1 className="display-5 font-weight-bolder primary-text-color">
                Create a Digital Menu for your bar/restaurant.
              </h1>
              <p className="m-0 w-75 mx-auto font-weight-light hero-text-secondary mt-2">
                Extend your workforce capacity with contact-less order and
                payment solutions.
              </p>
              <p className="font-weight-light hero-text-secondary my-4">
                Instant Set-Up Free to try.
              </p>
              <Link to="/register">
                <Button
                  size="md"
                  variant="danger"
                  className="rounded-pill px-4 py-2"
                >
                  Try Tomati &nbsp;
                  <ArrowRight />
                </Button>
              </Link>
              &nbsp;
              <ScrollLink smooth={true} duration={1000} to="works">
                <Button
                  size="md"
                  variant="secondary"
                  className="rounded-pill px-4 py-2"
                >
                  <span className="text-muted">How it Works</span>
                </Button>
              </ScrollLink>
              <div className="pt-4">
                <img src={Group1} className="img-fluid" width="700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

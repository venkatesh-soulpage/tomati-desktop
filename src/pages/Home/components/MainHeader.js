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
      <Card style={{ background: "#F5F6F9", border: "0" }}>
        <Card.Body className="text-center">
          <div
            style={{
              backgroundImage: `url(${Background})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <Card.Title className="container mt-5 display-4 fw-bold ">
              Create a Digital Menu for your bar/restaurant.
            </Card.Title>
            <Card.Text className="mt-4" style={{ fontSize: "20px" }}>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Card.Text className="mb-3" style={{ fontSize: "20px" }}>
              Instant Set-Up Free to try.
            </Card.Text>
          </div>
          <div className="w-50 mx-auto my-5">
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button variant="primary" className="jumbotron-buttons">
                Try Tomati &nbsp;
                <ArrowRight />
              </Button>
            </Link>
            &nbsp;
            <ScrollLink smooth={true} duration={1000} to="works">
              <Button variant="secondary" className="jumbotron-buttons">
                How it Works
              </Button>
            </ScrollLink>
          </div>

          <div className="pt-5">
            <img src={Group1} alt="group" className="img-fluid" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

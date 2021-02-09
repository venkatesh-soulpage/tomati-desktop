import React from "react";

// react-bootstrap
import { Card, CardDeck, Button } from "react-bootstrap";

// assets
import CardImage from "assets/img/CardImage.svg";

// react-router
import { Link } from "react-router-dom";

// react-scroll
import { Link as ScrollLink } from "react-scroll";

function MainSection() {
  return (
    <Card
      style={{
        border: "0",
        background: "#F5F6F9",
      }}
      className="my-5"
    >
      <Card.Body>
        <div className="container text-center mt-5 ">
          <h3 className="w-50 mb-5 p-2 mx-auto" style={{ fontSize: "30px" }}>
            Get 10 premium QR table tags for free when you upgrade to our growth
            plan
          </h3>

          <CardDeck style={{ background: "#F5F6F9", border: "0" }}>
            <Card style={{ minHeight: "400px", borderRadius: "15px" }}>
              <Card.Body className="">
                <h4 className="my-4 p-3">For Outlet Managers</h4>
                <small className="mt-3 p-3 mb-5">
                  {" "}
                  who want to reduce manpower cost and make the dine in
                  experience safer for guests with contactless menus and
                  payment.
                </small>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    className="mt-5 mb-3"
                    style={{ borderRadius: "28px", width: "50%" }}
                  >
                    Proceed
                  </Button>
                </Link>
                <Card.Text
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  <ScrollLink to="features">See Features</ScrollLink>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ minHeight: "400px", borderRadius: "15px" }}>
              <Card.Body className=" p-3">
                <h4 className="my-4 p-3">For Event Managers</h4>
                <small className="mt-3 p-3 mb-5">
                  {" "}
                  The easiest way to handle food or beverage orders and
                  payments. 100% contactless Auto-reconciliation Reports and
                  analytics
                </small>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    className="mt-5 mb-3"
                    style={{ borderRadius: "28px", width: "50%" }}
                  >
                    Proceed
                  </Button>
                </Link>
                <Card.Text
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  <ScrollLink to="features">See Features</ScrollLink>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ minHeight: "400px", borderRadius: "15px" }}>
              <Card.Body className="p-0">
                <div
                  style={{
                    backgroundImage: `url('${CardImage}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "100%",
                    borderRadius: "15px",
                  }}
                ></div>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MainSection;

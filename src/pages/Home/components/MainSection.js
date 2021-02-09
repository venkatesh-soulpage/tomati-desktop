import React from "react";

// react-bootstrap
import { Card, CardDeck, Button } from "react-bootstrap";

// assets
import CardImage from "assets/img/CardImage.svg";

function MainSection() {
  return (
    <Card style={{ background: "#F5F6F9", border: "0" }}>
      <Card.Body className="text-center p-0 mt-5 mb-5">
        <Card.Title
          className="container pt-5 pb-5 m-auto"
          style={{ fontSize: "36px" }}
        >
          Get 10 premium QR table tags for free when you upgrade to our growth
          plan
        </Card.Title>
        <div className="container">
          <CardDeck className="pb-5 mb-5">
            <Card className="pl-4">
              <Card.Title className=" p-4">For Outlet Managers</Card.Title>
              <Card.Body>
                who want to reduce manpower cost and make the dine in experience
                safer for guests with contactless menus and payment.
              </Card.Body>
              <Card.Text className="pt-4 pb-1">
                <Button
                  variant="primary"
                  className="jumbotron p-2 m-0"
                  style={{ borderRadius: "28px" }}
                >
                  Proceed
                </Button>
              </Card.Text>
              <Card.Text className="pb-5">See Features</Card.Text>
            </Card>
            <Card className="pl-4">
              <Card.Title className=" p-4">For Event Managers</Card.Title>
              <Card.Body>
                The easiest way to handle food or beverage orders and payments.
                100% contactless Auto-reconciliation Reports and analytics
              </Card.Body>
              <Card.Text className="pt-4 pb-1">
                <Button
                  variant="primary"
                  className="jumbotron p-2 m-0"
                  style={{ borderRadius: "28px" }}
                >
                  Proceed
                </Button>
              </Card.Text>
              <Card.Text className="pb-5">See Features</Card.Text>
            </Card>
            <Card>
              <div
                style={{
                  backgroundImage: `url('${CardImage}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "100%",
                  borderRadius: "15px",
                }}
              />
            </Card>
          </CardDeck>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MainSection;

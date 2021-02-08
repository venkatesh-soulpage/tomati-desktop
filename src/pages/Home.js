import React from "react";
// Bootstrap imports
import { Button, Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

function Home() {
  return (
    <div className="container-fluid bg-light p-0">
      <Card>
        <Card.Body className="text-center">
          <Card.Title>
            Create a Digital Menu for your bar/restaurant.
          </Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <div className="btn-container">
            <Button variant="primary" className="jumbotron-buttons">
              Try Tomati &nbsp;
              <ArrowRight />
            </Button>
            &nbsp;
            <Button variant="secondary" className="jumbotron-buttons">
              How it Works
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;

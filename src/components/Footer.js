import React from "react";
// react Bootstrap
import Button from "react-bootstrap/Button";
// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container text-center">
        <h6>Copyrights © 2019 Powered by Ivy Lender</h6>
        <p className="mb-0 mt-4">
          <Button variant="light" className="btn-icon mr-4">
            <FontAwesomeIcon icon={faFacebookF} />
          </Button>
          <Button variant="light" className="btn-icon mr-4">
            <FontAwesomeIcon icon={faTwitter} />
          </Button>
          <Button variant="light" className="btn-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

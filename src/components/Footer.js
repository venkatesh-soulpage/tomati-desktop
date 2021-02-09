// import React from "react";
// // react Bootstrap
// import Button from "react-bootstrap/Button";
// // font Awesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedin
// } from "@fortawesome/free-brands-svg-icons";

// function Footer(props) {
//   return (
//     <footer className="footer">
//       <div className="container text-center">
//         <h6>Copyrights © 2019 Powered by Ivy Lender</h6>
//         <p className="mb-0 mt-4">
//           <Button variant="light" className="btn-icon mr-4">
//             <FontAwesomeIcon icon={faFacebookF} />
//           </Button>
//           <Button variant="light" className="btn-icon mr-4">
//             <FontAwesomeIcon icon={faTwitter} />
//           </Button>
//           <Button variant="light" className="btn-icon">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </Button>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

import Logo2 from "assets/img/Logo2.svg";
import Envelop from "assets/img/Envelop.svg";
import telegram from "assets/img/telegram.svg";
import whatsapp from "assets/img/whatsapp.svg";
import Visalight from "assets/img/Visa-light.svg";
import Mastercard from "assets/img/MasterCard-light.svg";
import Maestro from "assets/img/Maestro-light.svg";
import Cirrus from "assets/img/Cirrus-light.svg";
import AmericanExpress from "assets/img/AmericanExpress-light.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const Footer = styled.div`
    background: #2c3a56;
    font-family: Poppins;
  `;

  const ListStyle = {
    display: "inline",
  };
  return (
    <div>
      <Footer>
        <div className="row p-0 m-0">
          <div className="col-8 mx-auto mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-8 col-12 ">
                    <img src={Logo2} alt="logo" className="img-fluid" />
                  </div>
                  <div className="col-12 mt-4 ">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>
                        Tomati.app is a ZontLabs OU product.{" "}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="col-12  mt-4 mt-md-0">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>Contact Us</small>
                    </p>
                  </div>
                  <div className="col-12 mt-4 mt-md-4">
                    <ul style={{ padding: 0 }}>
                      <li style={ListStyle}>
                        <a target="_blank" href="mailto:hello@tomati.app">
                          <Image src={Envelop} alt="icon" />
                        </a>
                      </li>
                      <li style={ListStyle}>
                        {" "}
                        <Image src={telegram} alt="icon" disabled />
                      </li>
                      <li style={ListStyle}>
                        <a
                          target="_blank"
                          href="https://wa.me/message/HGRXRF5QIYCWH1"
                        >
                          {" "}
                          <Image src={whatsapp} alt="icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="col-12  mt-4 mt-md-0">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>The Company</small>
                    </p>
                  </div>
                  <div className="col-12  mt-1 mt-md-3">
                    <p>
                      <small style={{ color: "#fff" }}>About</small>
                    </p>
                  </div>
                  <div className="col-12  mt-1 mt-md-3">
                    <p>
                      <small style={{ color: "#fff" }}>Careers</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="col-12  mt-4 mt-md-0">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>Legals</small>
                    </p>
                  </div>
                  <div className="col-12  mt-1 mt-md-3">
                    <Link to="/termspolicy" target="_top_blank">
                      <p>
                        <small style={{ color: "#fff" }}>Terms of Use</small>
                      </p>
                    </Link>
                  </div>
                  <div className="col-12  mt-1 mt-md-3">
                    <Link to="/privacypolicy" target="_top_blank">
                      <p>
                        <small style={{ color: "#fff" }}>Privacy Policy</small>
                      </p>
                    </Link>
                  </div>
                  {/* <div className="col-12 text-center mt-1 mt-md-3">
                    <p>
                      <small style={{ color: '#fff' }}>Cookies Policy</small>
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="col-12  mt-4 mt-md-0">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>Address</small>
                    </p>
                  </div>
                  <div className="col-10  mt-1 mt-md-0">
                    <p>
                      <small style={{ color: "#fff" }}>
                        Ahtri 12, 10151 Talinn, Estonia
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-8 mx-auto mt-5 mb-2"
            style={{ borderTop: "1px solid #C3CAD8" }}
          />
          <div className="col-8 mx-auto mt-3">
            <div className="row">
              <div className="col-12 text-md-left mt-1 mt-md-0">
                <p>
                  <small style={{ color: "#C3CAD8" }}>We accept</small>
                </p>
              </div>
              <div className="col-md-6 col-12 text-md-left mt-1 mt-md-2">
                <ul style={{ padding: 0 }}>
                  <li style={ListStyle}>
                    <Image src={Visalight} alt="icon" />
                  </li>
                  <li style={ListStyle}>
                    {" "}
                    <Image src={Mastercard} alt="icon" />
                  </li>
                  <li style={ListStyle}>
                    {" "}
                    <Image src={Maestro} alt="icon" />
                  </li>
                  <li style={ListStyle}>
                    {" "}
                    <Image src={Cirrus} alt="icon" />
                  </li>
                  <li style={ListStyle}>
                    {" "}
                    <Image src={AmericanExpress} alt="icon" />
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-12 text-right mt-1 mt-md-0">
                <p style={{ color: "#C3CAD8" }}>
                  Copyright © 2021 Adobe. All rights reserved.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Footer;

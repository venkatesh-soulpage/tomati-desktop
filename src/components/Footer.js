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
                  <div className="col-md-8 col-12 text-center text-md-left ">
                    <img src={Logo2} alt="logo" className="img-fluid" />
                  </div>
                  <div className="col-12 mt-4 text-center text-md-left ">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>
                        Tomati.app is a ZontLabs OÜ product.{" "}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="col-12  mt-4 mt-md-0 text-center text-md-left">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>Contact Us</small>
                    </p>
                  </div>
                  <div className="col-12 mt-4 mt-md-4 text-center text-md-left">
                    <ul style={{ padding: 0 }}>
                      <li style={ListStyle}>
                        <a
                          style={{ textDecoration: "none" }}
                          target="_blank"
                          href="mailto:hello@tomati.app"
                        >
                          <Image src={Envelop} alt="icon" />
                        </a>
                      </li>
                      <li className="ml-2" style={ListStyle}>
                        <Image src={telegram} alt="icon" disabled />
                      </li>
                      <li className="ml-2" style={ListStyle}>
                        <a
                          target="_blank"
                          href="https://wa.me/message/HGRXRF5QIYCWH1"
                          style={{ textDecoration: "none" }}
                        >
                          <Image src={whatsapp} alt="icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-center text-md-left">
                <div className="row">
                  <div className="col-12  mt-4 mt-md-0">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>The Company</small>
                    </p>
                  </div>
                  <div className="col-12 mt-md-1">
                    <p>
                      <small className="text-white">About</small>
                    </p>
                  </div>
                  <div className="col-12 mt-md-1">
                    <p>
                      <small className="text-white">Careers</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-center text-md-left">
                <div className="row">
                  <div className="col-12 mt-3 mt-md-0">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>Legals</small>
                    </p>
                  </div>
                  <div className="col-12 mt-md-1">
                    <Link to="/termspolicy" target="_top_blank">
                      <p>
                        <small className="text-white">Terms of Use</small>
                      </p>
                    </Link>
                  </div>
                  <div className="col-12  mt-md-1">
                    <Link to="/privacypolicy" target="_top_blank">
                      <p>
                        <small className="text-white">Privacy Policy</small>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-center text-md-left">
                <div className="row">
                  <div className="col-12  mt-3 mt-md-0">
                    <p>
                      <small style={{ color: "#C3CAD8" }}>Address</small>
                    </p>
                  </div>
                  <div className="col-12  mt-1 mt-md-0">
                    <p>
                      <small className="text-white">
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
          <div className="col-md-8 mx-auto mt-3 pb-4 text-center text-md-left">
            <div className="row">
              <div className="col-12 text-md-left mt-1 mt-md-0">
                <p>
                  <small style={{ color: "#C3CAD8" }}>We accept</small>
                </p>
              </div>
              <div className="col-md-6 col-12 text-md-left mt-1 mt-md-2">
                <ul style={{ padding: 0 }}>
                  <li style={ListStyle}>
                    <Image className="mr-2" src={Visalight} alt="icon" />
                  </li>
                  <li style={ListStyle}>
                    <Image className="mr-2" src={Mastercard} alt="icon" />
                  </li>
                  <li style={ListStyle}>
                    <Image className="mr-2" src={Maestro} alt="icon" />
                  </li>
                  <li style={ListStyle}>
                    <Image className="mr-2" src={Cirrus} alt="icon" />
                  </li>
                  <li style={ListStyle}>
                    <Image className="mr-2" src={AmericanExpress} alt="icon" />
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-12 text-md-right text-center mt-1 mt-md-0">
                <p style={{ color: "#C3CAD8" }}>
                  Copyright © 2021 ZontLabs OÜ. All rights reserved.{" "}
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

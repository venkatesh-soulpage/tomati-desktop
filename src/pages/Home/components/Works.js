import React from "react";
// react-bootstrap
import { Card, CardDeck } from "react-bootstrap";

// assets
import MetroQR from "assets/img/metro-qrcode.svg";
import fileIcon from "assets/img/fileIcon.svg";
import BillIcon from "assets/img/BillIcon.svg";

import Component1 from "assets/img/club-images/Component 14 – 1.png";
import Component2 from "assets/img/club-images/Component 15 – 1.png";
import Component3 from "assets/img/club-images/Component 16 – 1.png";
import img6 from "assets/img/club-images/img6.png";
import img7 from "assets/img/club-images/img7.png";
import img8 from "assets/img/club-images/img8.png";
import img9 from "assets/img/club-images/img9.png";
import img10 from "assets/img/club-images/img10.png";

const ClubImages = {
  width: "100px",
  height: "100px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  margin: "5px  ",
};

function Works() {
  return (
    <Card
      style={{
        marginTop: "-300px",
        border: "0",
        borderTopLeftRadius: "10%",
        borderTopRightRadius: "10%",
      }}
      className="pb-5"
      id="works"
    >
      <Card.Body>
        <div className="container text-center mt-5 ">
          <h3 className=" mb-5 p-2" style={{ fontSize: "30px" }}>
            It's as easy as 1,2,3
          </h3>
          <CardDeck>
            <Card style={{ minHeight: "350px" }}>
              <Card.Body className="d-flex p-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="border border-danger rounded-circle "
                    style={{
                      backgroundImage: `url(${MetroQR})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "100px",
                      width: "100px",
                    }}
                  />

                  <span
                    className=" mt-3 "
                    style={{ fontSize: "22px", textAlign: "left" }}
                  >
                    Scan Menu
                    <br /> QR code
                  </span>
                </div>
                <div className="ml-auto">
                  <span className="display-4 text-secondary">01</span>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ minHeight: "350px" }}>
              <Card.Body className="d-flex p-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="border border-danger rounded-circle "
                    style={{
                      backgroundImage: `url(${fileIcon})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "100px",
                      width: "100px",
                    }}
                  />

                  <span
                    className=" mt-3 "
                    style={{ fontSize: "22px", textAlign: "left" }}
                  >
                    Browse menu and place order
                  </span>
                </div>
                <div className="ml-auto">
                  <span className="display-4 text-secondary">02</span>
                </div>
              </Card.Body>
            </Card>

            <Card style={{ minHeight: "350px" }}>
              <Card.Body className="d-flex p-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="border border-danger rounded-circle "
                    style={{
                      backgroundImage: `url(${BillIcon})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "100px",
                      width: "100px",
                    }}
                  />

                  <span
                    className=" mt-3 "
                    style={{ fontSize: "22px", textAlign: "left" }}
                  >
                    Pay the bill as soon as you are ready
                  </span>
                </div>
                <div className="ml-auto">
                  <span className="display-4 text-secondary ">03</span>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>
          <div className="p-0 m-0 pt-5 mt-5 mb-5" style={{ fontSize: "24px" }}>
            Join the digital menu club
          </div>
          <CardDeck className="justify-content-center m-0 mb-5">
            <div
              style={{ ...ClubImages, backgroundImage: `url(${Component1})` }}
            />
            <div
              style={{ ...ClubImages, backgroundImage: `url(${Component2})` }}
            />
            <div
              style={{ ...ClubImages, backgroundImage: `url(${Component3})` }}
            />
            <div style={{ ...ClubImages, backgroundImage: `url(${img6})` }} />
            <div style={{ ...ClubImages, backgroundImage: `url(${img7})` }} />
            <div style={{ ...ClubImages, backgroundImage: `url(${img8})` }} />
            <div style={{ ...ClubImages, backgroundImage: `url(${img8})` }} />
            <div style={{ ...ClubImages, backgroundImage: `url(${img9})` }} />
            <div style={{ ...ClubImages, backgroundImage: `url(${img10})` }} />
          </CardDeck>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Works;

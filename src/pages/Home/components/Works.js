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

function Works() {
  const ImagesList = [
    Component1,
    Component2,
    Component3,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  return (
    <div>
      <Card className="pb-5 how-it-works-section curve-border" id="works">
        <Card.Body className="px-5 px-md-0">
          <div className="container text-center mt-5 ">
            <h3 className=" mb-5 p-2 section-header">It's as easy as 1,2,3</h3>
            <CardDeck>
              <Card style={{ minHeight: "350px", borderRadius: "28px" }}>
                <Card.Body className="d-flex p-3">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginLeft: "20px",
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
                    <span className="display-4 text-light-card text-light-card font-weight-bold">
                      01
                    </span>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ minHeight: "350px", borderRadius: "28px" }}>
                <Card.Body className="d-flex p-3">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginLeft: "20px",
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
                    <span className="display-4 text-light-card font-weight-bold">
                      02
                    </span>
                  </div>
                </Card.Body>
              </Card>

              <Card style={{ minHeight: "350px", borderRadius: "28px" }}>
                <Card.Body className="d-flex p-3">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginLeft: "20px",
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
                      className="mt-3"
                      style={{ fontSize: "22px", textAlign: "left" }}
                    >
                      Pay the bill as soon as you are ready
                    </span>
                  </div>
                  <div className="ml-auto">
                    <span className="display-4 text-light-card font-weight-bold">
                      03
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </CardDeck>
            <div className="p-0 m-0 pt-5 mt-5 mb-5 section-card-header">
              Join the digital menu club
            </div>

            <div
              className="d-flex d-md-none"
              style={{
                overflowX: "scroll",
              }}
            >
              {ImagesList.map((image, index) => {
                return (
                  <>
                    <img
                      key={index}
                      src={image}
                      className="img-fluid mr-4"
                      height="auto"
                      // style={{ backgroundImage: `url(${image})` }}
                    />
                  </>
                );
              })}
            </div>
            <div className="d-none d-md-flex justify-content-center">
              {ImagesList.map((image, index) => {
                return (
                  <>
                    <div
                      className="club-images "
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Works;

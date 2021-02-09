import React from "react";
// Bootstrap imports
import { Button, Card, CardDeck } from "react-bootstrap";
// bootstrap-icons
import { ArrowRight } from "react-bootstrap-icons";
import Background from "../../../assets/img/Background.svg";
import Group1 from "../../../assets/img/Group1.svg";
import MetroQR from "../../../assets/img/metro-qrcode.svg";
import fileIcon from "../../../assets/img/fileIcon.svg";
import BillIcon from "../../../assets/img/BillIcon.svg";
import CardImage from "../../../assets/img/CardImage.svg";
import img1 from "../../../assets/img/Component 14 – 1.png";
import img3 from "../../../assets/img/Component 15 – 1.png";
import img4 from "../../../assets/img/Component 16 – 1.png";
import img5 from "../../../assets/img/Component 17 – 1.png";
import img6 from "../../../assets/img/img6.png";
import img7 from "../../../assets/img/img7.png";
import img8 from "../../../assets/img/img8.png";
import img9 from "../../../assets/img/img9.png";
import img10 from "../../../assets/img/img10.png";
import ThirdPage from "components/ThirdPage";
import FAQ from "components/FAQ";
import Footer from "components/Footer";

export default function MainHeader() {
  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <div
            style={{
              backgroundImage: `url(${Background})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            {/* font-size: 48px font-weight: Bold line-height: 60px color: #2C3A56 margin-top : 200px */}
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
          <div className="btn-container pt-5 mb-5">
            <Button variant="primary" className="jumbotron-buttons">
              Try Tomati &nbsp;
              <ArrowRight />
            </Button>
            &nbsp;
            <Button variant="secondary" className="jumbotron-buttons">
              How it Works
            </Button>
          </div>
          <div className="pt-5">
            <img src={Group1} alt="group" className="img-fluid" />
          </div>
        </Card.Body>
      </Card>

      <Card style={{ marginTop: "-300px" }} className="pb-5">
        <Card.Body className="text-center">
          {/* font-size: 48px font-weight: Bold line-height: 60px color: #2C3A56 margin-top : 200px */}
          <Card.Title className="pt-5 pb-5 " style={{ fontSize: "36px" }}>
            It's as easy as 1,2,3
          </Card.Title>
          <div className="container">
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
                  <div>
                    <span className="display-4 text-secondary ml-auto">01</span>
                  </div>
                </Card.Body>
              </Card>
              <Card>
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
                  <div>
                    <span className="display-4 text-secondary ml-auto">02</span>
                  </div>
                </Card.Body>
              </Card>

              <Card>
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
                  <div>
                    <span className="display-4 text-secondary ml-auto">03</span>
                  </div>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <Card.Text className="pt-5 pb-5" style={{ fontSize: "24px" }}>
            Join the digital menu club
          </Card.Text>
          <div className="d-flex justify-content-center">
            <CardDeck>
              <img src={img1} className="pt-4 pl-4" />
              <img src={img10} className="pt-4 pl-4" />
              <img src={img6} className="pt-4 pl-4" />
              <img src={img7} className="pt-4 pl-4" />
              <img src={img8} className="pt-4 pl-4" />
              <img src={img9} className="pt-4 pl-4" />
              <img src={img3} className="pt-4 pl-4" />
              <img src={img4} className="pt-4 pl-4" />
              <img src={img5} className="pt-4 pl-4 pr-4" />
            </CardDeck>
          </div>
        </Card.Body>
      </Card>
      <Card.Body className="text-center">
        {/* font-size: 48px font-weight: Bold line-height: 60px color: #2C3A56 margin-top : 200px */}
        <Card.Title className="pt-5 pb-5 " style={{ fontSize: "36px" }}>
          Get 10 premium QR table tags for free
          <br />
          when you upgrade to our growth plan
        </Card.Title>
        <div className="container">
          <CardDeck>
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
      <Card>
        <ThirdPage />
      </Card>
      <Card>
        <FAQ />
      </Card>
    </>
  );
}

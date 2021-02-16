import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

function BankTransferModal({ props, hide, setHide, handlePayment, radio }) {
  const urlEncode = function (data) {
    var str = [];
    for (var p in data) {
      if (
        data.hasOwnProperty(p) &&
        !(data[p] == undefined || data[p] == null)
      ) {
        str.push(
          encodeURIComponent(p) +
            "=" +
            (data[p] ? encodeURIComponent(data[p]) : "")
        );
      }
    }
    return str.join("&");
  };

  const handleCheckout = () => {
    window.Chargebee.init({
      site: "soulpageit-test",
    }).openCheckout({
      hostedPage() {
        return axios
          .post(
            "http://localhost:3000/api/payment",
            urlEncode({ plan: "growth" })
          )
          .then((response) => {
            console.log("RESPONSE\n", response);
            return response.data;
          });
      },
      success(hostedPageId) {
        console.log(hostedPageId);
      },
      close() {
        handlePayment();
        console.log("checkout new closed");
      },
      step(step) {
        console.log("checkout", step);
      },
    });
  };
  const createId = (length) => {
    let result = "";
    const characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  return (
    <div>
      <Modal
        size="xs"
        show={hide}
        onHide={() => setHide(false)}
        className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Bank Transfer</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflow: "hidden" }}>
          <div className="row pt-0 p-3 ">
            <div className="col-12">
              <h6>
                <small style={{ color: "#CCBC2D" }}>Reference Code</small>
              </h6>
            </div>
            <div
              className="col-12 p-1"
              style={{
                border: "1px solid #E5E283",
                borderRadius: 5,
                background: "#FFFFF3",
                color: "#8B7E0D",
              }}
            >
              <p style={{ color: "#8B7E0D", padding: "5px", margin: 0 }}>
                {createId(6)}
              </p>
            </div>
            <div className="col-12 mt-2">
              <h6>
                <small>
                  Please quote this code in your transfer reference, to make
                  sure we can find your payment
                </small>
              </h6>
            </div>
            <div
              className="col-12 "
              style={{ borderTop: "1px solid #F5F6F9" }}
            />
            <div className="col-12 mt-2 p-0 ml-2 ">
              <p style={{ color: "#2C3A56" }}>Account Details</p>
            </div>
            <div
              className="col-12 ml-2 p-3"
              style={{
                background: "#F5F6F9",
                borderRadius: 5,
                color: "#2C3A56",
              }}
            >
              <p>Liquid Intel LTD</p>
              <p>1018881300</p>
              <p>Zenith Bank</p>
            </div>
            <div className="col-12 p-2 text-center">
              <h6>
                <small>Click this button once you have made the transfer</small>
              </h6>
            </div>
            <div className="col-12">
              <Button
                style={{
                  borderRadius: 24,
                  background: "#E0475B",
                  color: "#fff",
                }}
                block
                // onClick={() => {
                //   // handlePayment();

                //   setHide(false);
                // }}
                onClick={() => {
                  if (radio === "Card") {
                    handleCheckout();
                  } else {
                    handlePayment();
                    setHide(false);
                  }
                }}
              >
                Confirm transfer
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BankTransferModal;

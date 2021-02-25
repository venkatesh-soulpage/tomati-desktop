import React from "react";
import Modal from "react-bootstrap/Modal";
import Success from "assets/img/Success.svg";
import { TOMATI_DESKTOP_URL } from "constants/APIRoutes";
import CustomModal from "components/CustomModal";

function LoginModal({ show, setShow, handleLoginData }) {
  return (
    <div>
      <CustomModal
        show={show}
        onHide={() => setShow(false)}
        message={
          <div className="row pt-0 p-3 ">
            <div className="col-12 text-center mt-4">
              <img className="img-fluid mt-3" src={Success} alt="icon" />
            </div>
            <div className="col-12 mt-3">
              <h5 className="text-center">Wasn't that so easy? </h5>
            </div>
            <div classsName="col-12 mt-3 text-center">
              <p className="text-center">
                Please Login to Tomati Desktop to manage your account.
              </p>
            </div>
          </div>
        }
        button={
          <div className="col-12 mt-3 text-center">
            <a target="_blank" href={TOMATI_DESKTOP_URL}>
              <button
                className="btn btn-light mt-3"
                style={{
                  borderRadius: "30px",
                  width: "140px",
                  height: "54px",
                  border: "0.5px solid black",
                  // backgroundColor: "transparent",
                }}
                // onClick={handleLoginData}
              >
                Login
              </button>
            </a>
          </div>
        }
      />
    </div>
  );
}

export default LoginModal;

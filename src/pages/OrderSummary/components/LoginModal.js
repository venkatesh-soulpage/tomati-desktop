import React from "react";
import Modal from "react-bootstrap/Modal";
import Success from "assets/img/Success.svg";
function LoginModal({ show, setShow, handleLoginData }) {
  console.log(show);
  return (
    <div>
      <Modal
        size="xs"
        show={show}
        onHide={() => setShow(false)}
        className="mt-5"
      >
        {" "}
        <Modal.Header>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body style={{ overflow: "hidden" }}>
          <div className="row pt-0 p-3 ">
            <div className="col-12 text-center mt-4">
              <img className="img-fluid mt-3" src={Success} alt="icon" />
            </div>
            <div className="col-12 mt-3">
              <h5 className="text-center">Wasn't that so easy? </h5>
            </div>
            <div classsName="col-12 mt-3 text-center">
              <p className="text-center">
                Now sit back and relax while we get your account set up.
              </p>
            </div>
            <div className="col-12 mt-3 text-center">
              <button
                className="btn btn-light mt-3"
                style={{
                  borderRadius: "30px",
                  width: "140px",
                  height: "54px",
                  border: "0.5px solid black",
                  // backgroundColor: "transparent",
                }}
                onClick={handleLoginData}
              >
                Login
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;

import React from "react";
import { downloadQr } from "utils/helper";

const QR = ({ event }) => {
  console.log(event);
  return (
    <div className="card bg-white border p-5 mt-2">
      <div className="d-flex align-items-center">
        <div className="mr-5">
          <img
            className="border"
            src={event?.menu_link}
            height="204px"
            width="204px"
            id="menu-qr"
          />
        </div>
        <div className="mr-auto">
          <h4 className="text-dark">{event?.name}</h4>
          <p className="text-dark font-weight-light">{event?.description}</p>

          <button
            disabled={!event?.qr_isActive}
            className="btn btn-danger mr-3 rounded-pill"
            onClick={() => downloadQr(event.name)}
            style={{ cursor: "not-allowed" }}
          >
            Download QR Code
          </button>

          <button className="btn btn-outline-dark rounded-pill ">
            Order Menu tags
          </button>
        </div>
      </div>
    </div>
  );
};

export default QR;

import React from "react";
import { downloadQr } from "utils/helper";

const QR = ({ outlet }) => {
  return (
    <div className="card bg-white border p-5 mt-2">
      <div className="d-flex align-items-top">
        <div className="mr-5">
          <img
            className="border"
            src={outlet && outlet.menu_link}
            height="204px"
            width="204px"
            id="menu-qr"
          />
        </div>
        <div className="mr-auto">
          <h4 className="text-dark">{outlet && outlet.name}</h4>
          <p className="text-dark font-weight-light w-56">
            {outlet && outlet.description}
          </p>
          <button
            className="btn btn-danger mr-3 mt-1 rounded-pill"
            onClick={() => downloadQr(outlet.name)}
          >
            Download QR Code
          </button>
          <button className="btn btn-outline-dark mt-1 px-4 rounded-pill ">
            Order Menu tags
          </button>
        </div>
      </div>
    </div>
  );
};

export default QR;

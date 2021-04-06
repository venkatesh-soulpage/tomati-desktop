import React from "react";
import { getImgFromUrl, generatePDF } from "utils/helper";
import { CSV_TEMPLATE_URL } from "constants/APIRoutes";

const QR = ({ outlet }) => {
  return (
    <div className="card bg-white border p-5 mt-2">
      <div className="d-flex align-items-top">
        <div className="mr-5">
          <img
            alt="menu-qr"
            className="border"
            src={outlet?.menu_link}
            height="204px"
            width="204px"
            id="menu-qr"
          />
        </div>
        <div className="mr-auto">
          <h4 className="text-dark">{outlet?.name}</h4>
          <p className="text-dark font-weight-light w-56">
            {outlet?.description}
          </p>
          <button
            className="btn btn-danger mr-3 mt-1 rounded-pill"
            onClick={() =>
              getImgFromUrl(outlet, function (img, name, formattedName) {
                generatePDF(img, name, formattedName);
              })
            }
          >
            Download QR Code
          </button>
          <a
            className="a-link btn btn-outline-dark mt-1 px-4 rounded-pill"
            href={CSV_TEMPLATE_URL}
          >
            Menu Template
          </a>
        </div>
      </div>
    </div>
  );
};

export default QR;

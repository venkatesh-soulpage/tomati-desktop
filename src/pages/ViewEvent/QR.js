import React from "react";

const QR = ({ event }) => {
  return (
    <div className="card bg-white border p-5 mt-2">
      <div className="d-flex align-items-center">
        <div className="mr-5">
          <img
            className="border"
            src={event && event.menu_link}
            height="204px"
            width="204px"
          />
        </div>
        <div className="mr-auto">
          <h4 className="text-dark">{event && event.name}</h4>
          <p className="text-dark font-weight-light">
            {event && event.description}
          </p>
          <button className="btn btn-danger mr-3 rounded-pill">
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

import React from "react";
import { getImgFromUrl, generatePDF } from "utils/helper";
import CsvDownload from "react-json-to-csv";
import { Download } from "@styled-icons/fa-solid";
import _ from "lodash";

const QR = ({ outlet }) => {
  const menu_data = _.map(outlet.menu, (data) =>
    _.pick(data, [
      "name",
      "price",
      "description",
      "actual_name",
      "outlet_category",
      "product_category",
      "menu_category",
      "product_type",
    ])
  );

  return (
    <>
      <div className="card bg-white border mt-3 p-5">
        <div className="row  ">
          <div className="col-md-5 text-center ">
            <img
              alt="menu-qr"
              className="border"
              src={outlet?.menu_link}
              height="204px"
              width="204px"
              id="menu-qr"
            />
            <button
              className="btn btn-danger mr-3 mt-1 rounded-pill mt-2 mx-auto d-flex align-items-center"
              onClick={() =>
                getImgFromUrl(outlet, function (img, name, formattedName) {
                  generatePDF(img, name, formattedName);
                })
              }
            >
              <Download className="mx-2 " style={{ height: "20px" }} />
              Your QR Code <small>.PDF</small>
            </button>
          </div>
          <div className="col-md-7 p-0">
            <h4 className="text-dark">{outlet?.name}</h4>
            <p className="text-dark font-weight-light w-56">
              {outlet?.description}
            </p>
            <div className="d-flex justify-content-between">
              <CsvDownload
                className=" btn btn-danger mt-1 rounded-pill d-flex align-items-center"
                data={menu_data}
                filename={`${outlet.name}.csv`}
              >
                <Download className="mx-2" style={{ height: "20px" }} />
                Current Menu <small>.CSV</small>
              </CsvDownload>
              <button className="btn btn-outline-dark mt-1 px-4 rounded-pill ">
                Order Menu Tags
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QR;

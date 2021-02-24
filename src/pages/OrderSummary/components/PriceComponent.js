import React from "react";
import { Dash, Plus, CheckCircle } from "react-bootstrap-icons";
function PriceComponent({
  header,
  description,
  no_of_items,
  handleChange,
  price,
}) {
  return (
    <div>
      <p className="mb-0">{header}</p>

      <p className="m-0 font-weight-light">{description}</p>

      <div className="row">
        <div
          className="col-6 ml-3 mt-3"
          style={{
            border: "1px solid #C3CAD8",
            borderRadius: 5,
          }}
        >
          <div className="row">
            <div
              className="col-6 p-2"
              style={{ borderRight: "1px solid #C3CAD8" }}
            >
              <h6 className="font-weight-normal m-0 mt-1 text-center">
                {no_of_items}
              </h6>
            </div>

            <div
              className="col-3 p-2 text-center"
              style={{ borderRight: "1px solid #C3CAD8" }}
            >
              <Dash
                // onClick={handleChange("minus")}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="col-3 p-2 text-center">
              <Plus
                // onClick={handleChange("plus")}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div className="col-5 mt-3 p-2">
          <h6 className="text-center text-dark">
            <small
              style={{
                color: "#2C3A56",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              $ {price}
            </small>
          </h6>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default PriceComponent;

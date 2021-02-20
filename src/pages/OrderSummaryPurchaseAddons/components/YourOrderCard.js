import React from "react";
import { Dash, Plus, CheckCircle } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import {
  // userRegistration,
  // userLogin,
  // getPlansRequest,
  // getLocationRegister,
  postDiscountValue,
  resetMessage,
} from "_actions/auth";
import _, { values } from "lodash";
import PriceComponent from "./PriceComponent";
function YourOrderCard({
  props,
  activePlan,
  handleActivePlan,
  userValues,
  handleOutlet,
  outletPrice,
  handleQr,
  qrPrice,
  handleUsers,
  userPrice,
  handleEvent,
  eventPrice,
  discount_value,
  discountValue,
  setDiscountValue,
  subTotal,
  tax,
  total,
  plan_id,
}) {
  const no_of_outlets =
    "outletaddons" in userValues
      ? userValues?.outletaddons
      : props?.auth?.user?.no_of_outlets;
  const no_of_qrs =
    "qraddons" in userValues
      ? userValues?.qraddons
      : props?.auth?.user?.no_of_qrcodes;
  const no_of_users =
    "useraddons" in userValues
      ? userValues?.useraddons
      : props?.auth?.user?.no_of_users;
  const no_of_events =
    "eventaddons" in userValues
      ? userValues?.eventaddons
      : props?.auth?.user?.no_of_events;

  return (
    <div>
      <div className="card px-3 py-3">
        <h5 className="font-weight-normal mb-3">Your Order</h5>

        <p>Plan</p>

        <select className="form-control pl-3">
          {/* <option value="">Select Plan</option> */}
          {props?.auth?.plans?.map((plan) => {
            if (plan.id === plan_id) {
              return <option value={plan.id}>{plan.plan}</option>;
            }
          })}
        </select>

        <hr />

        <div>
          <PriceComponent
            header={"Number of outlets"}
            description={
              "A location that requires a separate menu and/or QR Code"
            }
            no_of_items={no_of_outlets}
            handleChange={handleOutlet}
            price={outletPrice}
          />
          <PriceComponent
            header={"QR Menu Tags?"}
            description={""}
            no_of_items={no_of_qrs}
            handleChange={handleQr}
            price={qrPrice}
          />
          <PriceComponent
            header={"Number of Users"}
            description={""}
            no_of_items={no_of_users}
            handleChange={handleUsers}
            price={userPrice}
          />
          <PriceComponent
            header={"Number of Events"}
            description={""}
            no_of_items={no_of_events}
            handleChange={handleEvent}
            price={eventPrice}
          />
        </div>

        <div className=" pt-1  border-bottom">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Discount code                        Optional"
              value={discountValue}
              onChange={(e) => {
                setDiscountValue(e.target.value);
              }}
              onBlur={() => {
                props.dispatch(
                  postDiscountValue({ discount_code: discountValue })
                );
                props.dispatch(resetMessage());
              }}
            />
          </Form.Group>
          {props.auth.discountVal ? (
            <Form.Group
              className="d-flex flex-row justify-content-between align-text-center my-3 "
              style={{ background: "#F5F6F9" }}
            >
              <p style={{ fontSize: "14px", fontWeight: "400", margin: 0 }}>
                Discount value applied
              </p>
              <p style={{ fontSize: "14px", margin: 0 }}>₦ {discount_value}</p>
            </Form.Group>
          ) : props?.auth?.discountValError ? (
            <Form.Group
              className="d-flex flex-row justify-content-between align-items-center my-3"
              style={{ background: "#F5F6F9" }}
            >
              <p style={{ fontSize: "14px", color: "#E0475B", margin: 0 }}>
                Invalid Discount Code
              </p>
            </Form.Group>
          ) : null}
        </div>
        <div className="col-12 mt-1">
          <h6 className="text-right">
            <small style={{ fontSize: "16px" }}>
              Sub Total:{" "}
              <small
                style={{
                  color: "#2C3A56",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                $ {subTotal}
              </small>
            </small>
          </h6>
        </div>
        <div className="col-12 mt-2">
          <h6 className="text-right">
            <small style={{ fontSize: "16px" }}>
              Tax:{" "}
              <small style={{ color: "#2C3A56", fontWeight: "bold" }}>
                $ {tax}
              </small>{" "}
            </small>
          </h6>
        </div>
        <div className="col-12 mt-0">
          <h6 className="text-right">
            <small style={{ fontSize: "16px" }}>
              Total:{" "}
              <small
                style={{
                  color: "#2C3A56",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                $ {total}
              </small>
            </small>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default YourOrderCard;

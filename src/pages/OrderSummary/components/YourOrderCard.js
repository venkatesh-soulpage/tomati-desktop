import React from "react";
import Form from "react-bootstrap/Form";
import { postDiscountValue, resetDiscountMessage } from "_actions/auth";
import _ from "lodash";
import PriceComponent from "./PriceComponent";
import { QR_CODE_IMAGE } from "constants/APIRoutes";

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
      : activePlan?.outlet_limit;
  const no_of_qrs =
    "qraddons" in userValues ? userValues?.qraddons : activePlan?.qr_tags_limit;
  const no_of_users =
    "useraddons" in userValues
      ? userValues?.useraddons
      : activePlan?.user_limit;
  const no_of_events =
    "eventaddons" in userValues
      ? userValues?.eventaddons
      : activePlan?.event_limit;

  return (
    <div>
      <div className="card px-3 py-3">
        <h5 className="font-weight-normal mb-3">Your Order</h5>

        <p>Plan</p>

        <select onChange={handleActivePlan} className="form-control pl-3">
          {/* <option value="">Select Plan</option> */}
          {props?.auth?.plans?.map((plan, key) => {
            if (plan.plan === "starter") {
              return (
                <option key={key} value={plan.id}>
                  Starter - Free Forever
                </option>
              );
            } else if (plan.plan === "growth-monthly") {
              return (
                <option key={key} value={plan.id}>
                  Growth-30 days
                </option>
              );
            } else if (plan.plan === "premium-monthly") {
              return (
                <option key={key} value={plan.id}>
                  Premium-30 days
                </option>
              );
            } else if (plan.plan === "growth-yearly") {
              return (
                <option key={key} value={plan.id}>
                  Growth-365 days
                </option>
              );
            } else if (plan.plan === "premium-yearly") {
              return (
                <option key={key} value={plan.id}>
                  Premium-365 days
                </option>
              );
            }
          })}
        </select>

        <hr />

        <div>
          <PriceComponent
            header={"Number of outlets"}
            description={
              "An outlet is a restaurant or bar in a fixed location that requires its own unique QR code."
            }
            no_of_items={no_of_outlets}
            handleChange={handleOutlet}
            price={outletPrice}
          />
          <PriceComponent
            header={"QR Menu Tags"}
            description={
              <div>
                Premium waterproof self-adhesive QR codes for your tables.
                <a target="_blank" href={QR_CODE_IMAGE}>
                  See Image
                </a>
              </div>
            }
            no_of_items={no_of_qrs}
            handleChange={handleQr}
            price={qrPrice}
          />
          <PriceComponent
            header={"Number of Users"}
            description={
              "buy extra seats for collaborators here including waiters, cashiers and floor managers"
            }
            no_of_items={no_of_users}
            handleChange={handleUsers}
            price={userPrice}
          />
          <PriceComponent
            header={"Number of Events"}
            description={"An event is a restaurant or bar with an expiry date"}
            no_of_items={no_of_events}
            handleChange={handleEvent}
            price={eventPrice}
          />
        </div>

        <div className=" pt-1  border-bottom">
          <Form.Group
            className="d-flex justify-content-between"
            style={{ border: "1px solid #C3CAD8" }}
          >
            <Form.Control
              type="text"
              placeholder="Discount code(Optional)"
              value={discountValue}
              className="border-0"
              onChange={(e) => {
                setDiscountValue(e.target.value);
                props.dispatch(resetDiscountMessage());
              }}
              onBlur={() => {
                props.dispatch(resetDiscountMessage());
              }}
            />
            <button
              type="button"
              onClick={() => {
                props.dispatch(postDiscountValue(discountValue));
              }}
              className="btn border-left"
              style={{
                backgroundColor: "transparent",
              }}
            >
              Apply
            </button>
          </Form.Group>

          {props.auth.discountVal ? (
            <Form.Group
              className="d-flex flex-row justify-content-between align-text-center my-3 "
              style={{ background: "#F5F6F9" }}
            >
              <p style={{ fontSize: "14px", fontWeight: "400", margin: 0 }}>
                Discount value applied
              </p>
              <p style={{ fontSize: "14px", margin: 0 }}>$ {discount_value}</p>
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

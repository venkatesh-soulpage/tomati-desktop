import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { postDiscountValue, resetDiscountMessage } from "_actions";
import _ from "lodash";
import * as Function from "../functions";
import PriceComponent from "./PriceComponent";
import { QR_CODE_IMAGE } from "constants/APIRoutes";

function YourOrderCard(props) {
  const [show, setShow] = useState(false);
  const no_of_outlets =
    "outletaddons" in props.userValues
      ? props.userValues?.outletaddons
      : props.activePlan?.outlet_limit;
  const no_of_qrs =
    "qraddons" in props.userValues
      ? props.userValues?.qraddons
      : props.activePlan?.qr_tags_limit;
  const no_of_users =
    "useraddons" in props.userValues
      ? props.userValues?.useraddons
      : props.activePlan?.user_limit;
  const no_of_events =
    "eventaddons" in props.userValues
      ? props.userValues?.eventaddons
      : props.activePlan?.event_limit;

  return (
    <div>
      <div className="card px-3 py-3">
        <h5 className="font-weight-normal mb-3">Your Order</h5>

        <p>Plan</p>

        <select
          onChange={Function.handleActivePlan({
            setActivePlan: props.setActivePlan,
            setUserValues: props.setUserValues,
            props: props.props,
          })}
          className="form-control pl-3"
        >
          {/* <option value="">Select Plan</option> */}
          {props.props?.order?.plans?.map((plan, key) => {
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
            handleChange={Function.handleOutlet}
            price={props.outletPrice}
            userValues={props.userValues}
            setUserValues={props.setUserValues}
            activePlan={props.activePlan}
          />
          <PriceComponent
            header={"QR Menu Tags"}
            description={
              <div>
                Premium waterproof self-adhesive QR codes for your tables.{" "}
                <a
                  style={{ color: "#0645AD", cursor: "pointer" }}
                  onClick={() => setShow(true)}
                >
                  see image
                </a>
              </div>
            }
            no_of_items={no_of_qrs}
            handleChange={Function.handleQr}
            price={props.qrPrice}
            userValues={props.userValues}
            setUserValues={props.setUserValues}
            activePlan={props.activePlan}
          />
          <PriceComponent
            header={"Number of Users"}
            description={
              "buy extra seats for collaborators here including waiters, cashiers and floor managers"
            }
            no_of_items={no_of_users}
            handleChange={Function.handleUsers}
            price={props.userPrice}
            userValues={props.userValues}
            setUserValues={props.setUserValues}
            activePlan={props.activePlan}
          />
          <PriceComponent
            header={"Number of Events"}
            description={"An event is a restaurant or bar with an expiry date"}
            no_of_items={no_of_events}
            handleChange={Function.handleEvent}
            price={props.eventPrice}
            userValues={props.userValues}
            setUserValues={props.setUserValues}
            activePlan={props.activePlan}
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
              value={props.discountValue}
              className="border-0"
              onChange={(e) => {
                props.setDiscountValue(e.target.value);
                props.props.dispatch(resetDiscountMessage());
              }}
              onBlur={() => {
                props.props.dispatch(resetDiscountMessage());
              }}
            />
            <button
              type="button"
              onClick={() => {
                props.props.dispatch(postDiscountValue(props.discountValue));
              }}
              className="btn border-left"
              style={{
                backgroundColor: "transparent",
              }}
            >
              Apply
            </button>
          </Form.Group>

          {props.props.order.discountVal ? (
            <Form.Group
              className="d-flex flex-row justify-content-between align-text-center my-3 "
              style={{ background: "#F5F6F9" }}
            >
              <p style={{ fontSize: "14px", fontWeight: "400", margin: 0 }}>
                Discount value applied
              </p>
              <p style={{ fontSize: "14px", margin: 0 }}>
                $ {props.discount_value}
              </p>
            </Form.Group>
          ) : props.props?.order?.discountValError ? (
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
                $ {props.subTotal}
              </small>
            </small>
          </h6>
        </div>
        <div className="col-12 mt-2">
          <h6 className="text-right">
            <small style={{ fontSize: "16px" }}>
              Tax:{" "}
              <small style={{ color: "#2C3A56", fontWeight: "bold" }}>
                $ {props.tax}
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
                $ {props.total}
              </small>
            </small>
          </h6>
        </div>
      </div>
      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Body className="p-0 m-n1">
          <img
            className="img-fluid"
            src={QR_CODE_IMAGE}
            style={{ borderRadius: "20px" }}
          />
          <button className="btn btn-close" onClick={() => setShow(false)}>
            X
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default YourOrderCard;

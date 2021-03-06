import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getOutlet } from "_actions/outlet";
import * as Action from "_actions";

const About = (props) => {
  useEffect(() => {
    getOutlet(props.location.state);
  }, []);

  const { outlet } = props.outlet;
  const [values, setValues] = useState({
    name: outlet && outlet.name,
    description: outlet && outlet.description,
    address: outlet && outlet.address,
    phone_number: outlet && outlet.phone_number,
  });

  const handleChange = (e) => {
    const val = e.target.value;
    setValues({
      ...values,
      [e.target.name]: val,
    });
  };

  const handleUpdate = () => {
    props.dispatch(Action.updateOutlet(props.location.state, values));
  };
  return (
    <div className="card bg-white border p-5 mt-2">
      <div className="d-flex align-items-center">
        <div className="mr-auto">
          <label>Menu Name</label>
          <Form.Group>
            <Form.Control
              type="text"
              value={values.name}
              name="name"
              required
              onChange={handleChange}
              disabled={true}
            />
          </Form.Group>
          <label>Phone Number</label>
          <Form.Group>
            <Form.Control
              type="text"
              value={values.phone_number}
              name="phone_number"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <label>Description</label>

          <Form.Group>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              name="description"
              value={values.description}
              required
              maxLength="144"
              onChange={handleChange}
            />
          </Form.Group>
          <label>Address</label>

          <Form.Group>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              name="address"
              value={values.address}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <button
            className="btn btn-danger rounded-pill"
            onClick={handleUpdate}
            disabled={
              !values.name ||
              !values.phone_number ||
              !values.address ||
              !values.description
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { outlet: state.outlet };
}

export default withRouter(connect(mapStateToProps)(About));

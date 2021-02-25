import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getOutlet, updateOutlet } from "_actions/outlet";
import Success from "assets/img/Success.svg";
import CustomModal from "components/CustomModal";

const About = (props) => {
  useEffect(() => {
    getOutlet(props.location.state);
  }, []);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

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
    console.log(values);
    props.dispatch(updateOutlet(props.location.state, values)).then((res) => {
      setMessage(res);
      setShow(true);
    });
  };
  return (
    <div className="card bg-white border p-5 mt-2">
      <div className="d-flex align-items-center">
        <div className="mr-auto">
          <label>Outlet Name</label>
          <Form.Group>
            <Form.Control
              type="text"
              value={values.name}
              name="name"
              required
              onChange={handleChange}
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
          <label>Outlet Description</label>

          <Form.Group>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              name="description"
              value={values.description}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <label>Outlet Address</label>

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
          >
            Save
          </button>
        </div>
      </div>
      <CustomModal
        show={show}
        message={message}
        onHide={() => setShow(false)}
        statusicon={Success}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { outlet: state.outlet };
}

export default withRouter(connect(mapStateToProps)(About));

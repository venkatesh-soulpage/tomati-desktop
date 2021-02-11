import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getEvent, updateEvent } from "_actions/event";

const About = (props) => {
  useEffect(() => {
    getEvent(props.location.state);
  }, []);

  const { event } = props.event;
  const [values, setValues] = useState({
    name: event && event.name,
    description: event && event.description,
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
    props.dispatch(updateEvent(props.location.state, values));
  };
  return (
    <div className="card bg-white border p-5 mt-2">
      <div className="d-flex align-items-center">
        <div className="mr-auto">
          <Form.Group>
            <Form.Control
              type="text"
              value={values.name}
              name="name"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="FullName"
              name="description"
              value={values.description}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <button className="btn btn-danger" onClick={handleUpdate}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { event: state.event };
}

export default withRouter(connect(mapStateToProps)(About));

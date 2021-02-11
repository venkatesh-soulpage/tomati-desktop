import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getOutlet, updateOutlet } from "_actions/outlet";

const About = (props) => {
  useEffect(() => {
    getOutlet(props.location.state);
  }, []);

  const { outlet } = props.outlet;
  const [values, setValues] = useState({
    name: outlet.name,
    description: outlet.description,
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
    props.dispatch(updateOutlet(props.location.state, values));
    props.history.push("/dashboard/outlet");
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
  return { outlet: state.outlet };
}

export default withRouter(connect(mapStateToProps)(About));

import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getEvent } from "_actions/event";
import * as Action from "_actions";
import "react-datetime/css/react-datetime.css";
import CustomModal from "components/CustomModal";
import Success from "assets/img/Success.svg";

const About = (props) => {
  useEffect(() => {
    getEvent(props.location.state);
  }, []);

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const { event } = props.event;
  const [values, setValues] = useState({
    name: event && event.name,
    description: event && event.description,
    address: event && event.address,
    phone_number: event && event.phone_number,
  });

  const handleChange = (e) => {
    const val = e.target.value;
    setValues({
      ...values,
      [e.target.name]: val,
    });
  };

  const handleUpdate = async () => {
    console.log(values);
    await props.dispatch(Action.updateEvent(props.location.state, values));
    if (props.event.message) {
      setMessage(props.event.message);
      setShow(true);
    }
  };
  let inputProps = {
    placeholder: "Start Time",
  };
  let inputProps2 = {
    placeholder: "End Time",
  };
  return (
    <div className="card bg-white border p-5 mt-2">
      <div className="d-flex align-items-center">
        <div className="mr-auto">
          <label>Event Name</label>
          <Form.Group>
            <Form.Control
              type="text"
              value={values.name}
              name="name"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <label>Phone Nmber</label>
          <Form.Group>
            <Form.Control
              type="text"
              value={values.phone_number}
              name="phone_number"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <label>Event Description</label>

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
          <label>Event Address</label>
          <Form.Group>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="FullName"
              name="address"
              value={values.address}
              required
              onChange={handleChange}
            />
          </Form.Group>
          {/* <label>Start Time</label>
          <Form.Group>
            <Datetime
              inputProps={inputProps}
              value={moment(values.start_time).format("MMMM Do YYYY, h:mm a")}
              onChange={(e) =>
                setValues({ ...values, start_time: moment(e).format() })
              }
            />
          </Form.Group>
          <label>End Time</label>

          <Form.Group>
            <Datetime
              inputProps={inputProps2}
              //   onChange={handleChange("end_time")}
              value={moment(values.start_time).format("MMMM Do YYYY, h:mm a")}
              onChange={(e) =>
                setValues({ ...values, end_time: moment(e).format() })
              }
            />
          </Form.Group> */}
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
        button={
          <Button
            className="btn btn-primary mt-3 rounded-pill px-4 py-2"
            onClick={() => setShow(false)}
          >
            Close
          </Button>
        }
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { event: state.event };
}

export default withRouter(connect(mapStateToProps)(About));

import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

const EventSchedule = ({
  handleStep,
  values,
  handleChange,
  setValues,
  handleFile,
}) => {
  let inputProps = {
    placeholder: "Start Time",
  };
  let inputProps2 = {
    placeholder: "End Time",
  };
  return (
    <div>
      <Form.Group>
        <Datetime
          inputProps={inputProps}
          value={values.start_time}
          onChange={(e) =>
            setValues({ ...values, start_time: moment(e).format() })
          }
        />
      </Form.Group>
      <Form.Group>
        <Datetime
          inputProps={inputProps2}
          //   onChange={handleChange("end_time")}
          value={values.end_time}
          onChange={(e) =>
            setValues({ ...values, end_time: moment(e).format() })
          }
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Expected Number of Guests"
          value={values.expected_guests}
          onChange={handleChange("expected_guests")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Expected Number of Hourly Guests"
          value={values.expected_hourly_guests}
          onChange={handleChange("expected_hourly_guests")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="commnents"
          value={values.comments}
          onChange={handleChange("comments")}
          required
        />
      </Form.Group>
      <Form.Group className="d-flex justify-content-end">
        <Button
          onClick={handleStep}
          form="register-form"
          className="btn btn-primary mt-3"
          style={{ borderRadius: "20px" }}
        >
          Continue
        </Button>
      </Form.Group>
    </div>
  );
};

export default EventSchedule;

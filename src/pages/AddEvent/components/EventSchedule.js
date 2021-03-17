// import React from "react";
// import { Form, Button, Card } from "react-bootstrap";
// import Datetime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
// import moment from "moment";
// import Back from "assets/img/Back.svg";

// const EventSchedule = ({
//   handleStep,
//   values,
//   handleChange,
//   setValues,
//   handleFile,
//   handleStepPrev,
// }) => {
//   let inputProps = {
//     placeholder: "Start Time",
//   };
//   let inputProps2 = {
//     placeholder: "End Time",
//   };
//   return (
//     <div>
//       <Form.Group>
//         <Datetime
//           inputProps={inputProps}
//           value={values.start_time}
//           onChange={(e) => setValues({ ...values, start_time: moment(e) })}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Datetime
//           inputProps={inputProps2}
//           //   onChange={handleChange("end_time")}
//           value={values.end_time}
//           onChange={(e) => setValues({ ...values, end_time: moment(e) })}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Control
//           type="number"
//           placeholder="Expected Number of Guests"
//           value={values.expected_guests}
//           onChange={handleChange("expected_guests")}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Control
//           type="number"
//           placeholder="Expected Number of Hourly Guests"
//           value={values.expected_hourly_guests}
//           onChange={handleChange("expected_hourly_guests")}
//           required
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Control
//           type="text"
//           placeholder="Comments"
//           value={values.comments}
//           onChange={handleChange("comments")}
//           required
//         />
//       </Form.Group>
//       <Form.Group className="d-flex justify-content-between">
//         <img
//           className="mt-3 ht-54 cr-p"
//           src={Back}
//           alt="icon"
//           onClick={() => {
//             handleStepPrev("step", 1);
//           }}
//         />
//         <Button
//           type="submit"
//           form="email-form"
//           className="btn btn-primary mt-3 rounded-pill px-4"
//         >
//           Continue
//         </Button>
//       </Form.Group>
//     </div>
//   );
// };

// export default EventSchedule;

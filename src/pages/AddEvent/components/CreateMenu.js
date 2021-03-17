// import React, { useState } from "react";
// import { Form, Button, Card, Dropdown } from "react-bootstrap";
// import Papa from "papaparse";
// import _ from "lodash";
// import UploadCover from "assets/img/UploadCover.svg";
// import Back from "assets/img/Back.svg";

// const CreateMenu = ({
//   values,
//   handleChange,
//   handleCreateOutlet,
//   setValues,
//   handleStepPrev,
//   props,
// }) => {
//   const [menuName, setMenuName] = useState(null);

//   const uploadFile = (data) => {
//     const { data: csv_data } = data;
//     setValues({ ...values, menu: _.reject(csv_data, { name: "" }) });
//   };
//   return (
//     <div>
//       <Form.Group>
//         <Dropdown>
//           <Dropdown.Toggle className="custom-dropdown text-left d-flex justify-content-between align-items-center btn">
//             {values.location_id ? values.location_id.name : "Select Location"}
//           </Dropdown.Toggle>

//           <Dropdown.Menu className="w-100">
//             {_.map(props.auth.locations, function (location) {
//               return (
//                 <Dropdown.Item
//                   key={location.id}
//                   value={location.id}
//                   onClick={() => {
//                     setValues({ ...values, location_id: location });
//                   }}
//                 >
//                   {location.name}
//                 </Dropdown.Item>
//               );
//             })}
//           </Dropdown.Menu>
//         </Dropdown>
//       </Form.Group>
//       <Form.Group>
//         <Form.File
//           id="menu"
//           accept=".csv"
//           label="Custom file input"
//           custom
//           className="d-none"
//           onChange={(e) => {
//             setMenuName(e.target.files[0].name);

//             Papa.parse(e.target.files[0], {
//               complete: uploadFile,
//               header: true,
//               transformHeader: (header) =>
//                 header.toLowerCase().replace(/\W/g, "_"),
//             });
//           }}
//         />
//         <Card className="p-2 d-flex pt-4 b1-dash cr-p">
//           <label for="menu" className="cr-p">
//             <h6>
//               <img src={UploadCover} alt="icon" className="mx-4" />
//               {values.menu ? <span>{menuName}</span> : <span>Upload Menu</span>}
//             </h6>
//           </label>
//         </Card>
//         <h6 className="mt-2 grey-color">Only CSV Files</h6>
//         <h6 className="mt-2 grey-color font-italic">
//           watch the CSV tutorial here
//         </h6>
//         <h6 className="mt-2 grey-color font-italic">
//           download CSV template here
//         </h6>
//       </Form.Group>
//       <Form.Group className="d-flex justify-content-between">
//         <img
//           className="mt-3 cr-p ht-54"
//           src={Back}
//           alt="icon"
//           onClick={() => {
//             handleStepPrev("step", 1);
//           }}
//         />
//         <Button
//           form="register-form"
//           className="btn btn-primary mt-3 rounded-pill px-4"
//           onClick={handleCreateOutlet}
//         >
//           Continue
//         </Button>
//       </Form.Group>
//     </div>
//   );
// };

// export default CreateMenu;

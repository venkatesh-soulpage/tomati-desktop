import React, { useState } from "react";
import { Modal, Form, Button, Card } from "react-bootstrap";
import _ from "lodash";
import UploadCover from "assets/img/UploadCover.svg";
import Papa from "papaparse";

const UpdateMenuModal = ({
  addMenu,
  setAddmenu,
  handleMenu,
  menu,
  setMenu,
}) => {
  const [menuName, setMenuName] = useState(null);

  const uploadFile = (data) => {
    const { data: csv_data } = data;
    setMenu(_.reject(csv_data, { name: "" }));
  };

  return (
    <div>
      <Modal
        show={addMenu}
        onHide={() => setAddmenu(false)}
        style={{
          marginTop: "15%",
        }}
      >
        <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
        <Modal.Body className="pt-0" style={{ height: "320px" }}>
          <div className="text-left">
            <h5 className="mb-5" style={{ fontSize: "24px" }}>
              Menu Upload
            </h5>
            <Form.Group>
              <Form.File
                id="menu"
                accept=".csv"
                label="Custom file input"
                custom
                className="d-none"
                onChange={(e) => {
                  setMenuName(e.target.files[0].name);
                  Papa.parse(e.target.files[0], {
                    complete: uploadFile,
                    header: true,
                    transformHeader: (header) =>
                      header.toLowerCase().replace(/\W/g, "_"),
                  });
                }}
              />
              <Card
                style={{ border: " 1px dashed", cursor: "pointer" }}
                className="p-2 d-flex pt-4"
              >
                <label for="menu" style={{ cursor: "pointer" }}>
                  <h6>
                    <img src={UploadCover} alt="icon" className="mx-4" />
                    {menu ? <span>{menuName}</span> : <span>Upload Menu</span>}
                  </h6>
                </label>
              </Card>
              <h6 className="mt-2" style={{ color: "#989CA4" }}>
                Only CSV Files
              </h6>
            </Form.Group>
          </div>
          <div className="text-right">
            <Button
              className="btn btn-primary mt-3 rounded-pill"
              style={{ borderRadius: "30px", width: "140px", height: "54px" }}
              onClick={handleMenu}
            >
              Upload
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateMenuModal;

import React, { useEffect, useState } from "react";
//redux
import {
  getOutlet,
  addOutletMenu,
  updateOutlet,
  inviteCollaborator,
} from "_actions/outlet";
import { connect } from "react-redux";
import { withRouter, Link, Switch, Route } from "react-router-dom";
// papaparse
import Papa from "papaparse";
//lodash
import _ from "lodash";
// react bootstrap
import { Modal, Button, Card, Form } from "react-bootstrap";
// bootstrap icons
import { Camera } from "react-bootstrap-icons";
// image assets
import IconQR from "assets/img/IconQR.svg";
import UploadCover from "assets/img/UploadCover.svg";

import QR from "./QR";
import About from "./About";

function Index(props) {
  const [addMenu, setAddmenu] = useState(false);
  const [addCollaborator, setCollaborator] = useState(false);
  const [menu, setMenu] = useState(null);
  const [collaboratorDetail, setCollaboratorDetail] = useState({
    owner_email: "",
    display_name: "",
    custom_message: "",
    outlet_venue: null,
  });

  useEffect(() => {
    props.dispatch(getOutlet(props.location.state));
  }, []);
  const { outlet } = props.outlet;
  console.log(menu);

  const uploadFile = (data) => {
    const { data: csv_data } = data;
    setMenu(_.reject(csv_data, { name: "" }));
  };

  const handleMenu = () => {
    props.dispatch(addOutletMenu(outlet.id, menu));
  };

  const handleChange = (name) => (e) => {
    const val = e.target.value;
    setCollaboratorDetail((collaboratorDetail) => ({
      ...collaboratorDetail,
      [name]: val,
    }));
  };

  const handleCollaborator = () => {
    console.log({ ...collaboratorDetail, outlet_venue: outlet.id });
    props.dispatch(
      inviteCollaborator({ ...collaboratorDetail, outlet_venue: outlet.id })
    );
  };

  const fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });

  let cover = outlet?.cover_image;
  console.log(cover);

  return (
    <div className="p-3">
      <div
        className="border"
        style={{
          height: "300px",
          background: `url('${cover}')`,
          backgroundSize: "cover",
        }}
      >
        <div className="row h-100 justify-content-center">
          <div className="col-md-4 text-center align-self-center">
            <img
              className="img-fluid rounded-circle"
              src={outlet && outlet.logo_img}
              width="150"
            />
            <label for="logoImage">
              <Camera style={{ color: "#fff" }} />
            </label>

            <Form.Group>
              <Form.Control
                id="logoImage"
                type="file"
                className="d-none"
                onChange={async (e) => {
                  const name = e.target.files[0];
                  const url = await fileToBase64(e.target.files[0]);
                  props.dispatch(
                    updateOutlet(outlet.id, { logo_img: { name, data: url } })
                  );
                }}
              />
            </Form.Group>
          </div>
          <div className="col-md-8 align-self-center">
            <h4 className="text-white font-weight-bold">
              {outlet && outlet.name}
            </h4>
            <p className="text-white font-weight-light">
              {outlet && outlet.description}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <div className="card bg-white border p-3">
            <div className="d-flex align-items-center">
              <div className="">
                <Link
                  to={{
                    pathname: "/dashboard/viewoutlet",
                    state: props.location.state,
                  }}
                  style={{ color: "#2C3A56", textDecoration: "none" }}
                >
                  <h6 className="m-0">
                    {" "}
                    <img src={IconQR} className="mr-2" />
                    QR Code
                  </h6>
                </Link>
              </div>
              <div className="mr-auto ml-5">
                <Link
                  to={{
                    pathname: "/dashboard/viewoutlet/about",
                    state: props.location.state,
                  }}
                  style={{ color: "#2C3A56", textDecoration: "none" }}
                >
                  <h6 className="m-0">About</h6>
                </Link>
              </div>
              <div className="ml-auto mr-2">
                <button
                  className="btn btn-outline-dark rounded-pill"
                  onClick={() => setCollaborator(true)}
                >
                  Add Collaborators
                </button>
              </div>
              <div>
                <button
                  className="btn btn-danger rounded-pill"
                  onClick={() => setAddmenu(true)}
                >
                  Update Menu
                </button>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <Switch>
            <Route
              exact
              path={props.match.path}
              component={() => <QR outlet={outlet} />}
            />
            <Route
              exact
              path={`${props.match.path}/about`}
              component={() => <About outlet={outlet} />}
            />
          </Switch>
        </div>
      </div>
      <Modal
        show={addCollaborator}
        onHide={() => setCollaborator(false)}
        style={{
          marginTop: "15%",
        }}
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Owner Email"
                value={collaboratorDetail.owner_email}
                required
                onChange={handleChange("owner_email")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Display Name"
                value={collaboratorDetail.display_name}
                required
                onChange={handleChange("display_name")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Custom Message"
                value={collaboratorDetail.custom_message}
                required
                onChange={handleChange("custom_message")}
              />
            </Form.Group>

            <Button
              className="btn btn-primary mt-3 rounded-pill"
              style={{ borderRadius: "30px", width: "140px", height: "54px" }}
              onClick={handleCollaborator}
            >
              Send
            </Button>
          </div>
        </Modal.Body>
      </Modal>
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
                    {menu ? (
                      <span>{menu[0].name}</span>
                    ) : (
                      <span>Upload Menu</span>
                    )}
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
}
function mapStateToProps(state) {
  return { outlet: state.outlet };
}

export default withRouter(connect(mapStateToProps)(Index));

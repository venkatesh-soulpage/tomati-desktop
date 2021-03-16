import React, { useEffect, useState } from "react";
//redux
import * as Action from "_actions";
import { connect } from "react-redux";
import { withRouter, Link, Switch, Route } from "react-router-dom";
// papaparse
import Papa from "papaparse";
//lodash
import _ from "lodash";
// react bootstrap
import { Modal, Button, Card, Form } from "react-bootstrap";
// bootstrap icons
import { CameraFill } from "react-bootstrap-icons";
// image assets
import IconQR from "assets/img/IconQR.svg";
import UploadCover from "assets/img/UploadCover.svg";
import Success from "assets/img/Success.svg";
import Error from "assets/img/Error.svg";
import CameraIcon from "assets/img/CameraIcon.svg";
// local component
import QR from "./QR";
import About from "./About";
import CustomModal from "components/CustomModal";
import Collaborators from "./Collaborators";

function Index(props) {
  const [addMenu, setAddmenu] = useState(false);
  const [menuName, setMenuName] = useState(null);
  const [addCollaborator, setCollaborator] = useState(false);
  const [menu, setMenu] = useState(null);
  const [show, setShow] = useState(false);
  const [collaboratorDetail, setCollaboratorDetail] = useState({
    owner_email: "",
    display_name: "",
    custom_message: "",
    outlet_venue: null,
  });
  const { outlet } = props.outlet;

  useEffect(() => {
    props.dispatch(Action.getOutlet(props.location.state));
  }, []);

  const uploadFile = (data) => {
    const { data: csv_data } = data;
    setMenu(_.reject(csv_data, { name: "" }));
  };

  const handleMenu = () => {
    props.dispatch(Action.addOutletMenu(outlet.id, menu));
    setAddmenu(false);
    setShow(true);
  };

  const handleChange = (name) => (e) => {
    const val = e.target.value;
    setCollaboratorDetail((collaboratorDetail) => ({
      ...collaboratorDetail,
      [name]: val,
    }));
  };

  const handleCollaborator = async () => {
    const res = await props.dispatch(
      Action.inviteCollaboratorOutlet({
        ...collaboratorDetail,
        outlet_venue: outlet.id,
      })
    );
    if (res) {
      setCollaborator(false);
      setShow(true);
    }
  };

  const fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });

  let cover = outlet?.cover_image;

  return (
    <div className="p-3">
      <div
        className="border background"
        style={{
          height: "244px",
          background: `url('${cover}')`,
        }}
      >
        <div className="row h-100 justify-content-center blur">
          <div className="col-md-3 d-flex justify-content-center align-self-center">
            <div className="rounded-circle logo-img1 ml-4">
              <img
                alt="logo"
                className=" border1-white img-fluid h-100 rounded-circle"
                src={outlet?.logo_img}
              />
              <label htmlFor="logoImage">
                <img
                  src={CameraIcon}
                  alt="camera"
                  className="cr-p text-white ml-64"
                />
              </label>
            </div>

            <Form.Group>
              <Form.Control
                id="logoImage"
                type="file"
                className="d-none"
                onChange={async (e) => {
                  if (e.target.files[0].size > 51200) {
                    setShow(true);
                    props.dispatch(
                      Action.updateOutletError(
                        "Image size should not exceed 50kb"
                      )
                    );
                  } else {
                    const name = e.target.files[0].name.replace(/\s/g, "");
                    const url = await fileToBase64(e.target.files[0]);
                    props.dispatch(
                      Action.updateOutlet(outlet.id, {
                        logo_img: { name, data: url },
                      })
                    );
                  }
                }}
              />
            </Form.Group>
          </div>
          <div className="col-md-9 align-self-center">
            <h4 className="text-white font-weight-bold fs-30 backdrop p-1">
              {outlet && outlet.name}
            </h4>
            <p className="text-white font-weight-light fs-12 w-58 backdrop p-1">
              {outlet && outlet.description}
            </p>
          </div>
          <Form.Group>
            <Form.Control
              id="coverImage"
              type="file"
              className="d-none"
              onChange={async (e) => {
                if (e.target.files[0].size > 51200) {
                  setShow(true);
                  props.dispatch(
                    Action.updateOutletError(
                      "Image size should not exceed 50kb"
                    )
                  );
                } else {
                  const name = e.target.files[0].name.replace(/\s/g, "");
                  const url = await fileToBase64(e.target.files[0]);
                  props.dispatch(
                    Action.updateOutlet(outlet.id, {
                      cover_image: { name, data: url },
                    })
                  );
                }
              }}
            />
          </Form.Group>
          <div className="col-11 d-flex pr-0 justify-content-end align-items-center">
            <button className="btn p-2 btn-outline-dark text-white d-flex align-items-center cr-p b1-white mb-3 btn-backdrop ">
              <label className="p-0 m-0 cr-p" htmlFor="coverImage">
                <CameraFill className="fs-20" />
                <span className="ml-2">Edit Cover Photo</span>
              </label>
            </button>
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
                    <img src={IconQR} alt="qr" className="mr-2" />
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
              <div className="mr-auto ml-3">
                <Link
                  to={{
                    pathname: "/dashboard/viewoutlet/collaborators",
                    state: props.location.state,
                  }}
                  style={{ color: "#2C3A56", textDecoration: "none" }}
                >
                  <h6 className="m-0">Collaborators</h6>
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
            <Route
              exact
              path={`${props.match.path}/collaborators`}
              component={() => <Collaborators outlet={outlet} />}
            />
          </Switch>
        </div>
      </div>
      <CustomModal
        show={show}
        message={props.outlet.message || props.outlet.error}
        onHide={() => setShow(false)}
        statusicon={
          props.outlet.message ? Success : props.outlet.error ? Error : null
        }
        button={
          <Button
            className="btn btn-primary mt-3 rounded-pill px-4 py-2"
            onClick={() => {
              props.dispatch(Action.resetOutletResponse());
              setShow(false);
            }}
          >
            Close
          </Button>
        }
      />
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
                placeholder="Collaborator's Email"
                value={collaboratorDetail.owner_email}
                required
                onChange={handleChange("owner_email")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="FirstName LastName"
                value={collaboratorDetail.display_name}
                required
                onChange={handleChange("display_name")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Short Message"
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
}
function mapStateToProps(state) {
  return { outlet: state.outlet };
}

export default withRouter(connect(mapStateToProps)(Index));

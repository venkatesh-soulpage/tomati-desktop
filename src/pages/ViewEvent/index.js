import React, { useEffect, useState } from "react";

import { getEvent, addEventMenu } from "_actions/event";
import { connect } from "react-redux";
import { withRouter, Link, Switch, Route } from "react-router-dom";
import { Modal, Button, Card, Form } from "react-bootstrap";
import Papa from "papaparse";
import _ from "lodash";

import QR from "./QR";
import About from "./About";

function Index(props) {
  const [addMenu, setAddmenu] = useState(false);
  const [menu, setMenu] = useState(null);
  console.log(props);

  const { state } = props.location;
  const { event } = props.event;

  useEffect(() => {
    props.dispatch(getEvent(state));
  }, []);

  const uploadFile = (data) => {
    const { data: csv_data } = data;
    setMenu(_.reject(csv_data, { name: "" }));
  };

  const handleMenu = () => {
    props.dispatch(addEventMenu(event.id, menu));
  };

  return (
    <div className="p-3">
      <div
        className="border"
        style={{
          height: "300px",
          background:
            "url(https://s-ec.bstatic.com/images/hotel/max1024x768/438/43853845.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="row h-100 justify-content-center">
          <div className="col-md-4 text-center align-self-center">
            <img
              className="img-fluid"
              src={event && event.logo_img}
              width="150"
            />
          </div>
          <div className="col-md-8 align-self-center">
            <h4 className="text-white font-weight-bold">
              {event && event.name}
            </h4>
            <p className="text-white font-weight-light">
              {event && event.description}
            </p>
          </div>
        </div>
        <div className="mt-3">
          <div className="card bg-white border p-3">
            <div className="d-flex align-items-center">
              <div className="">
                <Link
                  to={{
                    pathname: "/dashboard/viewevent",
                    state: props.location.state,
                  }}
                >
                  <h6 className="m-0">QR Code</h6>
                </Link>
              </div>
              <div className="mr-auto ml-5">
                <Link
                  to={{
                    pathname: "/dashboard/viewevent/about",
                    state: props.location.state,
                  }}
                >
                  <h6 className="m-0">About</h6>
                </Link>
              </div>
              <div className="ml-auto mr-2">
                <button className="btn btn-outline-dark">
                  Add Collaborators
                </button>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => setAddmenu(true)}
                >
                  Upload Menu
                </button>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <Switch>
            <Route
              exact
              path={props.match.path}
              component={() => <QR event={event} />}
            />
            <Route
              exact
              path={`${props.match.path}/about`}
              component={() => <About event={event} />}
            />
          </Switch>
        </div>
      </div>
      <Modal
        show={addMenu}
        onHide={() => setAddmenu(false)}
        style={{
          position: "absolute",
          // left: "50%",
          top: "25%",
          // transform: 'translate(-50%, -50%)',
        }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Form.Group>
              <Form.File
                id="coverImage"
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
              <Card className="p-4">
                <label for="coverImage">
                  <h6>Upload Menu</h6>
                </label>
              </Card>
            </Form.Group>

            <Button
              className="btn btn-primary mt-3"
              style={{ borderRadius: "30px", width: "140px", height: "54px" }}
              onClick={handleMenu}
            >
              Upload Menu
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function mapStateToProps(state) {
  return { event: state.event };
}

export default withRouter(connect(mapStateToProps)(Index));

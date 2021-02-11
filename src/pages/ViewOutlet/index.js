import React, { useEffect } from "react";
import { getOutlet } from "_actions/outlet";

import { connect } from "react-redux";
import { withRouter, Link, Switch, Route } from "react-router-dom";

import QR from "./QR";
import About from "./About";

function Index(props) {
  useEffect(() => {
    props.dispatch(getOutlet(props.location.state));
  }, []);
  const { outlet } = props.outlet;
  console.log(outlet);

  return (
    <div className="p-3">
      <div
        className="border"
        style={{
          height: "300px",
          background: `url(${outlet && outlet.cover_image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="row h-100 justify-content-center">
          <div className="col-md-4 text-center align-self-center">
            <img
              className="img-fluid"
              src={outlet && outlet.logo_img}
              width="150"
            />
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
                >
                  <h6 className="m-0">QR Code</h6>
                </Link>
              </div>
              <div className="mr-auto ml-5">
                <Link
                  to={{
                    pathname: "/dashboard/viewoutlet/about",
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
                <button className="btn btn-danger">Upload Menu</button>
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
    </div>
  );
}
function mapStateToProps(state) {
  return { outlet: state.outlet };
}

export default withRouter(connect(mapStateToProps)(Index));

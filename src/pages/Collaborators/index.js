import React from "react";
import * as Action from "_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="p-4">
        <div>
          <div className="card px-4 py-4 mt-3 cr-p" style={{ borderRadius: 6 }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="m-0 font-weight-bold">FirstName LastName</h6>
              </div>
              <div>
                <button className="btn btn-danger">Pending</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

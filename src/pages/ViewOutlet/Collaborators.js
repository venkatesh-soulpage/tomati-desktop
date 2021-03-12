import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loading from "components/Loading";

const Collaborators = (props) => {
  if (!props.outlet.outlet) {
    return (
      <div>
        <Loading textSecondary={true} />{" "}
      </div>
    );
  }

  return (
    <>
      {props?.outlet?.outlet?.collaborators?.length === 0 ? (
        <div className="text-center mt-5">
          you currently have no collaborators, add some
        </div>
      ) : (
        <div>
          {props?.outlet?.outlet?.collaborators?.map((collaborator, id) => {
            return (
              <div key={id} className="p-2 px-0 m-0">
                <div>
                  <div
                    className="card px-4 py-4 mt-1 cr-p"
                    style={{ borderRadius: 6 }}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="m-0 font-weight-bold">
                          {collaborator.email}
                        </h6>
                      </div>
                      <div>
                        <button className="btn btn-danger">
                          {collaborator.status}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return { outlet: state.outlet };
}

export default withRouter(connect(mapStateToProps)(Collaborators));

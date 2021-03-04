import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import { getUsers } from "_actions/auth";
import { withRouter } from "react-router-dom";

const Index = (props) => {
  useEffect(() => {
    props.dispatch(getUsers());
  }, []);
  console.log(props);
  return (
    <div className="p-4">
      {props.auth.allUsers ? (
        <div>
          {props?.auth?.allUsers.map((user, id) => {
            return (
              <div
                key={id}
                className="card px-4 py-4 mt-3"
                style={{ borderRadius: 6 }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="m-0 font-weight-bold">
                      {user.first_name + user.last_name}
                    </h6>
                  </div>
                  <div>
                    <button className="btn btn-danger">
                      {user.is_subscription_active ? "Active" : "Inactive"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

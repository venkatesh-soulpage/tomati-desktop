import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import * as Action from "_actions";
import { withRouter } from "react-router-dom";
import Loading from "components/Loading";

const Index = (props) => {
  useEffect(() => {
    props.dispatch(Action.getUsers());
  }, []);

  return (
    <div className="p-4">
      {props.auth.allUsers ? (
        <div>
          {props.auth?.allUsers.map((user, id) => {
            return (
              <div
                key={id}
                className="card px-4 py-3 mt-3 cr-p br-5"
                onClick={async () => {
                  props.dispatch(Action.selectedUser(user));
                  props.history.push({
                    pathname: "/dashboard/user",
                  });
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="m-0 font-weight-bold">
                      {user.first_name + " " + user.last_name}
                    </h5>
                    <h6 className="mt-2 font-weight-bold">
                      {user.company_name}
                    </h6>
                  </div>
                  {/* <div>
                    <button className="btn btn-danger">
                      {user.is_subscription_active ? "Active" : "Inactive"}
                    </button>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading textSecondary={true} />
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Index));

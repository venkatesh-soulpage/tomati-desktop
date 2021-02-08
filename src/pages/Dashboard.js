import React from "react";
// Redux
import { connect } from "react-redux";

// Router
// import { Link } from "react-router-dom";
// Bootstrap
import { Alert } from "react-bootstrap";
// Data table
// import DataTable from "react-data-table-component";
// helper functions
// import { getVariantColorByStatus } from "utils/helper";
// Font awesome Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function Dashboard(props) {
  const [alertState, setAlertState] = React.useState({
    show: false,
    message: "",
    variant: "",
  });

  return (
    <div>
      <Alert
        show={alertState.show}
        dismissible
        onClose={() => setAlertState({ ...alertState, show: false })}
      >
        {alertState.message}
      </Alert>
    </div>
  );
}

function mapStateToProps(state) {
  return { application: state.application };
}
export default connect(mapStateToProps)(Dashboard);

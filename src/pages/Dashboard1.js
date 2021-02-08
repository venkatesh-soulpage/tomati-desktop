import React from "react";
// Redux
import { connect } from "react-redux";
import {
  getApplicationsList,
  resetApplicationDetails,
  handleApplicationStep
} from "_actions/application";
// Router
import { Link } from "react-router-dom";
// Bootstrap
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// Data table
import DataTable from "react-data-table-component";
// helper functions
import { getVariantColorByStatus } from "utils/helper";
// Font awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function Dashboard(props) {
  React.useEffect(() => {
    if (sessionStorage.getItem("token")) {
      props.dispatch(getApplicationsList());
    }
    props.dispatch(handleApplicationStep(0));
    props.dispatch(resetApplicationDetails());
  }, [sessionStorage.getItem("token")]);

  const [alertState, setAlertState] = React.useState({
    show: false,
    message: "",
    variant: ""
  });

  const columns = [
    {
      name: "Application ID",
      selector: "id",
      sortable: true
    },
    {
      name: "Purpose",
      selector: "purpose",
      sortable: true
    },
    {
      name: "Borrow Amount",
      selector: "borrow_amount",
      sortable: true
    },
    {
      name: "Created At",
      selector: "created_at",
      sortable: true
    },
    {
      name: "Status",
      selector: "status.text",
      sortable: true,
      cell: row => (
        <div>
          <Badge variant={getVariantColorByStatus(row.status.text)}>
            {row.status.text}
          </Badge>
        </div>
      )
    },
    {
      name: "Actions",
      cell: row => (
        <div>
          <Link to={"/application/" + row.id}>
            <Button size="sm">
              <FontAwesomeIcon icon={faPencilAlt} /> &nbsp;Edit
            </Button>
          </Link>
        </div>
      )
    }
  ];

  return (
    <div>
      <Alert
        show={alertState.show}
        dismissible
        onClose={() => setAlertState({ ...alertState, show: false })}
      >
        {alertState.message}
      </Alert>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <span className="float-right">
                <Link className="btn btn-primary btn-rounded" to="/application">
                  New Application
                </Link>
              </span>
              <h4 className="mb-4"> List of Applications</h4>
              <div className="dashboard-datatable">
                <DataTable
                  columns={columns}
                  data={props.application.applicationList}
                  className="data-table-wrapper"
                  responsive={true}
                  striped={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function mapStateToProps(state) {
  return { application: state.application };
}
export default connect(mapStateToProps)(Dashboard);

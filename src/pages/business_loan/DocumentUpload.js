import React from "react";
// Redux
import { connect } from "react-redux";
import {
  getApplicationDetails,
  handleApplicationStep,
  applicationSubmit,
  applicationUpdate,
  mediaDelete,
  mediaUpload
} from "_actions/application";
// Router
import { Redirect, withRouter } from "react-router-dom";
// React Bootstrap
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
// custom components
import PaperDropZone from "components/PaperDropzone";
// local components
import MediaItem from "components/MediaItem";

function DocumentUpload(props) {
  // const [alertList, setAlertList] = React.useState({});
  const [alertData, setValidationError] = React.useState({
    show: false,
    variant: "danger",
    message: ""
  });

  const [fileTooLargeAlert, setFileTooLargeAlert] = React.useState({
    show: false,
    variant: "warning",
    message: "File is too large to upload. Please upload a file less than 60MB"
  });

  function handleDocumentDrop(acceptedFiles) {
    console.log(acceptedFiles);
    acceptedFiles.map(file => {
      var formData = new FormData();
      formData.append("media_data", file);
      formData.append("mediable_id", props.match.params.application_id);

      return props
        .mediaUpload(formData)
        .then(response => {
          props.getApplicationDetails(props.match.params.application_id);
        })
        .catch(error => {
          if (error.response.data.code === 422) {
            setFileTooLargeAlert({ ...fileTooLargeAlert, show: true });
          } else {
            setValidationError({
              ...alertData,
              show: true,
              variant: "danger",
              message: error.response.data.message
            });
          }
        });
    });
  }

  function onApplicationSubmit(event) {
    event.preventDefault();
    if (props.application_details.media.length > 0) {
      props
        .applicationUpdate({
          ...props.application_details,
          new_business_current: false,
          signature: {
            value: props.application.application_details.signature.value
          }
        })
        .then(responseData => {
          props.applicationSubmit(props.match.params.application_id);
        })
        .catch(errorData => {
          setValidationError({
            ...alertData,
            show: true,
            variant: "danger",
            message: errorData.message
          });
        });
    } else {
      setValidationError({
        ...alertData,
        show: true,
        variant: "warning",
        message:
          "You need to upload at least one document to complete the application."
      });
    }
  }

  const files = props.application_details.media.map((file, index) => (
    <MediaItem
      file={file}
      application_id={props.match.params.application_id}
      key={index}
    />
  ));

  function navigateBack(event) {
    if (props.application.applicationStep > 0) {
      props.handleApplicationStep(props.application.applicationStep - 1);
    }
  }

  if (props.application.applicationSuccess.status === "SUCCESS") {
    return <Redirect to="/application-success" />;
  }

  return (
    <Form onSubmit={onApplicationSubmit}>
      <Form.Group>
        <Alert
          show={alertData.show}
          variant={alertData.variant}
          dismissible
          onClose={() => {
            setValidationError({
              ...alertData,
              show: false
            });
          }}
        >
          {alertData.message}
        </Alert>
        <Alert
          show={fileTooLargeAlert.show}
          variant={fileTooLargeAlert.variant}
        >
          {fileTooLargeAlert.message}
        </Alert>
      </Form.Group>
      <Form.Group>
        <h3>Please Upload the Following Documents:</h3>
        <p>List of Accepted Documents (Label your Files)</p>
        <ul>
          <li>Driver's License Photo or Passport Photo</li>
          <li>Passport Photos (Front and Back)</li>
          <li>Most current 3 Months of Merchant Statements</li>
          <li>Business Incorporation Documents</li>
        </ul>
      </Form.Group>
      <PaperDropZone
        onDrop={handleDocumentDrop}
        accept="image/*, application/pdf"
      />
      <Form.Group>
        <h5 className="mt-4">Uploaded Files</h5>
        {props.application_details.media.length <= 0 ? (
          <p>No files are added</p>
        ) : (
          <ul className="list-group">{files}</ul>
        )}
      </Form.Group>
      <Form.Group>
        <button
          type="button"
          className="btn btn-primary btn-rounded"
          onClick={navigateBack}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary float-right">
          Submit
        </button>
      </Form.Group>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    element: state.element,
    application: state.application,
    application_details: state.application.application_details
  };
}

const mapDispatchToProps = {
  getApplicationDetails,
  handleApplicationStep,
  applicationSubmit,
  applicationUpdate,
  mediaDelete,
  mediaUpload
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DocumentUpload)
);

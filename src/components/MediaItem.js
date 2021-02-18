import React from "react";
// redux
import { connect } from "react-redux";
import { mediaGetAsClient, mediaDelete } from "_actions/application";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
// helpers
import { downloadURI } from "utils/helper";

function MediaItem(props) {
  /**
   * Get the Media Details with signed url to download
   * @param {*} file_id
   */
  const onFileDownload = file => event => {
    event.preventDefault();
    props.mediaGetAsClient(file.id).then(responseData => {
      console.log(responseData);
      downloadURI(responseData.signed_url, file.name);
    });
  };

  /**
   * This Method calls an action which handles the
   * @param {*} file_id
   */
  const onFileDelete = file_id => event => {
    event.preventDefault();
    props.mediaDelete(file_id, props.application_id);
  };

  return (
    <li className="list-group-item">
      <p className="m-0">
        {props.file.name}
        <button className="btn btn-link" onClick={onFileDownload(props.file)}>
          <FontAwesomeIcon icon={faCloudDownloadAlt} />
        </button>

        <button
          className="btn btn-link p-0 float-right"
          onClick={onFileDelete(props.file.id)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </p>
    </li>
  );
}

function mapStatesToProps(state) {
  return {
    application: state.application
  };
}

const mapDispatchToProps = {
  mediaGetAsClient,
  mediaDelete
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(MediaItem);

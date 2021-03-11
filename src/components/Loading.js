import React from "react";

function Loading(props) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        {/* <div className="spinner-border text-white" role="status"> */}
        <div
          className={
            "spinner-border " +
            (props?.textSecondary ? "text-secondary" : "text-white")
          }
          role="status"
        >
          <span className="sr-only ">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Loading;

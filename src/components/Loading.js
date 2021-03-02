import React from "react";

function Loading() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-white" role="status">
          <span className="sr-only ">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Loading;

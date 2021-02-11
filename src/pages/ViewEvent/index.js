import React from "react";
function Index() {
  return (
    <div className="p-3">
      <div
        className="border"
        style={{
          height: "300px",
          background:
            "url(https://s-ec.bstatic.com/images/hotel/max1024x768/438/43853845.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="row h-100 justify-content-center">
          <div className="col-md-4 text-center align-self-center">
            <img
              className="img-fluid"
              src="https://www.freelogodesign.org/Content/img/logo-samples/bakary.png"
              width="150"
            />
          </div>
          <div className="col-md-8 align-self-center">
            <h4 className="text-white font-weight-bold">Captain Sky Bar</h4>
            <p className="text-white font-weight-light">
              In need of a button, but not the hefty background colors they
              bring? Replace the default modifier classes with the
              .btn-outline-* ones to remove all background images and colors on
              any button.
            </p>
          </div>
        </div>
        <div className="mt-3">
          <div className="card bg-white border p-3">
            <div className="d-flex align-items-center">
              <div className="">
                <h6 className="m-0">QR Code</h6>
              </div>
              <div className="ml-auto mr-2">
                <button className="btn btn-outline-dark">
                  Add Collaborators
                </button>
              </div>
              <div>
                <button className="btn btn-danger">Upload Menu</button>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="card bg-white border p-5 mt-2">
            <div className="d-flex align-items-center">
              <div>
                <img className="border" />
              </div>
              <div className="ml-auto">
                <h4 className="text-dark">Your QR Code goes here</h4>
                <p className="text-dark font-weight-light">
                  In need of a button, but not the hefty background colors they
                  bring? Replace the default modifier classes with the
                  .btn-outline-* ones to remove all background images and colors
                  on any button.
                </p>
                <button className="btn btn-outline-dark mr-2">
                  Add Collaborators
                </button>
                <button className="btn btn-danger">Upload Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;

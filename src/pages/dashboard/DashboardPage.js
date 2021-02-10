import React from "react";

function DashboardPage() {
  return (
    <div className="container">
      <div style={{ marginTop: "65px" }}>
        <div className="dashboard-grid-wrapper">
          <div className="dashboard-grid-header"></div>
          <div className="dashboard-left-sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item py-3 border-bottom">
                  <a class="nav-link text-light" href="#">
                    Dashboard <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item py-3 border-bottom">
                  <a class="nav-link text-light" href="#">
                    Outlet
                  </a>
                </li>
                <li class="nav-item py-3 border-bottom">
                  <a class="nav-link text-light" href="#">
                    Wallet
                  </a>
                </li>
                <li class="nav-item py-3 border-bottom">
                  <a class="nav-link text-light" href="#">
                    Settings
                  </a>
                </li>
                <li class="nav-item py-3 border-bottom">
                  <a class="nav-link text-light" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dashboard-grid-main">
            <div className="p-4 ml-4">
              {/* stats */}
              <div className="d-flex align-items-center">
                <div className="">
                  <h3 className="font-weight-bold text-dark m-0">Outlet</h3>
                </div>
                <div className="ml-auto  mr-3">
                  <h4 className="lead m-0">Total Outlets: X</h4>
                </div>
                <div className=" mr-3">
                  <button className="btn btn-dark btn-sm">
                    Premium/Monthly
                  </button>
                </div>
                <div className="">
                  <button className="btn btn-outline-dark btn-sm">
                    Change
                  </button>
                </div>
              </div>
              {/* outlet */}
              <div className="card px-4 py-3 shadow-sm mt-3">
                <div className="d-flex align-items-center">
                  <div>
                    <button className="btn btn-danger">+ Add New Outlet</button>
                  </div>
                  <div className="ml-auto mr-3">
                    <select class="form-control">
                      <option>Sort By</option>
                    </select>
                  </div>
                  <div>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Filter by search"
                    />
                  </div>
                </div>
              </div>

              {/* warning */}
              <div class="alert alert-warning mt-3 mb-3" role="alert">
                A simple warning alert—check it out!
              </div>
              {/* show outlets */}

              <div className="card px-4 py-3  mt-3">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="m-0 font-weight-bold">Eko Hotel</h6>
                    <p className="m-0 text-dark">Street Address</p>
                  </div>
                  <div className="ml-auto mr-3">
                    <button className="btn btn-danger">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

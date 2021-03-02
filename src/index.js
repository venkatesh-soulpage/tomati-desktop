import React from "react";
import ReactDOM from "react-dom";
// Redux imports and configuring store
import { Provider } from "react-redux";
import configureStore from "./store";
// Component and Service Worker
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
// Style Sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/stylesheets/main.scss";
// sentry
import * as Sentry from "@sentry/browser";
// dotenv
require("dotenv").config();

Sentry.init({
  // dsn: "https://b8b964f42f2b40bfaf6d953ed9991b17@sentry.io/1535251"
});

// Creating REDUX store with the required configurations
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

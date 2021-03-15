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
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
// dotenv
require("dotenv").config();

Sentry.init({
  dsn:
    "https://541e3e5cbd324e2198c46ab74ad287a4@o548624.ingest.sentry.io/5672802",
  integrations: [new Integrations.BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
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

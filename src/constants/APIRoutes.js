//AWS
export const AWS_API_URL = "https://api.tomati.app";
export const AWS_MOBILE_URL = "https://mobile.tomati.app/login";

//AWS-staging
export const AWS_STAGING_API_URL = "https://staging-api.tomati.app";
export const AWS_STAGING_MOBILE_URL = "https://staging-mobile.tomati.app";

//VERCEL
export const HEROKU_API_URL = "https://tomati-api.herokuapp.com";

export const LOCAL_DESKTOP_URL = "http://localhost:3002";
export const CSV_TEMPLATE_URL =
  "https://tomati.s3.af-south-1.amazonaws.com/sample-menu.csv";

export const MOBILE_APP_URL =
  process.env.REACT_APP_AWS === "true"
    ? AWS_MOBILE_URL
    : process.env.REACT_APP_AWS_STAGING
    ? AWS_STAGING_MOBILE_URL
    : "http://localhost:3002";

// Auth Routes
export const CLIENT_LOGIN = "/api/auth/login";
export const GET_EMAIL_OTP = "/api/verifications/email/get-code";
export const GET_LOCATIONS = "/api/outletlocations";
export const CHECK_EMAIL_CODE = "/api/verifications/email/check-code";
export const FORGOT_PASSWORD = "/api/auth/tomati-forgot";
export const RESET_PASSWORD = "/api/auth/reset";
export const VERIFY_CREDENTIALS = "/api/auth/verify-credentials";
export const GET_USER = "/api/accounts/me";
export const UPDATE_USER = "/api/auth/reset-profile";
export const GET_ALL_USERS = "/api/auth/get-all-users";
export const INVITE_COLLABORATOR_EVENT = (id) =>
  `/api/auth/outlet-event/${id}/waiter-signup`;
export const INVITE_COLLABORATOR_VENUE = (id) =>
  `/api/auth/outlet-venue/${id}/waiter-signup`;
export const GET_USER_LIMIT = "/api/payment/retrive-subscription";

//Outlets
export const GET_OUTLETS = "/api/outletvenues/user-venues";
export const TOGGLE_MENU = "/api/outletvenues";
export const UPDATE_MENU_STATUS = "/api/outletvenues/update_menu_status";
export const GET_OUTLET = "/api/outletvenues";
export const ADD_OUTLET_REQUEST = "/api/outletvenues";
export const ADD_OUTLET_COLLABORATOR = "/api/auth/invite-collaborator";

//Events
export const GET_EVENTS = "/api/outletevents/user-events";
export const GET_EVENT = "/api/outletevents";
export const ADD_EVENT_REQUEST = "/api/outletevents";
export const ADD_EVENT_COLLABORATOR = "/api/auth/invite-collaborator";

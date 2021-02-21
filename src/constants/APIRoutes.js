//AWS
export const AWS_DESKTOP_URL = "https://desktop.tomati.app";
export const AWS_APP_URL = "https://tomati.app";
export const AWS_WALLET_URL = "https://mobile.tomati.app";
export const AWS_API_URL = "https://api.tomati.app";
//VERCEL
export const VERCEL_DESKTOP_URL = "https://tomati-desktop.vercel.app";
export const HEROKU_API_URL = "https://tomati-api.herokuapp.com";

export const LOCAL_DESKTOP_URL = "http://localhost:3002";

// Auth Routes
export const CLIENT_LOGIN = "/api/auth/login";
export const CLIENT_REGISTER = "/api/auth/user-signup";
export const GET_EMAIL_OTP = "/api/verifications/email/get-code";
export const GET_LOCATIONS = "/api/outletlocations";
export const CHECK_EMAIL_CODE = "/api/verifications/email/check-code";
export const GET_PLANS = "/api/plans";
export const GET_DISCOUNT = "/api/discounts/discount-value";
export const AUTH_TOKEN_VALIDATION = "/api/v1/auth/token/validate";
export const FORGOT_PASSWORD = "/api/auth/tomati-forgot";
export const RESET_PASSWORD = "/api/auth/reset";
export const VERIFY_CREDENTIALS = "/api/auth/verify-credentials";
export const GET_USER = "/api/accounts/me";
export const MAKE_PAYMENT = "/api/payment";
export const UPDATE_USER = "/api/auth/reset-profile";
export const GET_SUBSCRIPTION_ID = "/api/payment/retrive-subscription";
export const INVITE_COLLABORATOR_EVENT = "/api/auth/outlet-event";
export const INVITE_COLLABORATOR_VENUE = "/api/auth/outlet-venue";
// Application Routes
export const APPLICATION_CREATE = "/api/v1/application/create";
export const APPLICATION_LIST = "/api/v1/application";
//Verification Routes
export const VERIFY_CODE = "/api/v1/auth/verify/";
export const SEND_PHONE_VERIFICATION = "/api/v1/auth/code/sms";
export const RESEND_VERIFICATION_EMAIL = "/api/v1/auth/code/email";
export const RESEND_VERIFICATION_SMS = "/api/v1/auth/code/sms";
// Country States
export const STATES_FROM_COUNTRY = "/api/v1/country/";

//Outlets
export const GET_OUTLETS = "/api/outletvenues/user-venues";
export const GET_OUTLET = "/api/outletvenues";
export const ADD_OUTLET_REQUEST = "/api/outletvenues";
export const ADD_OUTLET_COLLABORATOR = "/api/auth/invite-collaborator";

//Events
export const GET_EVENTS = "/api/outletevents/user-events";
export const GET_EVENT = "/api/outletevents";
export const ADD_EVENT_REQUEST = "/api/outletevents";
export const ADD_EVENT_COLLABORATOR = "/api/auth/invite-collaborator";

// s3 routes
export const AWS_S3_STATIC_URL =
  "https://ivy-lender-bucket.s3.ca-central-1.amazonaws.com/static";

export const TOMATI_DESKTOP_URL = "https://tomati-desktop.vercel.app/";
export const HERULO_PAYMENT_URL =
  "https://tomati-api.herokuapp.com/api/payment";
export const LOCAL_PAYMENT_URL = "http://localhost:3000/api/payment";

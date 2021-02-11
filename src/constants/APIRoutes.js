// Auth Routes
export const CLIENT_LOGIN = "/api/auth/login";
export const CLIENT_REGISTER = "/api/auth/user-signup";
export const GET_EMAIL_OTP = "/api/verifications/email/get-code";
export const GET_LOCATIONS = "/api/outletlocations";
export const CHECK_EMAIL_CODE = "/api/verifications/email/check-code";
export const AUTH_TOKEN_VALIDATION = "/api/v1/auth/token/validate";
export const FORGOT_PASSWORD = "/api/auth/tomati-forgot";
export const RESET_PASSWORD = "/api/auth/reset";
export const VERIFY_CREDENTIALS = "/api/auth/verify-credentials";
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

//Events
export const GET_EVENTS = "/api/outletevents/user-events";
export const GET_EVENT = "/api/outletevents";
export const ADD_EVENT_REQUEST = "/api/outletevents/";

// s3 routes
export const AWS_S3_STATIC_URL =
  "https://ivy-lender-bucket.s3.ca-central-1.amazonaws.com/static";

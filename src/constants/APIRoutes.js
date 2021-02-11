// Auth Routes
export const CLIENT_LOGIN = "/api/auth/login";
export const CLIENT_REGISTER = "/api/v1/auth/client/register";
export const AUTH_TOKEN_VALIDATION = "/api/v1/auth/token/validate";
export const FORGOT_PASSWORD = "/api/v1/auth/forgot";
export const RESET_PASSWORD = "/api/v1/auth/reset";
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

//Events
export const GET_EVENTS = "/api/outletevents/user-events";

// s3 routes
export const AWS_S3_STATIC_URL =
  "https://ivy-lender-bucket.s3.ca-central-1.amazonaws.com/static";

import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  isFetching: false,
  isAuthenticated: false,
  isVerificationCodeSent: false,
  isUserVerified: false,
  userData: {},
  userDataError: {},
  loginSuccess: {},
  loginError: null,
  registerError: null,
  resetPasswordError: null,
  forgotPasswordToken: {},
  forgotPasswordError: {},
  forgotPasswordToggle: false,
  verifySuccess: null,
  verifyError: null,
  makePaymentSuccess: null,
  makePaymentError: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionTypes.RECEIVE_USER_DATA_ERROR:
      return {
        ...state,
        userDataError: action.payload,
      };
    case ActionTypes.HANDLE_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.HANDLE_LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload,
        isFetching: false,
      };
    case ActionTypes.HANDLE_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        isFetching: false,
      };
    case ActionTypes.HANDLE_EMAIL_SUCCESS:
      return {
        ...state,
        verifySuccess: action.payload,
      };
    case ActionTypes.HANDLE_EMAIL_ERROR:
      return {
        ...state,
        verifyError: action.payload,
      };
    case ActionTypes.HANDLE_EMAIL_CODE_ERROR:
      return {
        ...state,
        verifyEmailCodeError: action.payload,
      };
    case ActionTypes.RESET_MESSAGE:
      return {
        ...state,
        verifySuccess: action.payload,
        verifyError: action.payload,
      };
    case ActionTypes.MAKE_PAYMENT_SUCCESS:
      return {
        ...state,
        makePaymentSuccess: action.payload,
      };
    case ActionTypes.MAKE_PAYMENT_ERROR:
      return {
        ...state,
        makePaymentError: action.payload,
      };
    case ActionTypes.HANDLE_REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload,
      };
    case ActionTypes.HANDLE_IS_USER_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case ActionTypes.HANDLE_IS_USER_VERIFIED:
      return {
        ...state,
        isUserVerified: action.payload,
      };
    case ActionTypes.HANDLE_IS_VERIFICATION_CODE_SENT:
      return {
        ...state,
        isVerificationCodeSent: action.payload,
      };
    case ActionTypes.RECEIVE_PASSWORD_RESET_TOKEN:
      return {
        ...state,
        forgotPasswordToken: action.payload,
      };
    case ActionTypes.RECEIVE_PASSWORD_RESET_TOKEN_ERROR:
      return {
        ...state,
        forgotPasswordError: action.payload,
      };
    case ActionTypes.RESET_PASSWORD_TOKEN:
      return {
        ...state,
        resetPasswordError: action.payload,
      };
    case ActionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: action.payload,
      };
    case ActionTypes.FORGOT_PASSWORD_TOGGLE:
      return {
        ...state,
        forgotPasswordToggle: action.payload,
      };
    default:
      return state;
  }
}

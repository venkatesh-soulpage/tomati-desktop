import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  isFetching: false,
  isAuthenticated: false,
  isVerificationCodeSent: false,
  isUserVerified: false,
  userData: null,
  userDataError: null,
  loginSuccess: null,
  loginError: null,
  collaboratorSignupSuccess: null,
  registerError: null,
  resetPasswordError: null,
  resetPasswordSuccess: null,
  forgotPasswordToken: null,
  forgotPasswordError: null,
  forgotPasswordToggle: false,
  verifySuccess: null,
  verifyError: null,
  makePaymentSuccess: null,
  makePaymentError: null,
  message: null,
  error: null,
  allUsers: null,
  locations: null,
  locationsError: null,
  limit: null,
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
    case ActionTypes.COLLABORATOR_SIGNUP_SUCCESS:
      return {
        ...state,
        collaboratorSignupSuccess: action.payload,
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
        resetPasswordSuccess: action.payload,
        resetPasswordError: null,
      };
    case ActionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: action.payload,
      };
    case ActionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: null,
      };
    case ActionTypes.FORGOT_PASSWORD_TOGGLE:
      return {
        ...state,
        forgotPasswordToggle: action.payload,
      };
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.UPDATE_USER_RESPONSE:
      return {
        ...state,
        message: action.payload,
        isFetching: false,
      };
    case ActionTypes.UPDATE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case ActionTypes.RESET_UPDATE_RESPONSE:
      return {
        ...state,
        message: null,
        error: null,
        isFetching: true,
      };
    case ActionTypes.SET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case ActionTypes.GET_LOCATION_SUCCESS:
      return {
        ...state,
        locations: action.payload,
      };
    case ActionTypes.GET_LOCATION_ERROR:
      return {
        ...state,
        locationsError: action.payload,
      };
    case ActionTypes.SET_USER_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };

    default:
      return state;
  }
}

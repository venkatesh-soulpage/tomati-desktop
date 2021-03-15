import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  isFetching: false,
  isAuthenticated: false,
  userData: null,
  loginSuccess: null,
  loginError: null,
  collaboratorSignupSuccess: null,
  registerError: null,
  verifySuccess: null,
  verifyError: null,
  message: null,
  error: null,
  allUsers: null,
  limit: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isFetching: false,
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
    case ActionTypes.RESET_MESSAGE:
      return {
        ...state,
        verifySuccess: action.payload,
        verifyError: action.payload,
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
    case ActionTypes.SET_USER_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };

    default:
      return state;
  }
}

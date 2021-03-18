import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  isFetching: null,
  resetPasswordError: null,
  resetPasswordSuccess: null,
  forgotPasswordToken: null,
  forgotPasswordError: null,
  forgotPasswordToggle: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESET_PASSWORD_RESPONSE:
      return {
        ...state,
        isFetching: true,
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
        isFetching: false,
      };
    case ActionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: action.payload,
        isFetching: false,
      };
    case ActionTypes.FORGOT_PASSWORD_TOGGLE:
      return {
        ...state,
        forgotPasswordToggle: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
}

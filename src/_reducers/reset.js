import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  resetPasswordError: null,
  resetPasswordSuccess: null,
  forgotPasswordToken: null,
  forgotPasswordError: null,
  forgotPasswordToggle: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
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
    case ActionTypes.FORGOT_PASSWORD_TOGGLE:
      return {
        ...state,
        forgotPasswordToggle: action.payload,
      };

    default:
      return state;
  }
}

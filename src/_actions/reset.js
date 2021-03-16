import { ResetService } from "services";
import * as ActionTypes from "constants/ActionTypes";

/* ================================================================== */
/* Forgot Password */
/* ================================================================== */
/**
 * Requesting forgot password with email
 * @param {*} postData
 */
export function forgetPassword(postData) {
  return async (dispatch) => {
    try {
      const responseData = await ResetService.forgetPassword(postData);

      dispatch({
        type: ActionTypes.RECEIVE_PASSWORD_RESET_TOKEN,
        payload: responseData,
      });
      dispatch(forgotPasswordToggle(true));
      return responseData;
    } catch (errorData) {
      dispatch(receiveForgotPasswordError(errorData));
      dispatch(forgotPasswordToggle(false));
      return errorData;
    }
  };
}
/**
 * ON Failure while resetting password
 * @param {*} error
 */
export function receiveForgotPasswordError(error) {
  return {
    type: ActionTypes.RECEIVE_PASSWORD_RESET_TOKEN_ERROR,
    payload: error,
  };
}
/**
 * Reset password toggle for switching views
 * @param {*} data
 */
export function forgotPasswordToggle(data) {
  return {
    type: ActionTypes.FORGOT_PASSWORD_TOGGLE,
    payload: data,
  };
}
/* ================================================================== */
/* Reset Password */
/* ================================================================== */
/**
 * For resetting the password using the token
 * @param {*} data
 */
export function resetPassword(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.RESET_PASSWORD_RESPONSE,
      });
      const responseData = await ResetService.resetPassword(data);

      dispatch(receiveResetPassword(responseData));
      return responseData;
    } catch (errorData) {
      dispatch({
        type: ActionTypes.RESET_PASSWORD_ERROR,
        payload: errorData,
      });
      return errorData;
    }
  };
}
/**
 * When reset password is successful
 * @param {*} data
 */
export function receiveResetPassword(data) {
  return {
    type: ActionTypes.RESET_PASSWORD_TOKEN,
    payload: data,
  };
}

import { AuthService } from "services";
import axios from "axios";
import * as ActionTypes from "constants/ActionTypes";
import history from "utils/history";

/* ================================================================== */
/* Collaborator Signup */
/* ================================================================== */
/**
 * Collaborator Signup

 * @param {*} postData
 */
export function collaboratorSignup(postData) {
  return function (dispatch) {
    return AuthService.collaboratorSignup(postData)
      .then((responseData) => {
        // history.push("/");
        return responseData;
      })
      .catch((errorData) => {
        dispatch(handleRegisterError(errorData));
      });
  };
}
/**
 * User Registration Failed Response
 * @param {*} error
 */
export function handleRegisterError(error) {
  return {
    type: ActionTypes.HANDLE_REGISTER_ERROR,
    payload: error,
  };
}
/* ================================================================== */
/* User Login */
/* ================================================================== */
/**
 * User Login with email and password
 * common for all the user (broker, admin, client)
 * @param {*} postData
 */
export function userLogin(postData) {
  return function (dispatch) {
    dispatch(loginRequest());
    return AuthService.postLoginDetails(postData)
      .then((responseData) => {
        dispatch(handleLoginSuccess(responseData));
        dispatch(receiveUserData(responseData));
        if (responseData.token) {
          dispatch(setAuthTokenInSession("token", responseData.token));
          dispatch(handleIsUserAuthenticated(true));
          history.push("/dashboard/outlet");
        } else {
          var errorData = {
            status: "ERROR",
            message:
              "Access Denied, User Type not permitted to use this application",
          };
          dispatch(handleLoginError(errorData));
        }
        return responseData.data.user;
      })
      .catch((errorData) => {
        dispatch(handleLoginError(errorData));
      });
  };
}
/**
 * Login Request
 * @param {*}
 */
export function loginRequest() {
  return {
    type: ActionTypes.HANDLE_LOGIN_REQUEST,
  };
}
/**
 * Login Success Response
 * @param {*} loginResponse
 */
export function handleLoginSuccess(loginResponse) {
  return {
    type: ActionTypes.HANDLE_LOGIN_SUCCESS,
    payload: loginResponse,
  };
}
/**
 * Login Error Response
 * @param {*} error
 */
export function handleLoginError(error) {
  return {
    type: ActionTypes.HANDLE_LOGIN_ERROR,
    payload: error,
  };
}
/**
 * Clearing Login Failed Response
 */
export function clearLoginError() {
  return {
    type: ActionTypes.HANDLE_LOGIN_ERROR,
    payload: null,
  };
}
/**
 * Verify with email
 * @param {*} postData
 */
export function verify(postData) {
  return function (dispatch) {
    return AuthService.verifyCredentails(postData)
      .then((responseData) => {
        if (
          new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(postData)
        ) {
          dispatch(handleEmailSuccess(responseData.Message));
        } else {
          dispatch(handleEmailSuccess("Enter valid Email"));
        }
        return responseData;
      })
      .catch((errorData) => {
        dispatch(handleEmailError(errorData.Message));
        return errorData;
      });
  };
}
/**
 * Verify Reset Response
 * @param {*}
 */
export function resetMessage() {
  return {
    type: ActionTypes.RESET_MESSAGE,
    payload: null,
  };
}
/**
 * Verify Success Response
 * @param {*} Message
 */
export function handleEmailSuccess(Message) {
  return {
    type: ActionTypes.HANDLE_EMAIL_SUCCESS,
    payload: Message,
  };
}
/**
 * Verify Error Response
 * @param {*} error
 */
export function handleEmailError(error) {
  return {
    type: ActionTypes.HANDLE_EMAIL_ERROR,
    payload: error,
  };
}
/* ================================================================== */
/* User Data */
/* ================================================================== */
/**
 * Storing User Details to access across the App
 * @param {*} userData
 */
export function receiveUserData(userData) {
  return {
    type: ActionTypes.RECEIVE_USER_DATA,
    payload: userData,
  };
}
/* ================================================================== */
/* User Auth Token Handling */
/* ================================================================== */
/**
 * After the user login handling user auth token handling
 * using axios request Header
 * @param {*} payload
 */
export function handleIsUserAuthenticated(payload) {
  var token = sessionStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
  return {
    type: ActionTypes.HANDLE_IS_USER_AUTHENTICATED,
    payload: payload,
  };
}
/**
 * Set the auth Token in the session storage with key and value
 * @param {*} key
 * @param {*} value
 */
export function setAuthTokenInSession(key, value) {
  return function (dispatch) {
    sessionStorage.setItem(key, value);
  };
}
/* ================================================================== */
/* User sign out */
/* ================================================================== */
/**
 * User Sign out by setting isAuthenticated false
 * and clearing session storage
 */
export function userSignOut() {
  return function (dispatch) {
    sessionStorage.clear();
    dispatch(handleIsUserAuthenticated(false));
    history.push("/");
    history.go();
  };
}
/* ================================================================== */
/* Forgot Password */
/* ================================================================== */
/**
 * Requesting forgot password with email
 * @param {*} postData
 */
export function forgetPassword(postData) {
  return function (dispatch) {
    return AuthService.forgetPassword(postData)
      .then((responseData) => {
        dispatch(receiveForgotPasswordToken(responseData));
        dispatch(forgotPasswordToggle(true));
        return responseData;
      })
      .catch((errorData) => {
        dispatch(receiveForgotPasswordError(errorData));
        dispatch(forgotPasswordToggle(false));
        return errorData;
      });
  };
}
/**
 * On Success Receives Reset Token
 * @param {*} data
 */
export function receiveForgotPasswordToken(data) {
  return {
    type: ActionTypes.RECEIVE_PASSWORD_RESET_TOKEN,
    payload: data,
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
  return function (dispatch) {
    return AuthService.resetPassword(data)
      .then((responseData) => {
        dispatch(receiveResetPassword(responseData));
        return responseData;
      })
      .catch((errorData) => {
        dispatch(receiveResetPasswordError(errorData));
        return errorData;
      });
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
/**
 * When reset password receives and failed response.
 * @param {*} error
 */
export function receiveResetPasswordError(error) {
  return {
    type: ActionTypes.RESET_PASSWORD_ERROR,
    payload: error,
  };
}

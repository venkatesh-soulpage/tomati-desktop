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
  return async (dispatch) => {
    try {
      const responseData = await AuthService.collaboratorSignup(postData);
      dispatch({
        type: ActionTypes.COLLABORATOR_SIGNUP_SUCCESS,
        payload: responseData,
      });
      return responseData;
    } catch (errorData) {
      dispatch(handleRegisterError({ message: errorData }));
    }
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
/* Get Location */
/* ================================================================== */
/**
 * get locations
 * @param {*}
 */
export function getLocationRegister() {
  return async (dispatch) => {
    try {
      const responseData = await AuthService.getLocations();
      dispatch(getLocationSuccess(responseData));
      return responseData;
    } catch (errorData) {
      dispatch(getLocationError(errorData));
    }
  };
}
export function getLocationSuccess(responseData) {
  return {
    type: ActionTypes.GET_LOCATION_SUCCESS,
    payload: responseData,
  };
}
export function getLocationError(error) {
  return {
    type: ActionTypes.GET_LOCATION_ERROR,
    payload: error,
  };
}
/* ================================================================== */
/* Get USer */
/* ================================================================== */
/**
 * Requesting User Details
 * @param {*} getData
 */
export function getUserData() {
  return async (dispatch) => {
    try {
      const responseData = await AuthService.getUserData();
      dispatch(receiveUserData(responseData));
    } catch (errorData) {}
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
/* User Login */
/* ================================================================== */
/**
 * User Login with email and password
 * common for all the user (broker, admin, client)
 * @param {*} postData
 */
export function userLogin(postData) {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const responseData = await AuthService.postLoginDetails(postData);
      dispatch(handleLoginSuccess(responseData));
      dispatch(setAuthTokenInSession("token", responseData.token));
      dispatch(handleIsUserAuthenticated());
      dispatch(getUserData());
      // history.push("/dashboard/outlet");

      return responseData.data.user;
    } catch (errorData) {
      dispatch(handleLoginError(errorData));
    }
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
  return async (dispatch) => {
    try {
      const response = await AuthService.verifyCredentails(postData);
      dispatch(handleEmailSuccess(response.Message));
    } catch (error) {
      dispatch(handleEmailError(error.Message));
    }
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
/* User Auth Token Handling */
/* ================================================================== */
/**
 * After the user login handling user auth token handling
 * using axios request Header
 * @param {*} payload
 */
export function handleIsUserAuthenticated() {
  var token = sessionStorage.getItem("token");
  let payload;
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    payload = true;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
    payload = false;
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
  return async (dispatch) => {
    try {
      const responseData = await AuthService.forgetPassword(postData);

      dispatch(receiveForgotPasswordToken(responseData));
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
  return async (dispatch) => {
    try {
      dispatch(resetResponse());
      const responseData = await AuthService.resetPassword(data);

      dispatch(receiveResetPassword(responseData));
      return responseData;
    } catch (errorData) {
      dispatch(receiveResetPasswordError(errorData));
      return errorData;
    }
  };
}
/* ================================================================== */
/* Get all Users
/* ================================================================== */
/**
 * For all Users
 * @param {*} data
 */
export function getUsers() {
  return function (dispatch) {
    return AuthService.getUsers()
      .then((responseData) => {
        dispatch(setAllUser(responseData));
        return responseData;
      })
      .catch((errorData) => {});
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
/**
 * When reset password receives and failed response.
 * @param {*} error
 */
export function resetResponse() {
  return {
    type: ActionTypes.RESET_PASSWORD_RESPONSE,
  };
}

/**
 * Reset password toggle for switching views
 * @param {*} data
 */
export function setUserData(data) {
  return {
    type: ActionTypes.SET_USER_DATA,
    payload: data,
  };
}
/* ================================================================== */
/* Update User */
/* ================================================================== */
/**
 * FOr Updating User Information
 * @param {*} data
 */
export function updateUser(data) {
  return async (dispatch) => {
    dispatch(resetUpdateResponse());
    try {
      const responseData = await AuthService.updateUser(data);
      dispatch(updateUserReponse(responseData));
      return responseData;
    } catch (errorData) {
      dispatch(updateUserError(errorData));
      return errorData;
    }
  };
}
/**
 * Reset Update User Response
 * @param {*} data
 */
export function resetUpdateResponse() {
  return {
    type: ActionTypes.RESET_UPDATE_RESPONSE,
  };
}
/**
 * Update User Response
 * @param {*} data
 */
export function updateUserReponse(message) {
  return {
    type: ActionTypes.UPDATE_USER_RESPONSE,
    payload: message,
  };
}
/**
 * Update User Error
 * @param {*} data
 */
export function updateUserError(message) {
  return {
    type: ActionTypes.UPDATE_USER_ERROR,
    payload: message,
  };
}
/**
 * Reset Update User Response
 * @param {*} data
 */
export function setAllUser(data) {
  return {
    type: ActionTypes.SET_ALL_USERS,
    payload: data,
  };
}
/* ================================================================== */
/* User Limits */
/* ================================================================== */
/**
 * @param {*} getData
 */
export function getUserLimits(data) {
  return async (dispatch) => {
    try {
      const responseData = await AuthService.getUserLimits(data);
      dispatch(setUserLimits(responseData));
    } catch (errorData) {
      console.log(errorData);
    }
  };
}
/**
 * Set User Limit
 * @param {*} data
 */
export function setUserLimits(data) {
  return {
    type: ActionTypes.SET_USER_LIMIT,
    payload: data,
  };
}

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
      dispatch(setAuthTokenInSession("isAdmin", responseData.is_admin));
      dispatch(receiveUserData(responseData));
    } catch (errorData) {}
  };
}
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
      dispatch({
        type: ActionTypes.HANDLE_LOGIN_REQUEST,
      });
      const responseData = await AuthService.postLoginDetails(postData);
      dispatch({
        type: ActionTypes.HANDLE_LOGIN_SUCCESS,
        payload: responseData,
      });
      dispatch(setAuthTokenInSession("token", responseData.token));
      dispatch(handleIsUserAuthenticated());
      dispatch(getUserData());
      return responseData;
    } catch (errorData) {
      dispatch(handleLoginError(errorData));
    }
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
 * Verify with email
 * @param {*} postData
 */
export function verify(postData) {
  return async (dispatch) => {
    try {
      const response = await AuthService.verifyCredentails(postData);
      dispatch(handleEmailSuccess(response.Message));
    } catch (error) {
      dispatch({
        type: ActionTypes.HANDLE_EMAIL_ERROR,
        payload: error.Message,
      });
    }
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
 * Verify Reset Response
 * @param {*}
 */
export function resetMessage() {
  return {
    type: ActionTypes.RESET_MESSAGE,
    payload: null,
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
/* Get all Users
/* ================================================================== */
/**
 * For all Users
 * @param {*} data
 */
export function getUsers() {
  return async (dispatch) => {
    try {
      const responseData = await AuthService.getUsers();

      dispatch({
        type: ActionTypes.SET_ALL_USERS,
        payload: responseData,
      });
      return responseData;
    } catch (errorData) {}
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
    dispatch({
      type: ActionTypes.RESET_UPDATE_RESPONSE,
    });
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
      dispatch({
        type: ActionTypes.SET_USER_LIMIT,
        payload: responseData,
      });
      return responseData;
    } catch (errorData) {}
  };
}

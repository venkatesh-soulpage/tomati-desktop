import AuthService from "services/auth";
import axios from "axios";
import * as ActionTypes from "constants/ActionTypes";
import history from "utils/history";

/* ================================================================== */
/* User Registration */
/* ================================================================== */
/**
 * User Registration
 * On registration is success - User Details
 * On registration Failed  - handling user registration error
 * @param {*} postData
 */
export function userRegistration(postData) {
  return function (dispatch) {
    // console.log("action\n", postData);

    return AuthService.postSignUpDetails(postData)
      .then((responseData) => {
        dispatch(receiveUserData(responseData));
        return responseData;
      })
      .catch((errorData) => {
        dispatch(handleRegisterError(errorData));
      });
  };
}
/**
 * Email Otp
 * On registration is success - User Details
 * On registration Failed  - handling user registration error
 * @param {*} postData
 */
export function getEmailRegisterOtp(postData) {
  return function (dispatch) {
    return AuthService.getEmailOtp(postData)
      .then((responseData) => {
        return responseData;
      })
      .catch((errorData) => {
        dispatch(handleRegisterError(errorData));
      });
  };
}
/**
 * get locations
 * @param {*}
 */
export function getLocationRegister() {
  return function (dispatch) {
    return AuthService.getLocations()
      .then((responseData) => {
        dispatch(getLocationSuccess(responseData));
        return responseData;
      })
      .catch((errorData) => {
        dispatch(getLocationError(errorData));
      });
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
/**
 * get plans
 * @param {*}
 */
export function getPlansRequest() {
  return function (dispatch) {
    return AuthService.getPlans()
      .then((responseData) => {
        dispatch(getPlansSuccess(responseData));
        return responseData;
      })
      .catch((errorData) => {
        dispatch(getPlansError(errorData));
      });
  };
}
export function getPlansSuccess(responseData) {
  return {
    type: ActionTypes.GET_PLANS_SUCCESS,
    payload: responseData,
  };
}
export function getPlansError(error) {
  return {
    type: ActionTypes.GET_PLANS_ERROR,
    payload: error,
  };
}

/**
 * get discount
 * @param {*}
 */
export function postDiscountValue(postData) {
  return function (dispatch) {
    return AuthService.getDiscount(postData)
      .then((responseData) => {
        dispatch(getDiscountValueSuccess(responseData));
        return responseData;
      })
      .catch((errorData) => {
        dispatch(getDiscountValueError(errorData));
      });
  };
}
export function getDiscountValueSuccess(responseData) {
  return {
    type: ActionTypes.GET_DISCOUNT_VALUE_SUCCESS,
    payload: responseData,
  };
}
export function getDiscountValueError(error) {
  return {
    type: ActionTypes.GET_DISCOUNT_VALUE_ERROR,
    payload: error,
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
        console.log(responseData);
        dispatch(handleLoginSuccess(responseData));
        dispatch(receiveUserData(responseData));
        if (responseData.token) {
          dispatch(setAuthTokenInSession("token", responseData.token));
          dispatch(handleIsUserAuthenticated(true));
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
        console.log("REsponse\n", responseData);
        console.log("REsponse\n", postData);
        if (
          new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(postData)
        ) {
          console.log("REsponse if\n", responseData);
          dispatch(handleEmailSuccess(responseData.Message));
        } else {
          console.log("REsponse else\n", responseData);
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
  console.log("handle error\n", error);
  return {
    type: ActionTypes.HANDLE_EMAIL_ERROR,
    payload: error,
  };
}
export function handleEmailCodeError(error) {
  console.log("handle error\n", error);
  return {
    type: ActionTypes.HANDLE_EMAIL_CODE_ERROR,
    payload: error,
  };
}

export function checkEmailCode(postData) {
  return function (dispatch) {
    return AuthService.checkCode(postData)
      .then((responseData) => {
        dispatch(handleEmailSuccess(responseData.Message));
        return responseData;
      })
      .catch((errorData) => {
        if (
          typeof JSON.parse(errorData) === Object &&
          JSON.parse(errorData).status === 400
        ) {
          return dispatch(handleEmailCodeError("Invalid code"));
        }
        dispatch(handleEmailCodeError(errorData));
        return errorData;
      });
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
/**
 * Error response when getting the user details from  the user
 * @param {*} error
 */
export function receiveUserDataError(error) {
  return {
    type: ActionTypes.RECEIVE_USER_DATA_ERROR,
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
/* User auth token validation */
/* ================================================================== */
/**
 * Validating the existing user auth token is valid or not
 */
export function validateAuthToken() {
  return function (dispatch) {
    return AuthService.validateAuthToken()
      .then((responseData) => {
        dispatch(receiveUserData(responseData.data.user));
      })
      .catch((errorData) => {
        dispatch(userSignOut());
      });
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
      })
      .catch((errorData) => {
        dispatch(receiveForgotPasswordError(errorData));
        dispatch(forgotPasswordToggle(false));
      });
  };
}

/* ================================================================== */
/* Get USer */
/* ================================================================== */
/**
 * Requesting User Details
 * @param {*} getData
 */
export function getUser() {
  return function (dispatch) {
    return AuthService.getUser()
      .then((responseData) => {
        // console.log(responseData);
        dispatch(setUserData(responseData));
        // dispatch(forgotPasswordToggle(true));
      })
      .catch((errorData) => {
        console.log(errorData.response);

        // dispatch(receiveForgotPasswordError(errorData));
        // dispatch(forgotPasswordToggle(false));
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
        history.push("/forgot-password/success");
      })
      .catch((errorData) => {
        dispatch(receiveResetPasswordError(errorData));
      });
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
  return function (dispatch) {
    return AuthService.updateUser(data)
      .then((responseData) => {
        console.log(responseData, "User Updated");
        history.push("/dashboard/settings");
        // dispatch(receiveResetPassword(responseData));
        // history.push("/forgot-password/success");
      })
      .catch((errorData) => {
        // dispatch(receiveResetPasswordError(errorData));
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

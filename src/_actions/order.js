import { OrderService } from "services";
import * as ActionTypes from "constants/ActionTypes";

/**
 * get locations
 * @param {*}
 */
export function getLocationRegister() {
  return function (dispatch) {
    return OrderService.getLocations()
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
    return OrderService.getPlans()
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
    return OrderService.getDiscount(postData)
      .then((responseData) => {
        if (responseData.status === "active") {
          dispatch(
            getDiscountValueSuccess({
              discount_value: responseData.discount_percentage,
            })
          );
          return responseData;
        } else {
          dispatch(getDiscountValueError("Enter valid coupon"));
        }
      })
      .catch((errorData) => {
        dispatch(getDiscountValueError("Enter valid coupon"));
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
 * Discount Reset Response
 * @param {*}
 */
export function resetDiscountMessage() {
  return {
    type: ActionTypes.RESET_DISCOUNT_MESSAGE,
    payload: null,
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
    return OrderService.getUser()
      .then((responseData) => {
        dispatch(setUserData(responseData));
      })
      .catch((errorData) => {
        console.log(errorData.response);
      });
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
  return function (dispatch) {
    return OrderService.updateUser(data)
      .then((responseData) => {
        dispatch(updateUserReponse(responseData));
      })
      .catch((errorData) => {
        dispatch(updateUserReponse(errorData));
      });
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
/* ================================================================== */
/* Get Subscription ID */
/* ================================================================== */
/**
 * FOr Updating User Information
 * @param {*} data
 */
export function getSubscriptionId(data) {
  return function (dispatch) {
    return OrderService.getSubscriptionId(data)
      .then((responseData) => {
        return responseData;
      })
      .catch((errorData) => {});
  };
}

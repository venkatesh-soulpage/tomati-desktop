import { OrderService } from "services";
import * as ActionTypes from "constants/ActionTypes";

/**
 * get locations
 * @param {*}
 */
export function getLocationRegister() {
  return async (dispatch) => {
    try {
      const responseData = await OrderService.getLocations();
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
/**
 * get plans
 * @param {*}
 */
export function getPlansRequest() {
  return async (dispatch) => {
    try {
      const responseData = await OrderService.getPlans();
      dispatch(getPlansSuccess(responseData));
      return responseData;
    } catch (errorData) {
      dispatch(getPlansError(errorData));
    }
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
  return async (dispatch) => {
    try {
      const responseData = await OrderService.getDiscount(postData);

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
    } catch (errorData) {
      dispatch(getDiscountValueError("Enter valid coupon"));
    }
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
  return async (dispatch) => {
    try {
      const responseData = await OrderService.getUser();
      dispatch(setUserData(responseData));
    } catch (errorData) {}
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
    try {
      const responseData = await OrderService.updateUser(data);
      dispatch(updateUserReponse(responseData));
    } catch (errorData) {
      dispatch(updateUserError(errorData));
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
/* Get Subscription ID */
/* ================================================================== */
/**
 * FOr Updating User Information
 * @param {*} data
 */
export function getSubscriptionId(data, postData) {
  return async (dispatch) => {
    try {
      console.log(data, postData);
      const responseData = await OrderService.getSubscriptionId(data);
      dispatch({
        type: ActionTypes.SUBSCRIPTION,
        payload: responseData,
      });
      let pair = {
        subscription_id: responseData.hosted_page.content.subscription.id,
      };
      await dispatch(UpdatePayment({ ...postData, ...pair }));
    } catch (error) {
      dispatch({
        type: ActionTypes.SUBSCRIPTION_ERROR,
        payload: error,
      });
    }
  };
}
/* ================================================================== */
/* Update Payment  */
/* ================================================================== */
/**
 * FOr Updating User Information
 * @param {*} data
 */
export function UpdatePayment(data) {
  return async (dispatch) => {
    try {
      const responseData = await OrderService.UpdatePayment(data);
      console.log(responseData);
      dispatch({
        type: ActionTypes.UPDATE_SUBSCRIPTION_SUCCESS,
        payload: responseData,
      });
      return responseData;
    } catch (error) {}
  };
}

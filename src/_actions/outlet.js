// import OutletService from "services/outlet";
import axios from "axios";
import * as ActionTypes from "constants/ActionTypes";
import * as APIRoutes from "constants/APIRoutes";
import history from "utils/history";

/* ================================================================== */
/* User Outlets */
/* ================================================================== */
/**
 * User Outlets
 * On outlets is success - User Outlets
 * On registration Failed  - handling user outlets error
 * @param {*} getData
 */
export function userOutlets() {
  return function (dispatch) {
    axios
      .get(APIRoutes.GET_OUTLETS)
      .then((responseData) => {
        dispatch(receiveUserOutlets(responseData.data));
        return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function getOutlet(id) {
  return function (dispatch) {
    axios
      .get(`${APIRoutes.GET_OUTLET}/${id}`)
      .then((responseData) => {
        console.log(responseData);

        dispatch(getSingleOutlet(responseData.data));
        return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function updateOutlet(id, data) {
  console.log(data, id, "update Outlet");
  return function (dispatch) {
    axios
      .put(`${APIRoutes.GET_OUTLET}/${id}`, data)
      .then((responseData) => {
        console.log(responseData);

        // dispatch(postUpdatedOutlet(responseData.data));
        // return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function receiveUserOutlets(data) {
  console.log(data);
  return {
    type: ActionTypes.RECEIVE_USER_OUTLETS,
    payload: data,
  };
}

export function getSingleOutlet(data) {
  console.log(data);
  return {
    type: ActionTypes.GET_SINGLE_OUTLET,
    payload: data,
  };
}

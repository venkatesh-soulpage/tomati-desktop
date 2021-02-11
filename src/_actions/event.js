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
export function userEvents() {
  return function (dispatch) {
    axios
      .get(APIRoutes.GET_EVENTS)
      .then((responseData) => {
        dispatch(receiveUserEvents(responseData.data));
        return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function receiveUserEvents(data) {
  console.log(data);
  return {
    type: ActionTypes.RECEIVE_USER_EVENTS,
    payload: data,
  };
}

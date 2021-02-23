// import OutletService from "services/outlet";
import axios from "axios";
import * as ActionTypes from "constants/ActionTypes";
import * as APIRoutes from "constants/APIRoutes";
import OutletService from "services/outlet";
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
        // return responseData;
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
        // return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function addOutlet(data) {
  console.log(data);
  return function (dispatch) {
    axios
      .post(`${APIRoutes.ADD_OUTLET_REQUEST}`, data)
      .then((responseData) => {
        console.log(responseData);

        dispatch(addOutletMenu(responseData.data.Venue.id, data.menu));
        history.push("/dashboard/outlet");
        // return responseData;
      })
      .catch((errorData) => {
        console.log(errorData.response);
        // return errorData;
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function addOutletMenu(id, menu) {
  console.log(id, menu, "Add Menu");
  return function (dispatch) {
    // axios
    //   .post(`${APIRoutes.ADD_EVENT_REQUEST}/${id}/menu`, menu)
    return OutletService.addOutletMenu(id, menu)
      .then((responseData) => {
        return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
      });
  };
}

export function updateOutlet(id, data) {
  console.log(data, id, "update Outlet");
  return function (dispatch) {
    return OutletService.updateOutlet(id, data)
      .then((responseData) => {
        console.log(responseData);
        return responseData;
        // history.push("/dashboard/event");
      })
      .catch((errorData) => {
        console.log(errorData);
      });
  };
}

export function inviteCollaborator(data) {
  return function (dispatch) {
    axios
      .post(APIRoutes.ADD_OUTLET_COLLABORATOR, data)
      .then((responseData) => {
        console.log(responseData);
        history.push("/dashboard/outlet");
        // dispatch(postUpdatedOutlet(responseData.data, true));
        return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function receiveUserOutlets(data) {
  return {
    type: ActionTypes.RECEIVE_USER_OUTLETS,
    payload: data,
  };
}

export function getSingleOutlet(data) {
  return {
    type: ActionTypes.GET_SINGLE_OUTLET,
    payload: data,
  };
}

export function addOutletResponse(message, res) {
  console.log(message, res, "add outlet res");
  return {
    type: ActionTypes.OUTLET_RESPONSE,
    payload: { message, res },
  };
}

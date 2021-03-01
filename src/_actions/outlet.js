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
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function getOutlet(id) {
  return function (dispatch) {
    axios
      .get(`${APIRoutes.GET_OUTLET}/${id}`)
      .then((responseData) => {
        dispatch(getSingleOutlet(responseData.data));

        // return responseData;
      })
      .catch((errorData) => {
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function addOutlet(data) {
  return function (dispatch) {
    axios
      .post(`${APIRoutes.ADD_OUTLET_REQUEST}`, data)
      .then((responseData) => {
        dispatch(addOutletMenu(responseData.data.Venue.id, data.menu));
        history.push("/dashboard/outlet");
        // return responseData;
      })
      .catch((errorData) => {
        // return errorData;
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function addOutletMenu(id, menu) {
  return function (dispatch) {
    // axios
    //   .post(`${APIRoutes.ADD_EVENT_REQUEST}/${id}/menu`, menu)
    return OutletService.addOutletMenu(id, menu)
      .then((responseData) => {
        dispatch(addMenuResponse(responseData));
        return responseData;
      })
      .catch((errorData) => {});
  };
}

export function updateOutlet(id, data) {
  return function (dispatch) {
    return OutletService.updateOutlet(id, data)
      .then((responseData) => {
        dispatch(getOutlet(id));
        return responseData;
      })
      .catch((errorData) => {});
  };
}

export function inviteCollaborator(data) {
  return function (dispatch) {
    axios
      .post(APIRoutes.ADD_OUTLET_COLLABORATOR, data)
      .then((responseData) => {
        dispatch(inviteCollaboratorResponse(responseData.data));
        return responseData;
      })
      .catch((errorData) => {
        dispatch(inviteCollaboratorResponse(errorData.response.data));
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

export function addMenuResponse(message) {
  return {
    type: ActionTypes.ADD_MENU_RESPONSE,
    payload: message,
  };
}

export function inviteCollaboratorResponse(message) {
  return {
    type: ActionTypes.INIVTE_COLLAB_RESPONSE,
    payload: message,
  };
}

export function addOutletResponse(message, res) {
  return {
    type: ActionTypes.OUTLET_RESPONSE,
    payload: { message, res },
  };
}

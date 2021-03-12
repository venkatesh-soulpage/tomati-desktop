// import OutletService from "services/outlet";
import * as ActionTypes from "constants/ActionTypes";
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
export function userOutlets(data) {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const responseData = await OutletService.getOutlets(data);

      dispatch(receiveUserOutlets(responseData));
      return responseData;
    } catch (errorData) {
      dispatch(fetchError());
    }
  };
}

export function addOutlet(data) {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const responseData = await OutletService.addOutletRequest(data);

      dispatch(addOutletMenu(responseData.Venue.id, data.menu));
      history.push("/dashboard/outlet");
    } catch (errorData) {
      dispatch(fetchError());
    }
  };
}

export function addOutletMenu(id, menu) {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const responseData = await OutletService.addOutletMenu(id, menu);
      dispatch(addMenuResponse(responseData));
      return responseData;
    } catch (errorData) {
      dispatch(fetchError());
    }
  };
}

export function getOutlet(id) {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const responseData = await OutletService.getOutlet(id);
      dispatch(getSingleOutlet(responseData));
    } catch (errorData) {
      dispatch(fetchError());
    }
  };
}

export function updateOutlet(id, data) {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const responseData = await OutletService.updateOutlet(id, data);
      dispatch(updateOutletResponse(responseData));
      dispatch(getOutlet(id));
      return responseData;
    } catch (errorData) {
      dispatch(updateOutletError(errorData));
      dispatch(fetchError());
    }
  };
}

export function inviteCollaboratorOutlet(data) {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const responseData = await OutletService.addOutletCollaborator(data);
      dispatch(getOutlet(data.outlet_venue));
      dispatch(inviteCollaboratorResponse(responseData));
      return responseData;
    } catch (errorData) {
      dispatch(getOutlet(data.outlet_venue));
      dispatch(inviteCollaboratorError(errorData));
      return errorData;
    }
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

export function addMenuResponse() {
  return {
    type: ActionTypes.ADD_MENU_RESPONSE,
    payload: "Menu Updated Succesfully",
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
export function fetchRequest() {
  return {
    type: ActionTypes.FETCH_REQUEST,
  };
}
export function fetchError() {
  return {
    type: ActionTypes.FETCH_ERROR,
  };
}

export function toggleMenu(data, status) {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const res = await OutletService.toggleMenu(data, status);
      dispatch(userOutlets());
      return res;
    } catch (errorData) {
      dispatch(fetchError());
      return errorData;
    }
  };
}
export function updateMenuStatus() {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const res = await OutletService.updateMenuStatus();
      console.log(res);
      dispatch(fetchError());
      return res;
    } catch (errorData) {
      dispatch(fetchError());
      return errorData;
    }
  };
}
export function inviteCollaboratorError(message) {
  return {
    type: ActionTypes.INIVTE_COLLAB_ERROR,
    payload: message,
  };
}

export function updateOutletResponse(message) {
  return {
    type: ActionTypes.UPDATE_OUTLET_RESPONSE,
    payload: message,
  };
}

export function updateOutletError(message) {
  return {
    type: ActionTypes.UPDATE_OUTLET_ERROR,
    payload: message,
  };
}

export function resetOutletResponse() {
  return {
    type: ActionTypes.RESET_RESPONSE,
  };
}

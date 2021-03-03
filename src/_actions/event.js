// import OutletService from "services/outlet";
import axios from "axios";
import * as ActionTypes from "constants/ActionTypes";
import * as APIRoutes from "constants/APIRoutes";
import EventService from "services/event";
import history from "utils/history";

/* ================================================================== */
/* User Events */
/* ================================================================== */
/**
 * User Events
 * On events is success - User Events
 * On registration Failed  - handling user events error
 * @param {*} getData
 */
export function userEvents() {
  return async (dispatch) => {
    try {
      const responseData = await EventService.getEvents();

      dispatch(receiveUserEvents(responseData));
      return responseData;
    } catch (errorData) {}
  };
}
export function addEvent(data) {
  return async (dispatch) => {
    try {
      const responseData = await EventService.addEventRequest(data);

      dispatch(addEventMenu(responseData.Event.id, data.menu));
      history.push("/dashboard/event");
    } catch (errorData) {}
  };
}

export function addEventMenu(id, menu) {
  return async (dispatch) => {
    try {
      const responseData = await EventService.addEventMenu(id, menu);
      dispatch(addMenuResponse(responseData.Message));
      return responseData;
    } catch (errorData) {}
  };
}
export function getEvent(id) {
  return async (dispatch) => {
    try {
      const responseData = await EventService.getEvent(id);
      dispatch(getSingleEvent(responseData));
    } catch (errorData) {}
  };
}

export function updateEvent(id, data) {
  return async (dispatch) => {
    try {
      const responseData = await EventService.updateEvent(id, data);
      dispatch({
        type: ActionTypes.UPDATE_EVENT_RESPONSE,
        payload: responseData,
      });
      dispatch(getEvent(id));
      return responseData;
    } catch (errorData) {}
  };
}
export function inviteCollaborator(data) {
  return async (dispatch) => {
    try {
      const responseData = await EventService.addEventCollaborator(data);
      dispatch(inviteCollaboratorResponse(responseData));
      return responseData;
    } catch (errorData) {
      dispatch(inviteCollaboratorResponse(errorData));
    }
  };
}

export function receiveUserEvents(data) {
  return {
    type: ActionTypes.RECEIVE_USER_EVENTS,
    payload: data,
  };
}

export function getSingleEvent(data) {
  return {
    type: ActionTypes.GET_SINGLE_EVENT,
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

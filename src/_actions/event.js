// import OutletService from "services/outlet";
import axios from "axios";
import * as ActionTypes from "constants/ActionTypes";
import * as APIRoutes from "constants/APIRoutes";
import EventService from "services/event";
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

export function addEvent(data) {
  return function (dispatch) {
    axios
      .post(APIRoutes.ADD_EVENT_REQUEST, data)
      .then((responseData) => {
        dispatch(addEventMenu(responseData.data.Event.id, data.menu));
        history.push("/dashboard/event");
      })
      .catch((errorData) => {
        console.log(errorData);
        return errorData;
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function addEventMenu(id, menu) {
  return function (dispatch) {
    // axios
    //   .post(`${APIRoutes.ADD_EVENT_REQUEST}/${id}/menu`, menu)
    return EventService.addEventMenu(id, menu)
      .then((responseData) => {
        console.log(responseData);
        dispatch(addMenuResponse(responseData.Message));
        return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
      });
  };
}

export function getEvent(id) {
  return function (dispatch) {
    axios
      .get(`${APIRoutes.GET_EVENT}/${id}`)
      .then((responseData) => {
        console.log(responseData);

        dispatch(getSingleEvent(responseData.data));
        // return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function updateEvent(id, data) {
  return function (dispatch) {
    return EventService.updateEvent(id, data)
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
      .post(APIRoutes.ADD_EVENT_COLLABORATOR, data)
      .then((responseData) => {
        console.log(responseData);
        dispatch(inviteCollaboratorResponse(responseData.data));
        // dispatch(postUpdatedOutlet(responseData.data, true));
        return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        dispatch(inviteCollaboratorResponse(errorData.response.data));

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

export function getSingleEvent(data) {
  console.log(data);
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

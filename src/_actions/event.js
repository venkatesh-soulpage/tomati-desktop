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

export function addEvent(data) {
  return function (dispatch) {
    axios
      .post(APIRoutes.ADD_EVENT_REQUEST, data)
      .then((responseData) => {
        console.log(responseData);
        dispatch(addEventMenu(responseData.data.Event.id, data.menu));
        return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
      });
  };
}

export function addEventMenu(id, menu) {
  return function (dispatch) {
    axios
      .post(`${APIRoutes.ADD_EVENT_REQUEST}/${id}/menu`, menu)
      .then((responseData) => {
        console.log(responseData);
        // dispatch(addEventMenu(responseData.data.Event.id, data.menu));
        // return responseData;
      })
      .catch((errorData) => {
        console.log(errorData);
        // dispatch(handleRegisterError(errorData));
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
    axios
      .put(`${APIRoutes.GET_EVENT}/${id}`, data)
      .then((responseData) => {
        console.log(responseData);
        history.push("/dashboard/event");
        // dispatch(postUpdatedOutlet(responseData.data));
        // return responseData;
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

export function getSingleEvent(data) {
  console.log(data);
  return {
    type: ActionTypes.GET_SINGLE_EVENT,
    payload: data,
  };
}

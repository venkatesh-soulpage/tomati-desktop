import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  isFetching: null,
  locations: null,
  locationsError: null,
  outlets: [],
  outlet: {},
  success: false,
  message: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_LOCATION_SUCCESS:
      return {
        ...state,
        locations: action.payload,
      };
    case ActionTypes.GET_LOCATION_ERROR:
      return {
        ...state,
        locationsError: action.payload,
      };
    case ActionTypes.RECEIVE_USER_OUTLETS:
      return {
        ...state,
        outlets: action.payload,
        success: false,
        message: null,
        isFetching: false,
      };
    case ActionTypes.GET_SINGLE_OUTLET:
      return {
        ...state,
        outlet: action.payload,
        isFetching: false,
      };
    case ActionTypes.INIVTE_COLLAB_RESPONSE:
      return {
        ...state,
        message: action.payload,
        isFetching: false,
      };
    case ActionTypes.ADD_MENU_RESPONSE:
      return {
        ...state,
        message: action.payload,
        isFetching: false,
      };
    case ActionTypes.UPDATE_OUTLET_RESPONSE:
      return {
        ...state,
        message: action.payload,
        isFetching: false,
      };
    case ActionTypes.FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case ActionTypes.INIVTE_COLLAB_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.UPDATE_OUTLET_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case ActionTypes.RESET_RESPONSE:
      return {
        ...state,
        error: null,
        isFetching: false,
        message: null,
      };
    default:
      return state;
  }
}

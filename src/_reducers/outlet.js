import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  outlets: [],
  outlet: {},
  success: false,
  message: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_USER_OUTLETS:
      return {
        ...state,
        outlets: action.payload,
        success: false,
        message: null,
      };
    case ActionTypes.GET_SINGLE_OUTLET:
      return {
        ...state,
        outlet: action.payload,
      };
    case ActionTypes.OUTLET_RESPONSE:
      return {
        ...state,
        message: action.payload.message,
        success: action.payload.res,
      };
    case ActionTypes.INIVTE_COLLAB_RESPONSE:
      return {
        ...state,
        message: action.payload,
      };
    case ActionTypes.ADD_MENU_RESPONSE:
      return {
        ...state,
        message: action.payload,
      };
    case ActionTypes.UPDATE_OUTLET_RESPONSE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

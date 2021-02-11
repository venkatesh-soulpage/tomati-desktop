import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  outlets: [],
  outlet: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_USER_OUTLETS:
      console.log(action.payload);
      return {
        ...state,
        outlets: action.payload,
      };
    case ActionTypes.GET_SINGLE_OUTLET:
      console.log(action.payload);
      return {
        ...state,
        outlet: action.payload,
      };

    default:
      return state;
  }
}

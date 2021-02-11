import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  events: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_USER_EVENTS:
      console.log(action.payload);
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
}

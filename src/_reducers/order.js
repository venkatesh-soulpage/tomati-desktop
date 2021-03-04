import * as ActionTypes from "constants/ActionTypes";

var initialState = {
  // locations: null,
  // locationsError: null,
  user: null,
  plans: null,
  plansError: null,
  discountVal: null,
  discountValError: null,
  message: null,
  subscription: null,
  subscriptionError: null,
  updateSubscriptionSuccess: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    // case ActionTypes.GET_LOCATION_SUCCESS:
    //   return {
    //     ...state,
    //     locations: action.payload,
    //   };
    // case ActionTypes.GET_LOCATION_ERROR:
    //   return {
    //     ...state,
    //     locationsError: action.payload,
    //   };
    case ActionTypes.GET_PLANS_SUCCESS:
      return {
        ...state,
        plans: action.payload,
      };
    case ActionTypes.GET_PLANS_ERROR:
      return {
        ...state,
        plansError: action.payload,
      };
    case ActionTypes.GET_DISCOUNT_VALUE_SUCCESS:
      return {
        ...state,
        discountVal: action.payload,
      };
    case ActionTypes.GET_DISCOUNT_VALUE_ERROR:
      return {
        ...state,
        discountValError: action.payload,
      };
    case ActionTypes.RESET_DISCOUNT_MESSAGE:
      return {
        ...state,
        discountVal: action.payload,
        discountValError: action.payload,
      };
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.UPDATE_USER_RESPONSE:
      return {
        ...state,
        message: action.payload,
      };
    case ActionTypes.SUBSCRIPTION:
      return {
        ...state,
        subscription: action.payload,
      };
    case ActionTypes.SUBSCRIPTION_ERROR:
      return {
        ...state,
        subscriptionError: action.payload,
      };
    case ActionTypes.UPDATE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        updateSubscriptionSuccess: action.payload,
      };
    case ActionTypes.UPDATE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

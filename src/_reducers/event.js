// import * as ActionTypes from "constants/ActionTypes";

// var initialState = {
//   events: [],
//   event: null,
//   success: false,
//   message: null,
//   error: null,
// };

// export default function authReducer(state = initialState, action) {
//   switch (action.type) {
//     case ActionTypes.RECEIVE_USER_EVENTS:
//       return {
//         ...state,
//         events: action.payload,
//       };
//     case ActionTypes.GET_SINGLE_EVENT:
//       return {
//         ...state,
//         event: action.payload,
//       };
//     case ActionTypes.INIVTE_COLLAB_RESPONSE:
//       return {
//         ...state,
//         message: action.payload,
//       };
//     case ActionTypes.ADD_MENU_RESPONSE:
//       return {
//         ...state,
//         message: action.payload,
//       };
//     case ActionTypes.UPDATE_EVENT_RESPONSE:
//       return {
//         ...state,
//         message: action.payload,
//       };
//     case ActionTypes.INIVTE_COLLAB_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// }

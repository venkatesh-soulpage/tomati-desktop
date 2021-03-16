import { combineReducers } from "redux";
import auth from "./auth";
import outlet from "./outlet";
import event from "./event";
import reset from "./reset";

export default combineReducers({
  auth,
  outlet,
  event,
  reset,
});

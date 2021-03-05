import { combineReducers } from "redux";
import auth from "./auth";
import outlet from "./outlet";
import event from "./event";

export default combineReducers({
  auth,
  outlet,
  event,
});

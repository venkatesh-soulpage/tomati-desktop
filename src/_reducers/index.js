import { combineReducers } from "redux";
import auth from "./auth";
import order from "./order";
import outlet from "./outlet";
import event from "./event";

export default combineReducers({
  auth,
  order,
  outlet,
  event,
});

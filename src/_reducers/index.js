import { combineReducers } from "redux";
import auth from "./auth";
import element from "./element";
import application from "./application";
import verification from "./verification";
import outlet from "./outlet";
import event from "./event";

export default combineReducers({
  auth,
  element,
  application,
  verification,
  outlet,
  event,
});

import { combineReducers } from "redux";
import auth from "./authReducer";
import message from "./message";

export default combineReducers({
  auth,
  message,
});

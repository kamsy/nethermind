import { combineReducers } from "redux";
import auth from "./auth";
import cats from "./cats";

export default combineReducers({
    auth,
    cats
});

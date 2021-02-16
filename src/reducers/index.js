import { combineReducers } from "redux";
import auth from "./auth";
import cats from "./cats";
import loader from "./loader";

export default combineReducers({
    auth,
    cats,
    loader
});

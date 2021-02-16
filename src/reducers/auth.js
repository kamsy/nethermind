import { LOGIN_USER, LOGOUT_USER } from "../variables";
import InitialState from "./initialState";

const auth = (state = InitialState, { type }) => {
    switch (type) {
        case LOGIN_USER:
            return { ...state, loggedIn: true };
        case LOGOUT_USER:
            return { ...state, loggedIn: false };
        default:
            return state;
    }
};

export default auth;

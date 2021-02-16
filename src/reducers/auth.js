import { LOGIN_USER, LOGOUT_USER } from "../variables";

const auth = (state = { loggedIn: false }, { type }) => {
    switch (type) {
        case LOGIN_USER:
            return { loggedIn: true };
        case LOGOUT_USER:
            return { loggedIn: false };
        default:
            return state;
    }
};

export default auth;

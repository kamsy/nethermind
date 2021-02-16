import { LOADING } from "../variables";
import InitialState from "./initialState";

const loader = (state = InitialState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return { ...state, isLoading: payload };
        default:
            return state;
    }
};

export default loader;

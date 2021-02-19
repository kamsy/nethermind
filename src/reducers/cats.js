import {
    SET_CATS_IMAGES,
    SET_BREEDS,
    SET_BREED,
    LOGOUT_USER
} from "../variables";
import InitialState from "./initialState";

const cats = (state = InitialState, { type, payload }) => {
    switch (type) {
        case SET_BREED:
            return { ...state, selectedBreed: payload };
        case SET_BREEDS:
            return { ...state, breeds: payload };
        case SET_CATS_IMAGES:
            return { ...state, catImages: payload };
        case LOGOUT_USER:
            return { ...state, catImages: [], selectedBreed: {}, breeds: [] };
        default:
            return state;
    }
};

export default cats;

import { SET_CATS_IMAGES, SET_BREEDS, SET_BREED } from "../variables";
import InitialState from "./initialState";

const cats = (state = InitialState, { type, payload }) => {
    switch (type) {
        case SET_BREED:
            return { ...state, selectedBreed: payload };
        case SET_BREEDS:
            return { ...state, breeds: payload };
        case SET_CATS_IMAGES:
            return { ...state, catImages: payload };
        default:
            return state;
    }
};

export default cats;

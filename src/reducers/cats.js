import { SET_CATS_IMAGES, SET_BREEDS } from "../variables";
import InitialState from "./initialState";

const cats = (state = InitialState, { type, payload }) => {
    console.log("cats -> state", state);
    switch (type) {
        case SET_BREEDS:
            return { ...state, breeds: payload };
        case SET_CATS_IMAGES:
            return { ...state, catImages: payload };
        default:
            return state;
    }
};

export default cats;

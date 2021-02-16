import { SET_BREED } from "../variables";

const setBreed = payload => {
    return { type: SET_BREED, payload };
};

export default setBreed;

import { SET_BREEDS } from "../variables";

const getBreeds = () => {
    return function getBreedsThunk(dispatch, getState) {
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(res => res.json())
            .catch(err => {
                dispatch({ type: SET_BREEDS, payload: [] });
            })
            .then(res => {
                dispatch({ type: SET_BREEDS, payload: res });
            });
    };
};

export default getBreeds;

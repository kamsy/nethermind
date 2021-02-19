import { SET_BREEDS } from "../variables";
import axios from "axios";

const getBreeds = () => {
    return function getBreedsThunk(dispatch) {
        axios
            .get("https://api.thecatapi.com/v1/breeds")
            .then(res => {
                dispatch({ type: SET_BREEDS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: SET_BREEDS, payload: [] });
            });
    };
};

export default getBreeds;

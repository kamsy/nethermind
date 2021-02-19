import { SET_CATS_IMAGES } from "../variables";
import loader from "./loader";
import axios from "axios";

const getImages = ({ breed_id }) => {
    return function getImagesThunk(dispatch) {
        dispatch(loader(true));
        axios
            .get(
                `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}&limit=100`
            )
            .then(res => {
                dispatch(loader(false));
                return dispatch({ type: SET_CATS_IMAGES, payload: res.data });
            })
            .catch(err => {
                dispatch(loader(false));
                return dispatch({ type: SET_CATS_IMAGES, payload: [] });
            });
    };
};

export default getImages;

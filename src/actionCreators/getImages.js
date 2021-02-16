import { SET_CATS_IMAGES } from "../variables";
import loader from "./loader";

const getImages = ({ breed_id }) => {
    return function getImagesThunk(dispatch, getState) {
        dispatch(loader(true));
        fetch(
            `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}&limit=100`
        )
            .then(res => res.json())
            .catch(err => {
                dispatch(loader(false));
                dispatch({ type: SET_CATS_IMAGES, payload: [] });
            })
            .then(res => {
                dispatch(loader(false));
                dispatch({ type: SET_CATS_IMAGES, payload: res });
            });
    };
};

export default getImages;

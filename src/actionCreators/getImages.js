import { SET_CATS_IMAGES } from "../variables";

const getImages = ({ breed_id }) => {
    return function getImagesThunk(dispatch, getState) {
        console.log(
            "getBreedsThunk -> getState",
            `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}`
        );
        fetch(
            `https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}&limit=100`
        )
            .catch(err => {
                console.log("getBreedsThunk -> err", err);
                dispatch({ type: SET_CATS_IMAGES, payload: [] });
            })
            .then(res => res.json())
            .then(res => {
                console.log("getImagesThunk -> res", res);
                dispatch({ type: SET_CATS_IMAGES, payload: res });
            });
    };
};

export default getImages;

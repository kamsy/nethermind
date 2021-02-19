import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";

const _breeds = JSON.parse(
    readFileSync(path.join(__dirname, "breedsRes.json")).toString()
);

const _breedImages = JSON.parse(
    readFileSync(path.join(__dirname, "breedImagesRes.json")).toString()
);

export { _breeds, _breedImages };

const apiMocks = {
    getBreeds: jest.fn(() => {
        return {
            then: callback => act(() => callback({ _breeds }))
        };
    })
};

export default apiMocks;

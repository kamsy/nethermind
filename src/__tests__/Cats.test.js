import React from "react";
import Cats from "../pages/Cats";
import { render, fireEvent, cleanup, waitFor } from "../utils/test-utils";
import { _breeds, _breedImages } from "../../__mock__/apiMocks";
import store from "../store";
import axios from "axios";

jest.mock("axios");
afterEach(cleanup);

const HOC = (populated = true) => {
    axios.get.mockImplementation(url => {
        switch (url) {
            case "https://api.thecatapi.com/v1/breeds":
                return Promise.resolve({ data: populated ? _breeds : [] });
            case "https://api.thecatapi.com/v1/images/search?breed_ids=aege&limit=100":
                return Promise.resolve({ data: _breedImages });
            default:
                return Promise.reject(new Error("not found"));
        }
    });
    const { getByTestId, getAllByTestId } = render(<Cats />);
    const arrLen = _breeds.length;
    const dropdown = getByTestId("dropdown-test-id");
    return { getByTestId, arrLen, dropdown, getAllByTestId };
};

test("Dropdown is empty on mount", async () => {
    const { dropdown } = HOC(false);
    expect(dropdown.children.length).toEqual(1);
});

test("Dropdown is populated with cat breeds", async () => {
    const { dropdown, arrLen } = HOC();
    expect(dropdown.children.length).toEqual(1);
    await waitFor(() => expect(dropdown.children.length).toEqual(arrLen + 1));
});

test("Option is selected and search button fetches cat images", async () => {
    const { getAllByTestId, getByTestId, dropdown } = HOC();
    // if you want to randomise... no need throw, our mock is dynamic
    // const { id, name } = _breeds[Math.floor(Math.random() * Math.floor(66))];
    const { id, name } = _breeds[1];
    const optionVal = `${name},${id}`;
    fireEvent.change(dropdown, { target: { value: [name, id] } });
    let options = getAllByTestId("breed-type");
    const index = options.findIndex(opt => opt.value === optionVal);
    expect(options[index].selected).toEqual(true);

    const imgGrid = getByTestId("cats-grid");
    expect(imgGrid.children.length).toEqual(0);
    fireEvent.click(getByTestId("search-btn"));
    expect(store.getState().loader.isLoading).toEqual(true);

    await waitFor(() => {
        expect(store.getState().loader.isLoading).toEqual(false);
    });
    expect(getAllByTestId("img-cont").length).toEqual(_breedImages.length);
});

test("logouts when logout is clicked", async () => {
    const { getByTestId } = render(<Cats />);
    fireEvent.click(getByTestId("logout-btn"));
    expect(store.getState().auth.loggedIn).toBe(false);
});

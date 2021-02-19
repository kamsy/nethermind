import React from "react";
import Login from "../pages/Login";
import { render, fireEvent, cleanup } from "../utils/test-utils";
import store from "../store";

afterEach(cleanup);

test("submits and routes to Cats page when button is clicked", async () => {
    const { getByTestId } = render(<Login />);
    fireEvent.click(getByTestId("login-btn"));
    expect(store.getState().auth.loggedIn).toBe(true);
});

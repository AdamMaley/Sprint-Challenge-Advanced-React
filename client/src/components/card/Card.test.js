import React from "react";
import ReactDOM from "react-dom";

import Card from './Card.js';
import { render, cleanup } from "@testing-library/react";


afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("button");
    ReactDOM.render(<button></button>, div)
})

it("renders button correctly", () => {
    render(<button label="show searches"></button>)
    expect(getByTestId("button")).toHaveTextConent("show searches")
    
})

import React from "react"
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from './Header';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should display login initially", () => {
    act(() => {
        render(<Header/>, container);
    });
    expect(container.querySelector("button").textContent).toBe('Login');
});

it("should change values when clicked", () => {
    act(() => {
        render(<Header/>, container);
    });
    const button = document.querySelector("button");
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    });
    expect(container.querySelector("button").textContent).toBe('Logout');

});
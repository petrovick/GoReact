import React from "react";

import { mount } from "enzyme";
import TodoList from "../../TodoList";
import { exportAllDeclaration } from "@babel/types";

it("should render the list and button", () => {
    const wrapper = mount(<TodoList />);

    expect(wrapper.find("ul").exists()).toBe(true);
    expect(wrapper.find("input[name='todo']").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
});

it("Should be able to add new todo", () => {
    const wrapper = mount(<TodoList />);

    //Set value for input
    wrapper.find("input[name='todo']").simulate("change", {
        target: { value: "Novo todo" }
    });

    //Click on button
    wrapper.find("button").simulate("click");

    expect(wrapper.find("ul").contains(<li>Novo todo</li>)).toBe(true);
});

it("Should add new todos to local storage", () => {
    const setItemMock = jest.fn();

    global.localStorage.__proto__.getItem = jest.fn().mockReturnValue("[]");
    global.localStorage.__proto__.setItem = setItemMock;

    const wrapper = mount(<TodoList />);

    wrapper.setState({ newTodo: "Novo todo" });
    wrapper.instance().handleAddTodo();

    expect(setItemMock).toHaveBeenLastCalledWith(
        "todos",
        JSON.stringify(["Novo todo"])
    );
});

it("Should load todos in componentDidMount", () => {
    const getItemMock = jest
        .fn()
        .mockReturnValue(JSON.stringify(["Fazer cafe"]));
    global.localStorage.__proto__.getItem = getItemMock;
    const wrapper = mount(<TodoList />);
    expect(wrapper.state("todos")).toEqual(["Fazer cafe"]);
});

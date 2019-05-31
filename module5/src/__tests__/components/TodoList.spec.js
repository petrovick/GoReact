import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import TodoList from "../../TodoList";

import { Creators as TodoActions } from "../../store/ducks/todos";

const mockStore = createStore();

const INITIAL_STATE = {
    todos: { data: ["Fazer Cafe", "Estudar React"] }
};

const store = mockStore(INITIAL_STATE);

it("should render the list", () => {
    const wrapper = mount(
        <Provider store={store}>
            <TodoList />
        </Provider>
    );

    console.log(wrapper.html());

    expect(wrapper.find("li").length).toBe(2);
    /*
    expect(wrapper.find("ul").exists()).toBe(true);
    expect(wrapper.find("input[name='todo']").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
    */
});
it("Should me able to add new todos", () => {
    const wrapper = mount(
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
    wrapper.find('TodoList').setState({ newTodo: "Novo todo" });
    wrapper.find("button").simulate("click");
    /*
    expect(store.getState().todos.data).toEqual([
        "Fazer Cafe",
        "Estudar React",
        "Novo todo"
    ]);*/
    expect(store.getActions()).toContainEqual(TodoActions.addTodo("Novo todo"));
});
/*
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
    const getItemMock = jest.fn()
        .mockReturnValue(JSON.stringify(["Fazer cafe"]));
    global.localStorage.__proto__.getItem = getItemMock;
    const wrapper = mount(<TodoList />);
    expect(wrapper.state("todos")).toEqual(["Fazer cafe"]);
});
*/

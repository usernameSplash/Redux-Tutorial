import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text: text,
    };
};

const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ id: Date.now(), text: action.text }, ...state];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
    store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (event) => {
    const id = parseInt(event.target.parentNode.id);
    store.dispatch(deleteTodo(id));
};

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach((todo) => {
        const li = document.createElement("li");
        li.id = todo.id;
        li.innerText = todo.text;

        const btn = document.createElement("button");
        btn.innerText = "❌";

        btn.addEventListener("click", dispatchDeleteTodo);
        li.appendChild(btn);

        ul.appendChild(li);
    });
};

store.subscribe(paintToDos);

const onSubmit = (event) => {
    event.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);

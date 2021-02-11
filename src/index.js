import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = "0";

const countModifier = (count = 0, action) => {
    if (action.type === "PLUS") {
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    }
    return count;
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

plus.addEventListener("click", () => {
    countStore.dispatch({ type: "PLUS" });
});

minus.addEventListener("click", () => {
    countStore.dispatch({ type: "MINUS" });
});

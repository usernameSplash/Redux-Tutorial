const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateNumber = () => {
    number.innerText = count;
};

const plusHandler = () => {
    count = count + 1;
    updateNumber();
};

const minusHandler = () => {
    count = count - 1;
    updateNumber();
};

plus.addEventListener("click", plusHandler);
minus.addEventListener("click", minusHandler);

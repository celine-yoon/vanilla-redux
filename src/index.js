const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

const updateNumber = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count++;
  updateNumber();
};

const handleMinus = () => {
  count--;
  updateNumber();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

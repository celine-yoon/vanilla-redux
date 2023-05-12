import { createStore } from "redux/";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log("store", store.getState()));

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleteToDo = (event) => {
  console.log(event.target.parentNode.id);
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.id = toDo.id;
    li.innerText = toDo.text;
    btn.innerText = "DEL";
    btn.addEventListener("click", deleteToDo);
    ul.appendChild(li);
    li.appendChild(btn);
  });
};

store.subscribe(paintToDos);

const onSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);

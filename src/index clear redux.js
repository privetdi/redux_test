import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//createStore создает store
import { createStore } from "redux";

const testButton = document.querySelector(".testButton");
const items = document.querySelector(".testUl");

testButton.addEventListener("click", () => {
  const imputValue = document.querySelector(".testInput").value;
  store.dispatch({ type: "WRITE", payload: imputValue });
  console.log(
    "🚀 ~ file: index.js:42 ~ start ~   store.getState()",
    store.getState()
  );
  document.querySelector(".testInput").value = "";
  /*   document.querySelector('.testInput').value = ""; */
});
//создаём хранилище
const store = createStore(changeStore);
//при изменении стора
store.subscribe(() => {
  items.innerHTML = "";

  store.getState().map((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    items.appendChild(li);
  });
});

//процедура изменения стора РЕДЬЮСЕР
//actions Обычный JS-объект, с обязательным полем type, указывающим на тип действия. 
//Передается как аргумент в dispatch 
function changeStore(state = [], actions) {
  switch (actions.type) {
    case "WRITE":
      return [...state, actions.payload];
      break;
    default:
      return state;
  }
}
//посмотреть стор
console.log("getState ", store.getState());
//подписка на изменения стор */

//действие
store.dispatch({ type: "WRITE", payload: "123" });

//Возвращает текущее состояние вашего приложения.
// Оно равно последнему возвращаемому значению из reducer-а stora-а
store.getState();

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

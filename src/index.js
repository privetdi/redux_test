import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReduxApp from "./App-redux";

//через провайдер пробрасываем пропсы
import { Provider } from "react-redux";

//createStore создает store
import { createStore } from "redux";

const initianState = ['react', 'redux']
const store = createStore(changeStore);

function changeStore(state = [], actions) {
  switch (actions.type) {
    case "WRITE":
      return [...state, actions.payload];
      break;
    default:
      return state;
  }
}
{
/* const testButton = document.querySelector(".testButton");
const items = document.querySelector(".testUl");

 */
/* testButton.addEventListener("click", () => {
  const imputValue = document.querySelector(".testInput").value;
  store.dispatch({ type: "WRITE", payload: imputValue });
  console.log(
    "🚀 ~ file: index.js:42 ~ start ~   store.getState()",
    store.getState()
  );
  document.querySelector(".testInput").value = "";

});
//создаём хранилище

//при изменении стора
store.subscribe(() => {
  items.innerHTML = "";

  store.getState().map((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    items.appendChild(li);
  });
}); */

//процедура изменения стора РЕДЬЮСЕР
//actions Обычный JS-объект, с обязательным полем type, указывающим на тип действия. 
//Передается как аргумент в dispatch 

/* //посмотреть стор
console.log("getState ", store.getState());
//подписка на изменения стор */

/* //действие
store.dispatch({ type: "WRITE", payload: "123" }); */

//Возвращает текущее состояние вашего приложения.
/* // Оно равно последнему возвращаемому значению из reducer-а stora-а
store.getState(); */ 
}





//через провайдер пробрасываем пропсы
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

    <ReduxApp />

    </Provider>

);

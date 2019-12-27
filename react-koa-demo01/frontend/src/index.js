import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./routers/route";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// 处理catch之后的.then()处理
window.addEventListener("error",(e)=>{
    e.preventDefault()
});

window.addEventListener("unhandledrejection", (e, promiseRejection) => {
  e.preventDefault();
  promiseRejection.catch(err=>{
      console.log('err', err)
  })
});

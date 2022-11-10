import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { store } from "../src/redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./assets/main.css";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
  </Provider>
    ,
  document.getElementById("root")
);
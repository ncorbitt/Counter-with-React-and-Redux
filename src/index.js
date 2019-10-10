import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers/counter";

const store = createStore(reducer, undefined);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

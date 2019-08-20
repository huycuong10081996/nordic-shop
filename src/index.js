import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index.js";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

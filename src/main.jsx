import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import store from "./redux/store";
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

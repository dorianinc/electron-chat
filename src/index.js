// React imports
import React from "react";
import ReactDOM from "react-dom";

// Redux imports
import { Provider } from "react-redux";
import configureStore from "./store";

// React Router imports
import { HashRouter } from "react-router-dom";

// Component and styling imports
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("chatApp")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the root component
import 'bootstrap/dist/css/bootstrap.min.css';

function Root() {
  return <App />;
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

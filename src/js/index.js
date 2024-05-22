import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the root component

function Root() {
  return <App />;
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

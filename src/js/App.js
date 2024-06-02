import Badge from 'react-bootstrap/Badge';
import React from "react";

function App() {

  // const sendNotification = () => {
  //   electron.notificationApi.sendNotification("My custom message in app")
  // }

  return (
    <div className="app">
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
    </div>
  );
}

export default App;
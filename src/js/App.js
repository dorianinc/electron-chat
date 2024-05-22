import React from 'react';

function App() {

  const sendNotification = () => {
    electron.notificationApi.sendNotification("My custom message in app")
    // e_notification.sendNotification("My custom message in app")

  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Hello World</h1>
        <button onClick={sendNotification}>Send Notification</button>
      </header>
    </div>
  );
}

export default App;
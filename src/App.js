import React from "react";
import HomeView from './views/Home';

const App = () => {

  // const sendNotification = () => {
  //   electron.notificationApi.sendNotification("My custom message in app")
  // }

  return (
    <div className="app">
      <HomeView/>
    </div>
  );
}

export default App;
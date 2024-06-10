import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import HomeView from "./views/Home";


const App = () => {
  const location = useLocation();
  console.log("location => ", location.pathname);
  // const sendNotification = () => {
  //   electron.notificationApi.sendNotification("My custom message in app")
  // }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

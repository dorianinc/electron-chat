import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import Settings from "./views/Settings";

const App = () => {
  const location = useLocation();
  console.log("location => ", location.pathname);
  // const sendNotification = () => {
  //   electron.notificationApi.sendNotification("My custom message in app")
  // }

  return (
    <div className="content-wrapper">
      <NavBar />

      <Switch>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

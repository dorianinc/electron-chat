import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Chat from "./views/Chat";
import NavBar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import Settings from "./views/Settings";

const App = () => {
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
        <Route path="/chat/:id">
          <Chat />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

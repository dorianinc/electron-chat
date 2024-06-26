import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "./views/Home";
import ChatView from "./views/Chat";
import NavBar from "./components/Navbar";
import WelcomeView from "./views/Welcome";
import SettingsView from "./views/Settings";



const App = () => {


  return (
    <div className="content-wrapper">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <WelcomeView />
        </Route>
        <Route path="/home">
          <HomeView />
        </Route>
        <Route path="/chat/:id">
          <ChatView />
        </Route>
        <Route path="/settings">
          <SettingsView />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

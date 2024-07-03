import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeView from "./views/Home";
import ChatView from "./views/Chat";
import NavBar from "./components/Navbar";
import WelcomeView from "./views/Welcome";
import SettingsView from "./views/Settings";

const App = () => {
  const [userExist, setUserExist] = useState(false);
  const fetchUser = useSelector((state) => state.auth);

  const alertOnlineStatus = () => {
    window.alert(navigator.onLine ? "online" : "offline");
  };

  useEffect(() => {
    if (fetchUser.username) {
      setUserExist(true);
    } else {
      setUserExist(false);
    }
  }, [fetchUser]);

  // useEffect(() => {
  //   window.addEventListener("online", alertOnlineStatus());
  //   window.addEventListener("offline", alertOnlineStatus());

  //   return () => {
  //     window.removeEventListener("online", alertOnlineStatus());
  //     window.removeEventListener("offline", alertOnlineStatus());
  //   };
  // }, []);

  return (
    <div className="content-wrapper">
      <NavBar userExist={userExist} />
      <Switch>
        <Route exact path="/">
          {!userExist ? <WelcomeView /> : <HomeView />}
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

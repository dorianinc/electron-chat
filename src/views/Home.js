import React, { useEffect } from "react";
import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import { fetchAllChats } from "../api/chats";

const Home = () => {
  useEffect(() => {
    fetchAllChats().then((data) => {
      console.log("data => ", data);
    });
  }, []);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList />
      </div>
      <div className="col-9 fh">
        <ViewTitle />
        <div className="container-fluid">
          <AvailableChatsList />
        </div>
      </div>
    </div>
  );
};

export default Home;

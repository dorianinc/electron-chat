import React, { useEffect } from "react";
import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatsThunk } from "../store/chats";

const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => Object.values(state.chats));


  useEffect(() => {
    dispatch(fetchChatsThunk());
  }, [dispatch]);

  if (!chats.length) return null;
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList chats={chats}/>
      </div>
      <div className="col-9 fh">
        <ViewTitle />
        <div className="container-fluid">
          <AvailableChatsList chats={chats}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

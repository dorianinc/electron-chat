import React, { useEffect } from "react";
import JoinedChatsList from "../components/JoinedChatsList";
import AvailableChatsList from "../components/AvailableChatsList";
import ViewTitle from "../components/shared/ViewTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatsThunk } from "../store/chats";

const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector(state => {
    console.log(state)
  })

  useEffect(() => {
    dispatch(fetchChatsThunk());
  }, [dispatch]);

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

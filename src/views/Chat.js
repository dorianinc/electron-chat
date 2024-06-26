import React from "react";
import { useParams } from "react-router-dom";

import ChatUserList from "../components/ChatUsersList";
import ChatMessagesList from "../components/ChatMessagesList";
import ViewTitle from "../components/shared/ViewTitle";

export default function ChatView() {
  const params = useParams();

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle channelName={params.id} />
        <ChatMessagesList />
      </div>
    </div>
  );
}

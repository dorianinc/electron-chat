import React from "react";
import { useHistory } from "react-router-dom";

const AvailableChatsList = ({ chats }) => {
  const history = useHistory();
  return (
    <div className="row mt-3">
      {!chats.length && (
        <div className="container-fluid">
          <div className="alert alert-warning">No chats to join :(</div>
        </div>
      )}
      {chats.map((chat) => (
        <div className="col-lg-3 col-md-6 mb-3" key={chat.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{chat.name}</h5>
              <p className="card-text">{chat.description}</p>
              <button
                onClick={() => history.push("/chat/1")}
                className="btn btn-outline-primary"
              >
                Join Chat
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableChatsList;

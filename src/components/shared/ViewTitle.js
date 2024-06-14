import React from "react";
import { useHistory } from "react-router-dom";

export default function ViewTitle({ channelName }) {
  const history = useHistory();

  return (
    <div className="chat-name-container">
      <span className="name">{!channelName ? "Choose your channel" : `Joined Channel: ${channelName}`}</span>
      <button
        onClick={() => history.goBack()}
        className="btn btn-primary btn-sm back-button"
      >
        Back
      </button>
    </div>
  );
}

import React from "react";

import "./Chat.scss";
import flowingChat from "../../utils/icons/chat.svg";

export const Chat = () => {
  return (
    <div className="chat__icon">
      <a href="#form">
        <img src={flowingChat} alt="chat_icon" />
      </a>
    </div>
  );
};

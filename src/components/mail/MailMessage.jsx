import React from "react";

const MailMessage = (messages) => {
  return (
    <div className="message-list">
      <h3>MailMessage Here</h3>
      {messages.map((message) => {
        return <div>{message.title}</div>;
      })}
    </div>
  );
};

export default MailMessage;

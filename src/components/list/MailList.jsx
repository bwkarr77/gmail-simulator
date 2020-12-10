import React from "react";

import MailCard from "../mail/MailCard.jsx";

const MailList = ({ messages }) => {
  console.log("mail:", messages);
  return (
    <div className="message-list">
      <h3>MailMessage Here</h3>
      {messages.map((message) => {
        return (
          <div>
            {message.title}
            <MailCard message={message} />
          </div>
        );
      })}
    </div>
  );
};

export default MailList;

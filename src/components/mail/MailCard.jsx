import React from "react";

const MailCard = ({ message }) => {
  return (
    <div className="mail-card">
      <div className="mail-section">
        <div className="mail-tag">{message.name[0]}</div>
        {/* <div className="mail-tag">
          <p>{message.name[0]}</p>
        </div> */}
        <div className="mail-content">
          <p className="mail-author">{message.name}</p>
          <p className="mail-title">{message.title}</p>
          <p className="mail-message">{message.message}</p>
        </div>
        <div className="mail-right-side">
          <p className="mail-time">11:58 AM</p>
        </div>
      </div>
    </div>
  );
};

export default MailCard;

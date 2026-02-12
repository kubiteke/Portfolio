import React from "react";

const Yorum = ({ yorum }) => {
  const { username, text } = yorum;

  return (
    <div className="comment-text" data-testid="yorum-area">
      <span className="user">{username}</span>{" "}
      <span className="comment">{text}</span>
    </div>
  );
};

export default Yorum;

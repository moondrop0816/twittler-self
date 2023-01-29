import { useState, useRef } from "react";

const Tweet = ({ tweet, deleteTweet }) => {
  const parseDate = (createdAt) =>
    new Date(createdAt).toLocaleDateString("ko-KR");
  const [isEdit, setIsEdit] = useState(false); // 트윗 수정상태
  const textRef = useRef();
  const onEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <li>
      <div className="tweet-avatar">
        <img src={tweet.picture} />
      </div>
      <div className="tweet-content">
        <div className="tweet-info">
          <span className="tweet-username">{tweet.username}</span>
          <span className="tweet-date">{parseDate(tweet.createdAt)}</span>
          <button onClick={() => deleteTweet(tweet.id)}>delete</button>
        </div>
        {isEdit ? (
          <textarea
            className="tweet-msg-edit"
            value={tweet.content}
            style={{ height: textRef.current.offsetHeight + "px" }}
            onClick={onEdit}
          ></textarea>
        ) : (
          <div className="tweet-msg" ref={textRef} onClick={onEdit}>
            {tweet.content}
          </div>
        )}
      </div>
    </li>
  );
};

export default Tweet;

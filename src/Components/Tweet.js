import { useState, useRef } from "react";

const Tweet = ({ tweet, deleteTweet, updateTweet }) => {
  const parseDate = (createdAt) =>
    new Date(createdAt).toLocaleDateString("ko-KR");
  const [isEdit, setIsEdit] = useState(false); // 트윗 수정상태
  const [updateMsg, setUpdateMsg] = useState(tweet.content);
  const textareaRef = useRef();

  const onEdit = () => {
    setIsEdit(true);
  };
  const handleUpdateMsg = (event) => {
    setUpdateMsg(event.target.value);
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };
  const onUpdate = (id, content) => {
    setIsEdit(false);
    updateTweet(id, content);
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
          <>
            <textarea
              className="tweet-msg-edit"
              rows="7"
              value={updateMsg}
              ref={textareaRef}
              onChange={handleUpdateMsg}
            ></textarea>
            <button onClick={() => onUpdate(tweet.id, updateMsg)}>edit</button>
          </>
        ) : (
          <div className="tweet-msg" onClick={onEdit}>
            {tweet.content}
          </div>
        )}
      </div>
    </li>
  );
};

export default Tweet;

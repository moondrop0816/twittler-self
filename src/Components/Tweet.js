const Tweet = ({ tweet }) => {
  const parseDate = (createdAt) =>
    new Date(createdAt).toLocaleDateString("ko-KR");
  return (
    <li>
      <div className="tweet-avatar">
        <img src={tweet.picture} />
      </div>
      <div className="tweet-content">
        <div className="tweet-info">
          <span className="tweet-username">{tweet.username}</span>
          <span className="tweet-date">{parseDate(tweet.createdAt)}</span>
        </div>
        <div className="tweet-msg">{tweet.content}</div>
      </div>
    </li>
  );
};

export default Tweet;

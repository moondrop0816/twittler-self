import Tweet from "../Components/Tweet";
import dummyTweets from "../static/dummyData";

const MyPage = () => {
  const filtered = dummyTweets.filter((el) => el.username === "harry00700");
  return (
    <div className="mypage">
      <div className="profile">
        <div className="tweet-avatar">
          <img src="https://randomuser.me/api/portraits/women/50.jpg" />
        </div>
        <div className="tweet-info-wrapper">
          <div className="tweet-username">harry00700</div>
          <div className="tweet-follow">20 follower 150 follwing</div>
        </div>
      </div>
      <ul className="tweet-list">
        {filtered.map((tweet) => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))}
      </ul>
    </div>
  );
};

export default MyPage;

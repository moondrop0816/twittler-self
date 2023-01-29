import { useState, useRef, useEffect } from "react";
import Tweet from "../Components/Tweet";
import dummyTweets from "../static/dummyData";

const Tweets = () => {
  const [tweetList, setTweetList] = useState([]);
  const [user, setUser] = useState("parkhacker");
  const [msg, setMsg] = useState("");
  const nextId = useRef(6);

  const getTweetList = JSON.parse(localStorage.getItem("tweetAdded"));
  useEffect(() => {
    if (getTweetList !== null) {
      setTweetList(getTweetList);
      nextId.current = getTweetList[0].id + 1;
    } else {
      setTweetList(dummyTweets);
    }
  }, []);

  const handleUser = (event) => {
    setUser(event.target.value);
  };

  const handleMsg = (event) => {
    setMsg(event.target.value);
  };

  const addTweet = () => {
    if (msg === "") {
      alert("트윗 내용을 적어주세요.");
    } else {
      const tweet = {
        id: nextId.current,
        username: user,
        picture: `https://randomuser.me/api/portraits/men/98.jpg`,
        content: msg,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setTweetList([tweet, ...tweetList]);
      setUser("parkhacker");
      setMsg("");
      nextId.current += 1;
      localStorage.setItem("tweetAdded", JSON.stringify([tweet, ...tweetList]));
    }
  };

  const deleteTweet = (id) => {
    const deleteList = tweetList.filter((tweet) => tweet.id !== id);
    setTweetList(deleteList);
    localStorage.setItem("tweetAdded", JSON.stringify(deleteList));
  };

  // const editTweet = () => {
  //   setTweetList(
  //     if ()
  //   )
  // }

  return (
    <div className="tweets">
      <div className="tweet-form">
        <div className="tweet-avatar">
          <img src="https://randomuser.me/api/portraits/men/98.jpg" />
        </div>
        <div className="tweet-input-wrapper">
          <div>
            <input type="text" value={user} onChange={handleUser} />
            <textarea value={msg} onChange={handleMsg}></textarea>
          </div>
          <div className="tweet-buttons">
            <button type="button" onClick={addTweet}>
              send
            </button>
            <button onClick={() => localStorage.clear("tweetAdded")}>
              localstorage clear
            </button>
          </div>
        </div>
      </div>
      <ul className="tweet-list">
        {tweetList.map((tweet) => {
          return (
            <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} />
          );
        })}
      </ul>
    </div>
  );
};

export default Tweets;

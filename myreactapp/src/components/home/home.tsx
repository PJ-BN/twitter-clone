// NewNavbar.jsx
import React, { useCallback, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment, faRetweet, faHeart, faEye, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import "./home.css"; // Import the CSS file for styling
import Tweet from "../tweet";
import Post from "./post";
import Cookies from "js-cookie";



interface Tweets {
  id: number;
  content: string;
}

const CentralNavbar = () => {
  const [tweets, setTweets] = useState<Tweets[]>([]);
  const [newTweet, setNewTweet] = useState<string>("");
  const [hasFetched, setHasFetched] = useState(false);
  const user = {

    user : "Prajwal Bhandari",
    username : Cookies.get('username')?? ""
  }

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      setHasFetched(true)
      const newTweetObject: Tweets = {
        id: Date.now(),
        content: newTweet,
      };

      Post(newTweetObject)

      setTweets([...tweets, newTweetObject]);
      setNewTweet("");
    }
  };
  const handleForYouClick = () => {
    // Handle For You button click
    console.log("For You clicked");
    // Add your custom function logic here
  };

  const handleFollowingClick = () => {
    // Handle Following button click
    console.log("Following clicked");
    // Add your custom function logic here
  };

  const handleSettingsClick = () => {
    // Handle Settings button click
    console.log("Settings clicked");
    // Add your custom function logic here
  };

  useCallback(() => {
    console.log(hasFetched)

  },[hasFetched])

  return (
    <div className="central-home">
      <div className="new-navbar">
        <button className="nav-button for-you" onClick={handleForYouClick}>
          For You
        </button>
        <button className="nav-button following" onClick={handleFollowingClick}>
          Following
        </button>
        <button
          className="nav-link settings-button"
          onClick={handleSettingsClick}
        >
          ⚙️
        </button>
        <hr className="line" />
        <hr className="line" />
        <hr className="line" />
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="post-tweet">
        {/* <h1>helloworld</h1> */}
        {/* <TweetSection /> */}
        <div>
          <img
            src={process.env.PUBLIC_URL + "luffy.jpg"}
            alt="profile-pic"
            className="profile-pic"
          />
        </div>
        <div>
          <textarea
            placeholder="What's happening?"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            className="textarea-tweet"
          ></textarea>
          <div className="tweet-div">
            <button className="tweet-button" onClick={handleTweetSubmit}>
              Tweet
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="tweet-secti">
        {/* {tweets.map((tweet) => ( */}
          
          
          <Tweet    user = {user} fetched = {hasFetched}/>
        {/* ))} */}
      </div>
    </div>
  );
};

export default CentralNavbar;

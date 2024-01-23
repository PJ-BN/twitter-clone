// NewNavbar.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faEye, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import "./home.css"; // Import the CSS file for styling

interface Tweet {
  id: number;
  content: string;
}

const CentralNavbar = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [newTweet, setNewTweet] = useState<string>("");

  const user = "Prajwal Bhandari";
  const username = "Prajwal12";

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      const newTweetObject: Tweet = {
        id: Date.now(),
        content: newTweet,
      };

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
          <hr />
          <div className="tweet-div">
            <button className="tweet-button" onClick={handleTweetSubmit}>
              Tweet
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="tweet-secti">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="tweet-section">
            <div className="post post-tweet">
              <div className="profile-pic">
                <img
                  src={process.env.PUBLIC_URL + "luffy.jpg"}
                  alt="profile-pic"
                  className="profile-pic"
                />
              </div>
              <div className="tweet-content">
                <div className="tweet-user">
                  <b>{user}</b>
                  <span>@{username}</span>
                </div>
                <div className="tweet-value">
                  <p>{tweet.content}</p>
                </div>
                <br />
                <div className="below-section">
                  <div className="icon-container">
                    <button className="icon-button">
                      <FontAwesomeIcon icon={faComment} className="icon" />
                    </button>
                    <button className="icon-button">
                      <FontAwesomeIcon icon={faRetweet} className="icon" />
                    </button>
                    <button className="icon-button">
                      <FontAwesomeIcon icon={faHeart} className="icon" />
                    </button>
                    <button className="icon-button">
                      <FontAwesomeIcon icon={faEye} className="icon" />
                    </button>
                    <div>
                      <button className="icon-button">
                        <FontAwesomeIcon icon={faBookmark} className="icon" />
                      </button>
                      <button className="icon-button">
                        <FontAwesomeIcon icon={faShare} className="icon" />
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CentralNavbar;

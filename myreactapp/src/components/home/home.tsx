// NewNavbar.jsx
import React, { useState} from 'react';
// import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file for styling


interface Tweet {
  id: number;
  content: string;
}

const CentralNavbar = () => {

  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [newTweet, setNewTweet] = useState<string>('');

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== '') {
      const newTweetObject: Tweet = {
        id: Date.now(),
        content: newTweet,
      };

      setTweets([...tweets, newTweetObject]);
      setNewTweet('');
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
        <div className='central-home'>

            <div className="new-navbar">
                <button className="nav-button for-you" onClick={handleForYouClick}>
                For You
                </button>
                <button className="nav-button following" onClick={handleFollowingClick}>
                Following
                </button>
                <button className="nav-link settings-button" onClick={handleSettingsClick}>
                ⚙️
                </button>
              <hr className="line" /> 
              <hr className="line" /> 
              <hr className="line" /> 
              
             </div>
                
              <br />
              <br /><br />
              <br />
            <div className='post'>

                 {/* <h1>helloworld</h1> */}
                 {/* <TweetSection /> */}
                 <div>
                    <img src={process.env.PUBLIC_URL +"luffy.jpg"} alt="profile-pic" className='profile-pic'/>
                 </div>
                 <div>
                  <textarea
                    placeholder="What's happening?"
                    value={newTweet}
                    onChange={(e) => setNewTweet(e.target.value)}
                  ></textarea>
                  <button onClick={handleTweetSubmit}>Tweet</button>

                  <div>
                    {tweets.map((tweet) => (
                      <div key={tweet.id}>
                        <p>{tweet.content}</p>
                      </div>
                    ))}
                  </div>
                 </div>
                
            </div>

            
        </div>
    );
};

export default CentralNavbar;

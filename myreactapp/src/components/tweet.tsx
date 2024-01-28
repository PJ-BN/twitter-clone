import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faComment, faRetweet, faHeart, faEye, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';

interface ChildProps{
    tweet:{
        id:number;
        content: string;
    }
    user:{
        user: string;
        username:string;
    }
}

const Tweet: React.FC<ChildProps> = ({tweet, user})=> {
    return (
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
                  <b>{user.user}</b>
                  <span>@{user.username}</span>
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
    )
}

export default Tweet

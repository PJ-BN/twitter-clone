import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { faComment, faRetweet, faHeart, faEye, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';

interface ChildProps{
    
    user:{
        user: string;
        username:string;
    }
    fetched: boolean;
}

const Tweet: React.FC<ChildProps> = ({ user, fetched})=> {
  const [data, setData] = useState<any[]>([]);
  const [hasFetched, setHasFetched] = useState(fetched);
  // setHasFetched(fetched)
 
  interface userdatas{
    username: string;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userdata:userdatas = {
    
    username: user.username,
    
  }
  

  useEffect(() => {

    const fetchData = async ({userdata}: {userdata: userdatas}) => {
      try {
        const response = await axios.post('api/tweet/1/',userdata)
        setData(response.data)
        setHasFetched(true);

              
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      // setHasFetched(false);

    
    }
  
    if (!hasFetched) {
      fetchData({ userdata });
    }
  }, [hasFetched, userdata])
  console.log( data)



    return (
      <div>
        {data.slice()
          .sort((a, b) => b.id - a.id)
          .map((tweet) => (

          
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
                  <p>{tweet.tweet}</p>
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
    )
}

export default Tweet

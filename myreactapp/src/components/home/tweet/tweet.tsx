/**
 * This function takes in a number and returns its square.
 * @param {number} num - The number to be squared.
 * @returns {number} The square of the input number.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { faComment, faRetweet, faHeart, faEye, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./tweet.css"



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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const loaderRef = useRef(null);
 
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
        // eslint-disable-next-line no-template-curly-in-string
        const response = await axios.post('api/tweet/1/?page=${currentPage}/',userdata)
        // setData(response.data.data)
        setData((prevData) => [...prevData, ...response.data.data]);
        setTotalPages(response.data.total_pages);
        setHasFetched(true);

              
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      // setHasFetched(false);

    
    }
  
    if (!hasFetched) {
      fetchData({ userdata });
    }
  }, [hasFetched, userdata, currentPage])
  console.log( data)
  
  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.5,
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(loaderRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaderRef, totalPages]);
  console.log(currentPage, totalPages)


    return (
      <div>
        {data.slice()
          .sort((a, b) => b.id - a.id)
          .map((tweet) => (

          
          <div key={currentPage+""+tweet.id} className="tweet-section">
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
                  <Link to={user.username}  className="tweet-username" replace>

                  <b>{user.user}</b>
                  </Link>
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

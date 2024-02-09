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
        profile:boolean;
    }
    fetched: boolean;
    startpage:number;
}

const Tweet: React.FC<ChildProps> = ({ user, fetched, startpage})=> {
  const [data, setData] = useState<any[]>([]);
  const [hasFetched, setHasFetched] = useState(fetched);

  const [page, setPage] = useState(startpage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const loaderRef = useRef(null);
 
  interface userdatas{
    username: string;
    profile: boolean;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userdata:userdatas = {
    
    username: user.username,
    profile : user.profile,
    
  }
  

  useEffect(() => {
    const fetchData = async ({userdata}: {userdata: userdatas}) => {
      
      setLoading(true);
      try {
        console.log("page:"+page)
        const url = "api/tweet/1/?page="+page
        // eslint-disable-next-line no-template-curly-in-string
        axios.post(url,userdata)
        .then(response =>{

          console.log(response.data.data)
          setData((prevData) => [...prevData, ...response.data.data]);
          setHasMore(response.data.total_pages > page);
          // setTotalPages(response.data.total_pages);
          // setTotalPages(response.data.total_pages);
        })

              
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally{
        setLoading(false)

      }
      // setHasFetched(false);

    
    }
    
    
    if (hasMore && !loading && !hasFetched)  {
      setHasMore(false)
      setHasFetched(true);
      fetchData({ userdata });
      
    }
  
  }, [hasFetched, hasMore, loading, page, userdata]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: 1.0,
    };
    console.log("loading :"+loading)

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        setPage(prevPage => prevPage + 1);
        console.log("at last")

        setHasFetched(false)
      }
    }, options);

    if (observer.current) {
      observer.current.observe(document.querySelector('#scrollObserver') as Element);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, hasMore]);
  console.log(data)

    return (
      <div>
        {/* slice()
          .sort((a, b) => b.id - a.id) */}
        {data.map((tweet) => (

          
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
                  <Link to={tweet.username}  className="tweet-username" replace>

                  <b>{tweet.name}</b>
                  </Link>
                  <span>@{tweet.username}</span>
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
       <div id="scrollObserver" style={{ height: '10px', margin: '5px' }}></div>
      {loading && <div>Loading...</div>}
    
      </div>
    )
}

export default Tweet

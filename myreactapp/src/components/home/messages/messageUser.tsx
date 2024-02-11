import React , {useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import faSearch icon
import axios from 'axios';
import Cookies from 'js-cookie';


import "./message.css"

interface MessageProps {
    content: string;
    sender: string;
    timestamp: string;
}


const Message: React.FC<MessageProps> = ({ content, sender, timestamp }) => {

    const divRefs = useRef<Array<HTMLDivElement | null>>([]);

    const [followerData, setfollowerData] = useState<any[]>([]);

    
   // Function to handle clicking the div
   const userClicked = (index: number, followers: object) => {
    console.log('user clicked');
    console.log(followers)
    if (divRefs.current[index]) {
      divRefs.current[index]?.focus();
    }
  };
    interface sendUsername {
        username: string;
    }

    
    useEffect(() => {
        const sendUsernameToServer: sendUsername = {
            username: Cookies.get("username") as string
        }
        const fetchData = async () => {
          try {
            const url = "api/get/followers/"
            axios.post(url, sendUsernameToServer)
            .then(response =>{
              setfollowerData(response.data)
            })
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
      }, [])

      console.log(followerData)
    
    return (
        <div className="message">
            {/* <div className="message-sender">{sender}</div>
            <div className="message-content">{content}</div>
            <div className="message-timestamp">{timestamp}</div> */}

            <div className='top-section'>
                <b>Messages</b>
                {/* Setting icon */}
                <FontAwesomeIcon icon={faCog} />
                {/* New mail icon */}
                <FontAwesomeIcon icon={faEnvelope} />
                {/* Search icon */}

            </div>

            <div className='top-search-bar'>
                <input type="text"  className='search-bar' placeholder=" Search Profile"/>
            </div>

            <div className='message-user'>
                {/* <nav> */}
                {followerData.map((followers, index) => (
                
                    <div 
                    key={followers.id} 
                    className="tweet-section" 
                    onClick={ () => userClicked(index, followers)}
                    tabIndex={0} // Make the div focusable
                    ref={(el) => (divRefs.current[index] = el)} 
                    >
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

                                        <b>{followers.name}</b>
                                        <span className='span-username'>@{followers.username} .</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                )
                )
            }


                    


            </div>

        </div>
    );
};

export default Message;

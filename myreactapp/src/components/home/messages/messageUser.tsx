import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import faSearch icon
import "./message.css"

interface MessageProps {
    content: string;
    sender: string;
    timestamp: string;
}


const Message: React.FC<MessageProps> = ({ content, sender, timestamp }) => {

    const tweet = {
        id: 1,
        name: "Luffy",
        username: "luffy",
        content: "I'm gonna be the king of the pirates",
        date: "2021-08-02",
        avatar: "luffy.jpg"
    }
    
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
                <nav>

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

                                        <b>{tweet.name}</b>
                                        <span className='span-username'>@{tweet.username} .</span>
                                    </div>
                            </div>
                        </div>
                    </div>

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

                                        <b>{tweet.name}</b>
                                        <span className='span-username'>@{tweet.username} .</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </nav>


            </div>

        </div>
    );
};

export default Message;

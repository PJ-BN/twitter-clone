import React , {useState} from 'react';
import "./messageContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';




const MessageContent: React.FC = () => {

    const firstView = () =>{
        return(
            <div className='first-view'>
                <h1>Select a Message</h1>
            </div>
        )
    }

    const [message, setMessage] = useState('');

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        // sendMessage(message);
        setMessage('');
      }
    }
    const messageView = () =>{
        const followers = {
            name: "Luffy Bhandari",
            username: "luffy",
            profile: true
        }

        return(
            <div className='message-view'>

                <div className="username-section">
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
                            </div>
                    </div>
                </div>


                <div>

                </div >
                <div>

                </div>
                <div className="message-input">


                    <div className='message-input-bar'>
                        <input
                            type="text"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Start a new message"
                            className="chat-input"
                        />
                        <button className="send-button" onClick={handleSendMessage}>
                            <FontAwesomeIcon icon={faArrowAltCircleUp} className="send-icon" />
                        </button>
                    </div>
                </div>


            </div>
        
        )


    }

    const selectView = () =>{
    // return firstView()
    return messageView()
    
    }

    return (
        <div className="message">

        {selectView()}

        </div>
    );
};

export default MessageContent;
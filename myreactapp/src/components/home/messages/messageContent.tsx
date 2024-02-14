import React , {useState, useEffect} from 'react';
import "./messageContent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
// import WebSocketComponent from '../WebSocketComponent';
import Cookies from 'js-cookie';




interface MessageContentProps {
    getnames: any|null;
}

const MessageContent: React.FC<MessageContentProps> = ({ getnames }) => {
    
    
    const [message, setMessage] = useState('');
    const [usermessage, setUsermessage] = useState('');
    
    const [messageUserName , setMessageUserName] = useState<string| null>(null);
    useEffect(()=>{
        setMessageUserName(getnames?.name)

    },[getnames])

    console.log("names:"+getnames?.name)

    useEffect(() => {
        if(messageUserName){

            const url = "ws://127.0.0.1:8000/ws/web/"+ Cookies.get("username")+messageUserName.replace(" ", "")+"/"
            const socket = new WebSocket(url);
    
            socket.onopen = () => {
                console.log('WebSocket connected');
                socket.send(JSON.stringify({ message: message }))
            };
    
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log('Received message:', message);
                setMessage(message.message);
                // Handle received messages
            };
    
            return () => {
                socket.close();
            };
        }
    }, [message, messageUserName]);

    const firstView = () =>{
        return(
            <div className='first-view'>
                <h1>Select a Message</h1>
            </div>
        )
    }


    // const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setMessage(event.target.value);
    // };
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        // sendMessage(message);
        setUsermessage('');
      }
      setMessage(usermessage)
    }

    // const trydata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const messageView = () =>{
        const followers = {
            name: messageUserName,
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
                <div  className="chat-box">
                    {/* {trydata.map((data, index) => ( */}
                        <div  className="chat-box-section">
                            <div className="chat-box-content">
                                <div className="chat-user">
                                    <b>Luffy</b>
                                </div>
                                <div className="chat-value">
                                    <p>Hey, how are you?</p>
                                    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam inventore optio laborum quis, officiis quas expedita tenetur eaque nobis nihil ab recusandae magni laudantium temporibus fuga dolor voluptatum voluptatem reiciendis? */}
                                </div>
                                <div>
                                    {message}
                                </div>
                            </div>
                        </div>
                    {/* ) */}
                    {/* ) */}
                {/* } */}
                {/* <WebSocketComponent  message = {message}/> */}

                </div>
                


            </div>
        
        )


    }

    const bottomSend = () =>{

        return(
            <div className="message-input">


                <div className='message-input-bar'>
                    <input
                        type="text"
                        value={usermessage}
                        onChange={(e) => setUsermessage(e.target.value)}
                        placeholder="Start a new message"
                        className="chat-input"
                    />
                    <button className="send-button" onClick={handleSendMessage}>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} className="send-icon" />
                    </button>
                </div>
            </div>
        )
    }

    const selectView = () =>{
        if(getnames === null){
            return firstView()
        }else{
            // setMessageUserName(getnames?.name)
        return (
            <div>
                
                {messageView()}
                {bottomSend()}
            </div>

        )
        }
    
    }

    return (
        <div className="message">

        {selectView()}

        </div>
    );
};

export default MessageContent;
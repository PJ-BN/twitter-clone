import React from 'react';
import "./message.css"

interface MessageProps {
    content: string;
    sender: string;
    timestamp: string;
}

const Message: React.FC<MessageProps> = ({ content, sender, timestamp }) => {
    return (
        <div className="message">
            <div className="message-sender">{sender}</div>
            <div className="message-content">{content}</div>
            <div className="message-timestamp">{timestamp}</div>
        </div>
    );
};

export default Message;

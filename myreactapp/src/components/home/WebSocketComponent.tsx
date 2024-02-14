
import React, { useEffect , useState} from 'react';

interface getMessage{
    message: string;

}

const WebSocketComponent: React.FC<getMessage> = ({message}) => {

    const [ messages, setMessage ] = useState<string>('');
    useEffect(() => {
        const socket = new WebSocket('ws://127.0.0.1:8000/ws/web/');

        socket.onopen = () => {
            console.log('WebSocket connected');
            socket.send(JSON.stringify({ message: 'Hello from client' }))
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
    }, []);

    return <div>{messages}</div>;
};

export default WebSocketComponent;
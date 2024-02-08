
import React, { useEffect } from 'react';

const WebSocketComponent: React.FC = () => {
    useEffect(() => {
        const socket = new WebSocket('ws://127.0.0.1:8000/ws/web/');

        socket.onopen = () => {
            console.log('WebSocket connected');
            socket.send(JSON.stringify({ message: 'Hello from client' }))
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('Received message:', message);
            // Handle received messages
        };

        return () => {
            socket.close();
        };
    }, []);

    return <div>WebSocket Component</div>;
};

export default WebSocketComponent;
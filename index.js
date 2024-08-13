import {WebSocket} from 'ws';

const ws = new WebSocket("wss://qa-perseus.hydrogenpay.com/v1/tms-socket?terminalId=7846C229");

// Event: Connection opened
ws.on('open', () => {
    console.log('Connected to the WebSocket server');
    ws.send("7846C229");
});

ws.on('message', (data) => {
    console.log('Received:', data.toString().trim());
});

// Event: Connection closed
ws.on('close', () => {
    console.log('Disconnected from the WebSocket server');
});

// Event: Error occurred
ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

// Example: Sending a message to the server after 5 seconds
setTimeout(() => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ message: 'Ping!' }));
    }
}, 5000);

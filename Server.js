

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    
    socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', msg);
    });

    
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});


server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

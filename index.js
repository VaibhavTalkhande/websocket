const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const path = require('path');

app.use(express.static(__dirname + '/public'));

const io = require('socket.io')(server);

// Socket.io
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
        io.emit('user disconnected');
    });
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, () => {
    console.log('listening on *:3000');
}
);
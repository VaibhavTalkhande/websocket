const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const path = require('path');

app.use(express.static(__dirname + '/public'));

const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, () => {
    console.log('listening on *:3000');
}
);
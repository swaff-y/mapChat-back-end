
// const app = require('express')();
import express from 'express';
import http from 'http';

// const http = require('http').Server(app);
const io = require('socket.io')(http);

const app = express()
const rest = http.Server(app);

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
socket.on('chat message', msg => {
  io.emit('chat message', msg);
});
});

http.listen(port, () => {
console.log(`Socket.IO server running at http://localhost:${port}/`);
});

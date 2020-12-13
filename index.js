const express = require('express');
const socketio = require('socket.io');

const http = require('http');
const PORT = process.env.PORT || 5000;

const app = express();

const server = http.Server(app);
const io = socketio(server);


server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})





const express = require('express');
const socketio = require('socket.io');

const http = require('http');
const PORT = process.env.PORT || 5000;

const router = require('./routes');
const { route } = require('./routes');
const app = express();

const server = http.Server(app);
const io = socketio(server);

app.use(router);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})





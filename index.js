const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.htm');
});




io.on('connection', (socket) => {
    console.log('Nowy użytkownik');
    socket.on('disconnect', () => {
      console.log('użytkownik wyszedł');
    });
  });

  io.on('connection', (socket) => {
    socket.on('w', (msg) => {
      console.log('Ruchy:', msg);
    });
  });

server.listen(3000, () => {
  console.log('Serwer kółko i krzyżyk działa');
});
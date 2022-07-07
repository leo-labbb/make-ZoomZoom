import express from 'express';
import path from 'path';
import http from 'http';
// import { WebSocket, WebSocketServer } from 'ws';
// import { SocketAddress } from 'net';
import { Server } from 'socket.io';

const __dirname = path.resolve();
const app = express();
console.log('hello');

app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');
app.use('/public', express.static(__dirname + '/src/public'));
app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

// const wss = new WebSocketServer({ server });
const httpServer = http.createServer(app);
const wsServer = new Server(httpServer);

const handleListen = () =>
  console.log('💥 Listening on http://localhost:3000 💥');

wsServer.on('connection', socket => {
  console.log(socket);
  console.log(socket);
});

httpServer.listen(3000, handleListen);

// const sockets = [];
// wss.on('connection', socket => {
//   sockets.push(socket);
//   socket['nickname'] = 'Anon';
//   console.log('Connected to Browser :)');
//   socket.on('close', () => {
//     console.log('Disconnected from Browser');
//   });
//   socket.on('message', msg => {
//     const message = JSON.parse(msg);
//     switch (message.type) {
//       case 'new_message':
//         sockets.forEach(aSocket => {
//           aSocket.send(`${socket.nickname}: ${message.payload}`);
//         });
//       case 'nickname':
//         socket['nickname'] = message.payload;
//     }
//   });
// });

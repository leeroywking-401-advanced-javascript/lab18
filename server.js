'use strict';

const PORT = process.env.PORT || 3000
const io = require('socket.io')(PORT);

io.on('connection', (socket) => {
  console.log('ID', socket.id);
  socket.on('speak', (payload) => {
    if(payload.match(/JSON/)){socket.broadcast.emit('file-error', `this message forbidden: ${payload} `)}
    else{socket.broadcast.emit('file-save', payload)}
  });
});


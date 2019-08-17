'use strict';

const PORT = process.env.PORT || 3000
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('ID', socket.id);
  socket.on('speak', (payload) => {
    if(payload.match(/JSON/)){io.emit('file-error', `this message forbidden: ${payload} `)}
    else{io.emit('file-save', payload)}
  });
});


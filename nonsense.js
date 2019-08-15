const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const faker = require('faker');


'use strict';

setInterval( () => {
    socket.emit('speak', faker.hacker.phrase());
},500);


const io = require('socket.io-client');
const socket = io.connect('https://lab19.azurewebsites.net');

const faker = require('faker');


'use strict';

setInterval( () => {
    socket.emit('speak', faker.hacker.phrase());
},500);


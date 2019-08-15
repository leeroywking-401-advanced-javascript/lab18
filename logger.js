// CLIENT
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

const writer = require('./worker.js')


socket.on('file-save', (payload) => {
    // let payload = JSON.parse(data);
    console.log(payload);
    writer('./files/test.txt',payload)
});

socket.on('file-error', (payload) => {
    // let payload = JSON.parse(data);
    console.log(payload);
    writer('./files/test.txt',payload)
});
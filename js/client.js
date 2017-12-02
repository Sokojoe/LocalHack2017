var socket = io();
var el = document.getElementById('server-time');

socket.on('time', function(timeString) {
  console.log("got information!");
});

socket.on('message', function() {
  console.log("Player sent a message!");
});

function sendMessage(){
  socket.emit("message");
};

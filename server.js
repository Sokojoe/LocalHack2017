var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.set('port', (process.env.PORT || 5000));

server.listen(app.get('port'),function(){ // Listens to port 5000
    console.log('Listening on '+server.address().port);
});

// called when player joins the server
io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', function() {
    console.log("A Player has disconnected");
    io.emit('playerdisconnect');
  });
  socket.on('message', function() {
    console.log("Player sent a message!")
    io.emit('message');
  });
});



// setInterval(() => io.emit('playerlocations', ), 125);

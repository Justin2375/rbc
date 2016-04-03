var http = require('http');
var express = require('express'), app = express();
var jade = require('jade');
var io = require('socket.io').listen(server);
var server = http.createServer(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: false });
// app.configure(function() {
//   app.use(express.static(__dirname + '/public'));
// });

app.get('/', function (req, res) {
  res.render('home', { });
});
server.listen(3000, function(){
  console.log("listening on port 3000");
});


// io.sockets.on('connection', function (socket) {
//     //other events go here dipshit
// });
// socket.on('setPseudo', function (data) {
//     socket.set('pseudo', data);
// });
// socket.on('message', function (message) {
//   socket.get('pseudo', function (err, name) {
//     var data = { 'message' : message, pseudo : name };
//     socket.broadcast.emit('message', data);
//     console.log("user " + name + " send this: " + message);
//   });
// });

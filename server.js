var http = require('http');
var express = require('express'), app = express();
var server = http.createServer(app);
var jade = require('jade');
var io = require('socket.io').listen(server);
var bodyParser = require('body-parser');


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: false });

//app.use(express.static("public", __dirname + "/public"));

app.get('/', function (req, res) {
  res.render('home');
  console.log("serve")
});
server.listen(3000, function(){
  console.log("listening on port 3000; press ctrl-c to quit");
});

app.get('')

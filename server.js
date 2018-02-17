var express = require('express');
//var todo = require('./todo.js');
var app = express();
var mongoose = require('mongoose');
var port =process.env.PORT || 5000; 
//var request = require('request');
var database = require('./config/database');
app.use(express.static(__dirname + '/public'));




mongoose.connect(database.remoteUrl);

/*
var router = express.Router();
app.use('./routes', router);
*/
require('./routes')(app);


app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(port);

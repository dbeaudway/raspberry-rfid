var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('server/public'));

// Routes
var scan = require('./routes/scan');
app.use('/scan', scan);

var databaseUrl = 'mongodb://localhost:27017/raspberry-rfid';

mongoose.connection.on('connected', function() {
    console.log('mongoose is connected');
})

mongoose.connection.on('error', function() {
    console.log('mongoose connection failed');
})

mongoose.connect(databaseUrl);

app.listen(port, function() {
    console.log('Listening on port: ', port);
});
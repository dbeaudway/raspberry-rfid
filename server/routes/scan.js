var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScanSchema = new Schema({id: Number, timestamp: String});
var Scan = mongoose.model('Scan', ScanSchema, 'scans');

router.post('/', function(req, res){
    console.log(req.body);
    var scanToAdd = new Scan(req.body);
    scanToAdd.save(function(err, data){
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    })
});

router.get('/', function (req, res) {
    Scan.find({}, function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(data);
            res.send(data);
        }
    }
    );
});

module.exports = router;

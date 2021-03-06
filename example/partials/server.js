var express = require('express');
var app = express.createServer();
var util = require('util');

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.render('index.jade', { layout : false });
});

var browserify = require('browserify');
var jadeify = require('jadeify');

util.print('Generating bundle... ');
var bundle = browserify()
    .use(jadeify(__dirname + '/views'))
    .addEntry(__dirname + '/static/main.js')
;
console.log('done');

app.use(bundle);
app.listen(8080);
console.log('Listening on 8080');

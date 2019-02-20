//inicializacion
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;

app.configure(function(){
	app.use(express.static(__dirname + '/'));
	app.use(express.logger('dev'));
	app.use(express.methodOverride());
});

var bodyParse = require('body-parser');
app.use(bodyParse.json({limit:'50mb'}));
app.use(bodyParse.urlencoded({limit:'50mb', extended:true}));
//cargar los endpoints
require('./route.js')(app);

//puerto
app.listen(port);
console.log("App por el puerto " + port);
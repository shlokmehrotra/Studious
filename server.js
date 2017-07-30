var sjcl = require('sjcl');
//var nodemailer = require('nodemailer);
var jade = require('jade');
var express = require('express');
//var mysql = require('mysql');
console.log("Connected to database");
var app = express();
app.configure(function(){
    app.use(express.bodyParser());
    app.use(app.router);
});
//The port number of the c9 platform is process.env.PORT
//On the computer, it's localhost and not process.env.PORT
app.get('/', function(req, res){
    res.render('index.html');
    //jade.renderFile('signup.jade', {"username":"", "password":""});
});
app.get('/chat.html', function(req, res){
    res.send('<h1>Hello World</h1>');
});
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index/html');
});
const express = require("express");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

var hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', function(req, res){
    res.render('home');
});

var server = app.listen(3000, function(){
    console.log('Node server running');
});

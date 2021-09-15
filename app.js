const express = require("express");
const routes = require("./routes/routes.js");
const db = require("./models/db.js");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

var hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/', routes);

db.connect();

var server = app.listen(3000, function(){
    console.log('Node server running');
});

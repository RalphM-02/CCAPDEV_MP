const express = require("express");
const routes = require("./routes/routes.js");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
mongoose.connect('mongodb://localhost:27017/FLEXR-MP');

const app = new express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

var hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(session({
    'secret': 'FLEXR-MP',
    'resave': false,
    'saveUninitialized': false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use('/', routes);

app.use(function(req, res){
    var details = {};

    if(req.session.username){
        details.flag = true;
        details.username = req.session.name;
    }

    res.render('error', details);
});

var server = app.listen(3000, function(){
    console.log('Node server running');
});

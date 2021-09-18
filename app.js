const express = require("express");

const routes = require("./routes/routes.js");

const {envPort, sessionKey, dbURL} = require("./config");
const session = require("express-session");

const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//mongoose.connect(dbURL, options);
mongoose.connect('mongodb://localhost:27017/FLEXR-MP', options);

const app = new express();
const port = envPort || 9090;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

var hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(session({
    'secret': sessionKey,
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

var server = app.listen(port, function(){
    console.log('Node server running');
});

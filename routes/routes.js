const express = require('express');

const registerController = require("../controllers/registerController.js");

const app = express();

app.get("/register", registerController.getRegister);


module.exports = app;
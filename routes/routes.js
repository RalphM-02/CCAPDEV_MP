const express = require('express');

const registerController = require("../controllers/registerController.js");
const loginController = require("../controllers/loginController.js");

const app = express();

app.get("/register", registerController.getRegister);
app.post("/register", registerController.postRegister);
app.get("/login", loginController.getLogin);
app.get("/success", registerController.getSuccess);


module.exports = app;
const express = require('express');

const registerController = require("../controllers/registerController.js");
const loginController = require("../controllers/loginController.js");
const homeController = require("../controllers/homeController.js");
const profileController = require("../controllers/profileController.js");

const app = express();

app.get("/", homeController.getHome);
app.get("/logout", homeController.getLogout);
app.get("/register", registerController.getRegister);
app.post("/register", registerController.postRegister);
app.get("/login", loginController.getLogin);
app.post("/login", loginController.postLogin);
app.get("/success", registerController.getSuccess);
app.get("/profile/:username", profileController.getProfile);
app.get("/editProfile", profileController.getUpdateProfile);
app.post("/updateUsername", profileController.postUpdateUsername);
app.post("/updatePassword", profileController.postUpdatePassword);
app.post("/updateBio", profileController.postUpdateBio);
app.get("/getCheckUsername", registerController.getCheckUsername);
app.get("/getCheckNewUsername", profileController.getCheckNewUsername);
app.get("/getNewPost", homeController.getNewPost);


module.exports = app;
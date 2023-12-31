const express = require("express");
const passport = require("passport");
const authController = require("../../controllers/auth.controller");

const authRouter = express.Router();

authRouter.get('/login', authController.indexLogin);
authRouter.post('/login', authController.login);
authRouter.get('/logout', authController.logout)

module.exports = authRouter;
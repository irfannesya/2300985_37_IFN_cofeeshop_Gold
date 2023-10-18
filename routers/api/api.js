const express = require("express");
const HomeController = require("../../controllers/home.controller");
const api = express.Router();

const UserControler = require("../../controllers/user.controller");
const homeRouter = require("../web/home");
const userControler = new UserControler
const ProdukControler = require("../../controllers/produk.controler");
const produkControler = new ProdukControler


// Endpoint user
api.post('/v1/register', userControler.register);
api.post('/v1/produk', produkControler.save);



module.exports = api;
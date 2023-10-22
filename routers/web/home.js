const express = require("express");
const HomeController = require("../../controllers/home.controller");
const ProdukControler = require("../../controllers/produk.controler");
const homeRouter = express.Router();

const homeController = new HomeController();
const produkControler = new ProdukControler();
//const userControler = new UserControler

homeRouter.get('/', homeController.indexHome);
homeRouter.get('/feedback', homeController.indexFeedback);
homeRouter.get('/order', homeController.indexOrder);
homeRouter.get('/promo', homeController.indexPromo);
homeRouter.get('/login', homeController.indexLogin);
homeRouter.get('/galeri', homeController.indexGaleri);
homeRouter.get('/kasir', homeController.indexKasir);
homeRouter.get('/register', homeController.indexRegister)
homeRouter.get('/login', homeController.indexLogin)




// produk
homeRouter.get('/produk-create', produkControler.CreateProduk);
homeRouter.get('/daftarproduk', produkControler.indexProduk);
homeRouter.get('/editProduk', produkControler.updateProduk)


module.exports = homeRouter;
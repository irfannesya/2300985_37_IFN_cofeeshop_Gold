const NewsService = require("../services/news.service");
const ProdukService = require("../services/produk.service");
const produkService = new ProdukService();



const newsService = new NewsService();
class HomeController {
    async indexHome(req, res) {

        try {
            const newsData = await newsService.getNews(null);
            res.render("home",
                {
                    pageTitle: "HOME | Berita Terkini",
                    layout: "layouts/layouts",
                    news: newsData
                });
        } catch (error) {
            console.log(error);
        }
    }

    indexFeedback(req, res) {
        res.render("feedback");
    }
    async indexOrder(req, res) {
        try {
            const produkData = await produkService.getProduk(null);
            res.render('order',
                {
                    pageTitle: "HOME | daftar produk",
                    layout: "layouts/layouts",
                    produk: produkData
                });
        } catch (error) {
            console.log(error);
        }

    }
    indexPromo(req, res) {
        res.render("promo");
    }
    indexLogin(req, res) {
        res.render("login");
    }
    indexGaleri(req, res) {
        res.render("galeri");
    }
    indexKasir(req, res) {
        res.render("kasir");
    }
    indexRegister(req, res) {
        res.render("register", {
            layout: "layouts/layouts",
            pageTitle: 'Registration',
            user: req.user
        })
    }
}

module.exports = HomeController;
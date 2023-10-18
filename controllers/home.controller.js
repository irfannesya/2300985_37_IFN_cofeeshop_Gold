const NewsService = require("../services/news.service");



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
    indexOrder(req, res) {
        res.render("order");
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
    indexproduk(req, res) {
        res.render("produk");
    }
}

module.exports = HomeController;
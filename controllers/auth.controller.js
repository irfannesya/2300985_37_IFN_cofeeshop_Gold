const req = require("express-cookie/lib/request");
const passport = require("passport");
module.exports = {
    indexLogin: (req, res) => {
        res.render('login', { user: req.user })
    },
    login: passport.authenticate("local", {
        successRedirect: "/order",
        failureRedirect: "/login",
        failureFlash: true
    }),
    logout: (req, res, next) => {
        req.logout((err) => {
            if (err) { return next(err); }
            res.redirect('/login');
        })
    }
}
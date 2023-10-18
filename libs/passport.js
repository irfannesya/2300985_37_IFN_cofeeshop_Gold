const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// call model
const { pelanggan } = require('../models');

const authenticate = (email, password, done) => {
    pelanggan.findOne({ where: { email: email } }).then(userData => {
        if (!userData) {
            return done(null, false, { message: 'User tidak terdaftar!' });
        }

        bcrypt.compare(password, userData.password).then(isMatch => {
            if (!isMatch) {
                return done(null, false, { message: 'Email dan password tidak sesuai!' });
            }

            return done(null, userData, { pop: 'Login Berhasil' });
        });
    });
};

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, authenticate));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    pelanggan.findByPk(id).then(user => {
        done(null, user);
    });
});

module.exports = passport;
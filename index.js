const express = require("express");
const router = require("./routers/router");
const morgan = require("morgan");
const app = express();
const port = 3000;
const ejsLayouts = require("express-ejs-layouts")

//login
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('./libs/passport');


// proses inisasi middleware atuh
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// end proses inisiasi middleware.


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(ejsLayouts);

// Config folder layouts
app.set('layout', 'layouts/layouts');
app.set('layout extractScripts', true);


app.use(express.static("publick"))
// built in Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.use(express.static('bower_components'));

app.use(express.static('public'));



app.use(morgan('dev'));

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});





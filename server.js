// REQUIRE DEPENDENCIES
// ============================================
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
var env = require('dotenv').load()

let app = express();
let PORT = process.env.PORT || 8080;

// PARSE APPLICATION
// ============================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// FOR PASSPORT
// ============================================
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// ROUTES
// ============================================
require('./routes/api-routes')(app);
require('./routes/user-api-routes')(app);
// require('./routes/html-routes')(app);
var authRoute = require('./routes/auth.js')(app,passport);

// MODELS
// ============================================
var models = require('./config/passport/passport.js')(passport,'./models/user.js');

// SYNC SEQUELIZE & START APP
//============================================
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});


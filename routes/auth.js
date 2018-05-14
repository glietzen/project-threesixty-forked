var authController = require('../controller/auth_controller.js');

module.exports = function(app,passport){

app.get('/signup', authController.signup);
app.get('/signin', authController.signin);

app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/profile', failureRedirect: '/signup'}));

app.get("/", function(req, res) {
	res.redirect('/dashboard');
});

app.get('/dashboard',isLoggedIn, authController.dashboard);

app.get('/log',isLoggedIn, authController.logout);

app.get('/profile',isLoggedIn, authController.profile);

app.get('/user-admin',isLoggedIn, authController.userAdmin);

app.get('/edit', isLoggedIn, authController.edit);

app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/profile', failureRedirect: '/signin'}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    else {
    res.redirect('/signin');
}
}


}
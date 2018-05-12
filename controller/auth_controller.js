var exports = module.exports = {}
const path = require('path');

exports.signup = function(req,res){

	res.sendFile(path.join(__dirname, "../public/signup.html"))

}

exports.signin = function(req,res){

	res.sendFile(path.join(__dirname, '../public/signin.html'));

}

exports.dashboard = function(req,res){

	res.redirect('/dashboard');

}

exports.user = function(req,res){

	res.redirect('/user');

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}
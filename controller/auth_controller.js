var exports = module.exports = {}
const path = require('path');

exports.signup = function(req,res){

	res.sendFile(path.join(__dirname, "../public/signup.html"));

}

exports.signin = function(req,res){

	res.sendFile(path.join(__dirname, '../public/signin.html'));

}

exports.dashboard = function(req,res){

	res.sendFile(path.join(__dirname, '../public/dashboard.html'));

}

exports.profile = function(req,res){

	res.sendFile(path.join(__dirname, '../public/profile.html'));

}

exports.userAdmin = function(req,res){

	res.sendFile(path.join(__dirname, '../public/user-admin.html'));

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  	res.sendFile(path.join(__dirname, '../public/logout.html'));
  });

}
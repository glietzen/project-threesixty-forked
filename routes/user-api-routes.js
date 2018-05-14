var db = require("../models");

module.exports = function(app) {

  // Get all Users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get current user
  app.get("/api/users/current", function(req, res) {
    db.User.findOne({
      where: {
        username: req.user.username
      },
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  
  // Find a user by id
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Add a user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.put("/api/users", function(req, res) {
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  });
};

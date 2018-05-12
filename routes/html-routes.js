const path = require('path');

module.exports = (app) => {

    // GET ROUTES
    // =======================================
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

    app.get("/dashboard", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/dashboard.html"))
    })

    app.get("/users", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/users.html"))
    });

}
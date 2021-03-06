const path = require('path');

module.exports = (app) => {

    // GET ROUTES
    // =======================================
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
    // STETSON'S PROJECT PAGE ROUTES =====================================
    app.get("/projects", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
    });
    
    app.get("/new-project", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/new-project.html"));
    });

    app.get("/dashboard", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/dashboard.html"))
    })

    app.get("/user", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/user.html"))
    });

    app.get("/signin", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signin.html"))
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"))
    });

}
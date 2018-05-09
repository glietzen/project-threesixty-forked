const path = require('path');

module.exports = (app) => {

    // GET ROUTES
    // =======================================
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
    // STETSON'S PROJECT PAGE ROUTE =====================================
    app.get("/projects", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
    });



}
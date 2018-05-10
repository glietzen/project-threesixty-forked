const db = require('./../models');

module.exports = (app) => {

// GET ROUTES
// ============================================

    // GET ALL DATA FROM DATABASE
    app.get('/api/project/all', (req,res) => {
        db.costs.findAll({}).then((results) => {
            res.json(results);
        });
    });


// POST ROUTES
// ============================================

    // POST NEW ROW
    app.post('/api/project/new', (req, res) => {
        db.costs.create(req.body).then((dbPost) => {
            res.json(dbPost);
        });
    });






}
const db = require('./../models');

module.exports = (app) => {

    // POST ROUTES
    // ============================================

    // POST NEW ROW
    app.post('/api/project/new', (req, res) => {
        db.costs.create(req.body).then((dbPost) => {
            res.json(dbPost);
        });
    });






}


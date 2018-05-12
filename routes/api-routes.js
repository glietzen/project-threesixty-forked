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
    
    
    // PUT ROUTE FOR UPDATING A ROW
    app.put('/api/project/new', (req, res) => {
        db.costs.update(req.body,
        {
            where: {
                id: req.body.id
            }
        })
        .then((dbPost) => {
            res.json(dbPost)
        });
    });






};
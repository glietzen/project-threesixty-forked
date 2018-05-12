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


    // GET ROUTE FOR GRABBING ALL THE PROJECTS
    app.get("/api/projects/", (req, res) => {
        db.costs.findAll({})
        .then((dbPost) => {
            res.json(dbPost);
        });
    });

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
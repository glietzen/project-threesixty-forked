const db = require('./../models');

module.exports = app => {
  // GET ROUTES
  // ============================================

  // GET ALL DATA FROM DATABASE
  // app.get('/api/project/all', (req,res) => {
  //     db.costs.findAll({}).then((results) => {
  //         res.json(results);
  //     });
  // });

  // GET ROUTE FOR GRABBING ALL THE PROJECTS
  app.get('/api/projects/', (req, res) => {
    db.costs.findAll({}).then(dbPost => {
      res.json(dbPost);
    });
  });

  // GET ROUTE FOR GRABBING ONE PROJECT FROM ID
  app.get('/api/projects/:id', (req, res) => {
    db.costs
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(dbPost => {
        res.json(dbPost);
      });
  });

  // GET ROUTE FOR GRABBING PROJECTS BASED ON CATEGORY
  app.get('/api/projects/status/:status', (req, res) => {
    db.costs.findAll({
      where: {
        status: req.params.status
      }
    })
      .then(dbPost => {
        res.json(dbPost);
      });
  });

  // POST ROUTES
  // ============================================


  // POST NEW ROW
  app.post('/api/project/new', (req, res) => {
    db.costs.create(req.body).then(dbPost => {
      res.json(dbPost);
    });
  });

  // PUT ROUTES
  // ============================================

  // PUT ROUTE FOR UPDATING A ROW
  app.put('/api/projects', (req, res) => {
    db.costs
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(dbPost => {
        res.json(dbPost);
      });
  });

  // DELETE ROUTES
  // ============================================
  app.delete('/api/projects/:id', (req, res) => {
    db.costs
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbPost => {
        res.json(dbPost);
      });
  });
};

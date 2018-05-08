// REQUIRE DEPENDENCIES
// ============================================
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const exphbs = require("express-handlebars");
const routes = require('./controller/project_controller');

let app = express();
let PORT = process.env.PORT || 8080;

// PARSE APPLICATION
// ============================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

// VIEWS
// ============================================

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES
// ============================================
require('./routes/api-routes')(app);



// SYNC SEQUELIZE & START APP
//============================================
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});


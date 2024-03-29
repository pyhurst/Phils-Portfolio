const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Server listening on: http://localhost:' + PORT);
    });
});
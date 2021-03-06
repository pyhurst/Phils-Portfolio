const db = require("../models");

module.exports = function(app) {
    app.post("/api/contact", function(req, res) {
        // console.log(req.body)
        db.Contact.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            type: req.body.type,
            details: req.body.details
        }).then(function(data) {
            res.json(data);
        });
    });
};
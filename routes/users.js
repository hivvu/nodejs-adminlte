var express = require('express');
var router = express.Router();
var authentication_mdl = require('../middleware/authentication');
var session_store;

router.get('/', authentication_mdl.is_login, function (req, res, next) {
    req.getConnection(function (err, connection) {
        var query = connection.query('SELECT * FROM user', function (err, rows) {
            if (err)
                var error = ("Error Selecting : %s ", err);

            req.flash('msg_error', error);
            res.render('users/list', { title: "Users", data: rows, session_store: req.session});
        });
    });
});

module.exports = router;

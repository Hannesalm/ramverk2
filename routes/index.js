var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Qloud' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'Qloud' });
});

router.get('/report', function(req, res) {
    res.render('report', { title: 'Qloud' });
});

module.exports = router;

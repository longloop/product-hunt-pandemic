var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'About Us', data: 'CO Victory !'});
});


module.exports = router;

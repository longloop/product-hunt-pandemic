var express = require('express');
var router = express.Router();

router.get('/contact-us', function(req, res, next) {
  res.send('Contact Us.');
});

module.exports = router;

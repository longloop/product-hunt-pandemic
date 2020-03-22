var express = require('express');
var router = express.Router();

router.get('/about-us', function(req, res, next) {
  res.send('About Us.');
});

module.exports = router;

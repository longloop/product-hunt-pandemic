var express = require('express');
var router = express.Router();

router.get('/submit-offerings', function(req, res, next) {
  res.send('Form - Submit your offering details.');
});

module.exports = router;

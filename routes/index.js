var express = require('express');
var router = express.Router();


var home = require('./home');
var aboutUs = require('./about-us');
var contactUs = require('./contactUs');
var submitOfferings = require('./submit-offerings');


router.use('/', home);
router.use('/about-us', aboutUs);
router.use('/contact-us', contactUs);
router.use('/submit-offerings', submitOfferings);

module.exports = router;

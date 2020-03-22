var express = require('express');
var router = express.Router();


var home = require('./home');
var contactUs = require('./contactUs');
var aboutUs = require('./aboutUs');
var submitOfferings = require('./submitOfferings');


router.use('/', home);
router.use('/about-us', aboutUs);
router.use('/contact-us', contactUs);
router.use('/submit-offerings', submitOfferings);

module.exports = router;

var express = require('express');
var router = express.Router();


var home = require('./home');
var contactUs = require('./contactUs');
var aboutUs = require('./aboutUs');
var submitOfferings = require('./submitOfferings');
var subscription = require('./subscription');


router.use('/', home);
router.use('/about-us', aboutUs);
router.use('/contact-us', contactUs);
router.use('/submit-offerings', submitOfferings);
router.use('/subscription', subscription);

module.exports = router;

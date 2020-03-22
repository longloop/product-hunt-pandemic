const contactUs = require('express').Router();

contactUs.get('/contact-us', function(req, res, next) {
  res.send('Contact Us.');
});

module.exports = contactUs;

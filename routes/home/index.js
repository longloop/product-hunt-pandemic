var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var CONFIG = require('./../../config.js')
console.log(CONFIG);
/* GET home page. */
router.get('/', function(req, res, next) {
  const url = "mongodb://" + CONFIG.mongo_user + ":" + CONFIG.mongo_password + "@" + CONFIG.mongo_host + ":" + CONFIG.mongo_port + "/" + CONFIG.mongo_db;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection("offerings").find().limit(5).toArray(function (err, result) {
      if (err) throw err;
      db.close();
      res.render('home', { title: 'Lits of Offerings', data: result});
    });
  });
});

let getOfferings = async () => {
  
}

module.exports = router;

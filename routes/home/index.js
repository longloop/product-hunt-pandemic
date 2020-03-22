var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

const CONFIG = require('./../../config.js')
const MONGO_URL = "mongodb://" + CONFIG.mongo_user + ":" + CONFIG.mongo_password + "@" + CONFIG.mongo_host + ":" + CONFIG.mongo_port + "/";

console.log(CONFIG);
/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(MONGO_URL, function (err, db) {
    if (err) throw err;
    var dbo = db.db(CONFIG.mongo_db);
    dbo.collection("offerings").find().limit(5).toArray(function(err, result) {
      if (err) throw err;
      db.close();
      res.render('home', { title: 'Lits of Offerings', data: JSON.stringify(result)});
    });
  });
});

let getOfferings = async () => {
  
}

module.exports = router;

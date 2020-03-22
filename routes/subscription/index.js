var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

const CONFIG = require('./../../config.js')
const MONGO_URL = "mongodb://" + CONFIG.mongo_user + ":" + CONFIG.mongo_password + "@" + CONFIG.mongo_host + ":" + CONFIG.mongo_port + "/";


router.post('/', function (req, res, next) {
    MongoClient.connect(MONGO_URL, function (err, db) {
        if (err) throw err;
        var dbo = db.db(CONFIG.mongo_db);
        dbo.collection("subscription").save(req);
    });
});

module.exports = router;

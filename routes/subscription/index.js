var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    var url = "mongodb://" + CONFIG.mongo_user + ":" + CONFIG.mongo_password + "@" + CONFIG.mongo_host + ":" + CONFIG.mongo_port + "/" + CONFIG.mongo_db;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("subscription").save(req);
    });
});

module.exports = router;

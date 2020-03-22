var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    const url = "mongodb://" + CONFIG.mongo_user + ":" + CONFIG.mongo_password + "@" + CONFIG.mongo_host + ":" + CONFIG.mongo_port;
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        const db = client.db(CONFIG.mongo_db);
        db.collection("subscription").save(req);
    });
});

module.exports = router;

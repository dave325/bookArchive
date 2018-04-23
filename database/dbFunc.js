var MongoClient = require('./db.js');
var url = "mongodb://davidqb:queenslibrary@ds247449.mlab.com:47449/bookactivity";
function sendJSONResponse(res,results){
    res.status(200);
    res.json(results);
}
module.exports.showBooks = function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        const dbName = client.db('bookactivity');
        dbName.collection('Persons').find().toArray(function (err, results) {
            sendJSONResponse(res, results);
        });
        client.close();
    });
}
var MongoClient = require('./db.js');
var mongo = require('mongodb');
var ObjectId = mongo.ObjectId;
var url = "mongodb://davidqb:queenslibrary@ds247449.mlab.com:47449/bookactivity";


function sendJSONResponse(res,results){
    res.status(200).json(results);
}

module.exports.retrieveBooks = function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        const dbName = client.db('bookactivity');
        dbName.collection('Books').find().toArray(function(err,results){
            if(err) throw err;
            sendJSONResponse(res,results);
        });
        client.close();
    });
}

module.exports.updateBook = function(req,res){
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        const dbName = client.db('bookactivity');
        let id = ObjectId(req.body._id);
        delete req.body._id;
        dbName.collection('Books').updateOne({
            _id:id
        },{
            $set: req.body 
        }).then(function(response){
            sendJSONResponse(res,"Success");
        },function(err){
            console.log(err);
        });
        client.close();
    });
}

module.exports.deleteBook = function(req,res){
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        const dbName = client.db('bookactivity');
        let id = ObjectId(req.body._id);
        dbName.collection('Books').deleteOne({
            _id:id
        }).then(function(response){
            sendJSONResponse(res,response);
        },function(err){
            console.log(error);
        });
        client.close();
    });
}

module.exports.createBook = function(req,res){
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        const dbName = client.db('bookactivity');
        let id  = new ObjectId();
        req.body._id = id;
        dbName.collection('Books').insertOne(req.body).then(function(err, response){
            if(err) {
                sendJSONResponse(res,err);
                return;
            }
        });
        sendJSONResponse(res,id);
        client.close();
    });
}


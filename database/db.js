var mongo = require('mongodb')
var MongoClient = mongo.MongoClient;
var ObjectId = mongo.ObjectId;
var url = "mongodb://davidqb:queenslibrary@ds247449.mlab.com:47449/bookactivity";


module.exports = MongoClient;
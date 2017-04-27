var mongoose = require('mongoose');

var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    // mongoURI = 'mongodb://localhost:27017/passport';
    mongoURI = 'mongodb://localhost:27017/bucketapp';
}

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
   if(err) {
     console.log("MONGO ERROR: ", err);
   }
   res.sendStatus(500);
});

mongoDB.once('open', function(){
   console.log("Connected to Mongo");
});

// var mongoURI = '';
// // process.env.MONGODB_URI will only be defined if you
// // are running on Heroku
// if(process.env.MONGODB_URI != undefined) {
//     // use the string value of the environment variable
//     mongoURI = process.env.MONGODB_URI;
// } else {
//     // use the local database server
//     mongoURI = 'mongodb://localhost:27017/passport';
// }
//
// // var mongoURI = "mongodb://localhost:27017/passport";
// var mongoDB = mongoose.connect(mongoURI).connection;
//
// mongoDB.on('error', function(err){
//    if(err) {
//      console.log("MONGO ERROR: ", err);
//    }
//    res.sendStatus(500);
// });
//
// mongoDB.once('open', function(){
//    console.log("Connected to Mongo, meow!");
// });

module.exports = mongoDB;

var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');

var LocationSchema = mongoose.Schema({
  user: String,
  name: String,
  dateAdded: Date,
  dateVisited: Date,
  address: String,
  website: String,
  recommender: String,
  recNotes: String,
  visited: Boolean,
  type: String,
  userNotes: String
});

var Location = mongoose.model('location', LocationSchema, 'locations');

router.get('/', function(req, res){
  Location.find({}, function(err, allLocations){
      if(err) {
        console.log('Error finding messages', err);
      }
      res.send(allLocations);
    });
});

router.post('/', function(req,res){
    var location = new Location({
        user: req.body.user,
        name: req.body.name,
        dateAdded: req.body.dateAdded,
        dateVisited: req.body.dateVisited,
        address: req.body.address,
        website: req.body.website,
        recommender: req.body.recommender,
        recNotes: req.body.recNotes,
        visited: req.body.visited,
        type: req.body.type,
        userNotes: req.body.userNotes
    });

    location.save(function(err, savedLocation){
      if(err){
        console.log("Mongo Error: ", err);
        res.sendStatus(500);
      }
      res.send(savedLocation);
    });
});

router.put('/', function(req, res){
  console.log('Router.put has: ', req.body);
  console.log("Router.put id: ", req.body.place._id);
  var id = req.body.place._id;

  Location.findOneAndUpdate({'_id' : id}, {$set:{'visited' : true}}, {new: true}, function(err, updatedLocation){
      if(err) {
        console.log('Error finding messages', err);
      }
      res.send(updatedLocation);
    });
});

router.delete('/', function(req, res){
  console.log('Router.delete has: ', req.body);
  var id = req.body.place._id;

  Location.deleteOne({'_id' : id}, function(err, updatedLocation){
      if(err) {
        console.log('Error finding messages', err);
      }
      res.send(updatedLocation);
    });
});


module.exports = router;

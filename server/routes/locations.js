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
  city: String,
  state: String,
  zipcode: Number,
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

router.get('/this', function(req, res){
  console.log("req.body is: ", req.body);

  Location.findById(req.body._id, function(err, thisLocation){
      if(err) {
        console.log('Error finding messages', err);
      }
      res.send(thisLocation);
    });
});

router.post('/', function(req,res){
    var location = new Location({
        user: req.body.user,
        name: req.body.name,
        dateAdded: req.body.dateAdded,
        dateVisited: req.body.dateVisited,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
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

router.put('/submit', function(req, res){
  var id = req.body.place._id;

  Location.findOneAndUpdate({'_id' : id}, {$set:{'visited' : true, 'userNotes' : req.body.place.userNotes}}, {new: true}, function(err, updatedLocation){
      if(err) {
        console.log('Error finding messages', err);
      }
      res.send(updatedLocation);
    });
});


router.put('/update', function(req, res){
  var id = req.body.place._id;

  Location.findOneAndUpdate({'_id' : id},
  {$set:{'name' : req.body.place.name,
          'dateAdded' : req.body.place.dateAdded,
          'address' : req.body.place.address,
          'city' : req.body.place.city,
          'state': req.body.place.state,
          'zipcode': req.body.place.zipcode,
          'website': req.body.place.website,
          'recommender': req.body.place.recommender,
          'recNotes': req.body.place.recNotes,
          'visited': req.body.place.visited,
          'type': req.body.place.type,
          'userNotes': req.body.place.userNotes}},
          {new: true}, function(err, updatedLocation){
      if(err) {
        console.log('Error finding messages', err);
      }
      res.send(updatedLocation);
    });
});


router.delete('/:id', function(req, res){
  var id = req.params.id;

  Location.deleteOne({'_id' : id}, function(err, deletedLocation){
      if(err) {
        console.log('Error finding messages', err);
      }
      res.send(deletedLocation);
    });
});


module.exports = router;

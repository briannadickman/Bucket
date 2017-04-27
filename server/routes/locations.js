var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');

// SCHEMA
var LocationSchema = new mongoose.Schema({
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

var Locations = mongoose.model('locations', LocationSchema, 'locations');

// VIEW ADDED PLACES
router.get('/get', function(req, res){
  console.log('in router get with: ', req.body);
});

// ADD NEW PLACE
router.post('/add', function(req, res){
  console.log('in router.post with: ', req.body);
  // var location = new Locations({
  //
  // });
  //
  //
  // var message = new Message({
  //   name: req.body.name,
  //   message: req.body.message
  // });
  // location.name = req.body.name;
});

// UPDATE EXISTING PLACE
router.put('/update', function(req, res){
  console.log('in router update with: ', req.body);
});

// DELETE EXISTING PLACE
router.delete('/delete', function(req, res){
  console.log('in router delete with: ', req.body);
});


module.exports = router;

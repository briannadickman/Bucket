myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};
  var locationList = {};
  var placeObject = {
    place: ''
  };
  
  var locationObject = {
    user: '',
    name: '',
    dateAdded: '',
    dateVisited: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    website: '',
    recommender: '',
    recNotes: '',
    visited: '',
    type: '',
    userNotes: '',
    image: ''
  };

  function getPlaces(){
    $http.get('/locations').then(function(response){
      locationList.data = response.data;
      console.log(locationList);
      for(var i = 0; i < locationList.data.length; i++){

        if(locationList.data[i].type == 'Restaurant'){
          locationList.data[i].image = '020-fast-food.png';
        }
        else if(locationList.data[i].type == 'Nightlife'){
          locationList.data[i].image = '019-cocktail.png';
        }
        else if(locationList.data[i].type == 'Shopping'){
          locationList.data[i].image = '009-cart.png';
        }
        else if(locationList.data[i].type == 'Coffee'){
          locationList.data[i].image = '015-coffee-cup.png';
        }
        else if(locationList.data[i].type == 'Beauty'){
          locationList.data[i].image = '013-makeup.png';
        }
        else if(locationList.data[i].type == 'Education'){
          locationList.data[i].image = '017-mortarboard.png';
        }
        else if(locationList.data[i].type == 'Pets'){
          locationList.data[i].image = '001-bulldog.png';
        }
        else if(locationList.data[i].type == 'Religious'){
          locationList.data[i].image = '012-prayer.png';
        }
        else if(locationList.data[i].type == 'Arts'){
          locationList.data[i].image = '007-paint-palette.png';
        }
        else if(locationList.data[i].type == 'Entertainment'){
          locationList.data[i].image = '006-video-camera.png';
        }
        else if(locationList.data[i].type == 'Health'){
          locationList.data[i].image = '011-drugs.png';
        }
        else if(locationList.data[i].type == 'Hotels'){
          locationList.data[i].image = '018-hotel.png';
        }
        else if(locationList.data[i].type == 'Services'){
          locationList.data[i].image = '004-tools.png';
        }
        else if(locationList.data[i].type == 'Gym'){
          locationList.data[i].image = '016-dumbbell.png';
        }
        else if(locationList.data[i].type == 'Parks'){
          locationList.data[i].image = '003-tree.png';
        } else {
          locationList.data[i].image = 'map.png';
        }
      }
    });
  }

  function getThisPlace(place){
    console.log("getting this place: ", place);
    placeObject.place = place;
  }


  return {
    userObject : userObject,
    locationList : locationList,
    locationObject : locationObject,
    placeObject : placeObject,

    getThisPlace : getThisPlace,
    getPlaces : getPlaces,

    deletePlace : function(place){
      getThisPlace(place);
      console.log('Deleting place: ', place);

      $http.delete('/locations/' + place._id).then(function(response){
          console.log(response);
      });
      getPlaces();
    },

    getuser : function(){
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
          } else {
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      });
    },

    submitAndUpdatePlace : function(location){
      console.log('Updating Place!', placeObject);
    //Send object to factory
      $http.put('/locations/submit', placeObject).then(function(response){
          console.log(response);
      });
    },

    updatePlace : function(location){
      console.log('Updating Place!', placeObject);
    //Send object to factory
      $http.put('/locations/update', placeObject).then(function(response){
          console.log(response);
      });
    },

    logout : function() {
        $http.get('/user/logout').then(function(response) {
          console.log('logged out');
          $location.path("/landing");
        });
    }
  };
}]);

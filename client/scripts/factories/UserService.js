myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};
  var locationList = {};
  var placeObject = {
    place: ''
  };

  return {
    userObject : userObject,
    locationList : locationList,

    getThisPlace : function(place){
      console.log('Got object in factory: ', place);
      placeObject.place = place;
      console.log('placeObject is: ', placeObject.place);
    },

    getPlaces : function(){
      console.log('get that place girl!');
      $http.get('/locations').then(function(response){
        // console.log(response);
        locationList.data = response.data;
      });
    },

    getuser : function(){
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              console.log('User Data: ', userObject.userName);
          } else {
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      });
    },

    visitPlace : function(){
      // console.log('Updating Place!', placeID.id);
      // placeObject.place.visited = true;
      console.log('Updating Place!', placeObject);

      //Send object to factory

      $http.put('/locations', placeObject).then(function(response){
          console.log('This is the response: ', response);
      });

     //
     //   //Delete current card
    },

    logout : function() {
        $http.get('/user/logout').then(function(response) {
          console.log('logged out');
          $location.path("/home");
        });
    }
  };
}]);

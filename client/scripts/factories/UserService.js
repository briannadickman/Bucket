myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('User Service Loaded');

  var userObject = {};
  var locationList = {};

  return {
    userObject : userObject,
    locationList : locationList,

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

    updatePlace : function(_id){
      console.log('Updating Place!', _id);
      $http.put('/locations').then(function(response){
          console.log(response);
      });
      //Send to factory
     //
     //   //Grab whole object
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

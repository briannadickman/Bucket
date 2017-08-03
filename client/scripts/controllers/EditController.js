// EDIT CONTROLLER
myApp.controller('EditController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
  console.log('EditController sourced!');

  var userObject = UserService.userObject;
  $scope.location = UserService.locationObject;
  $scope.placeObject = UserService.placeObject;
  $scope.updatePlace = UserService.updatePlace;

  $scope.location.name = UserService.placeObject.place.name;
  $scope.location.dateAdded = UserService.placeObject.place.dateAdded;
  $scope.location.dateVisited = UserService.placeObject.place.dateVisited;
  $scope.location.address = UserService.placeObject.place.address;
  $scope.location.city = UserService.placeObject.place.city;
  $scope.location.state = UserService.placeObject.place.state;
  $scope.location.zipcode = UserService.placeObject.place.zipcode;
  $scope.location.website = UserService.placeObject.place.website;
  $scope.location.recommender = UserService.placeObject.place.recommender;
  $scope.location.recNotes = UserService.placeObject.place.recNotes;
  $scope.location.visited = UserService.placeObject.place.visited;
  $scope.location.type = UserService.placeObject.place.type;
  $scope.location.userNotes = UserService.placeObject.place.userNotes;

  // STATES
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
   'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
   'WY').split(' ').map(function(state) {
       return {abbrev: state};
     });


  // TYPES OF ESTABLISHMENTS
  $scope.types = ('Restaurant Nightlife Shopping Coffee Beauty Education Pets Religious Arts Entertainment Health Hotels Services Gym Parks').split(' ').map(function(type){
      return {type: type};
  });


  $scope.editPlace = function(placeObject, location){
    console.log(location);

    placeObject.place.name = location.name;
    placeObject.place.dateAdded = location.dateAdded;
    placeObject.place.dateVisited = location.dateVisited;
    placeObject.place.address = location.address;
    placeObject.place.city = location.city;
    placeObject.place.state = location.state;
    placeObject.place.zipcode = location.zipcode;
    placeObject.place.website = location.website;
    placeObject.place.recommender = location.recommender;
    placeObject.place.recNotes = location.recNotes;
    placeObject.place.visited = location.visited;
    placeObject.place.type = location.type;
    placeObject.place.userNotes = location.userNotes;

    console.log("REVISED place object is: ", placeObject);
    UserService.updatePlace(placeObject);
  };

  }]);

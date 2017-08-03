// SUBMIT PLACE AS VISITED: TRUE
myApp.controller('SubmitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('SubmitController sourced!');

  var userObject = UserService.userObject;
  $scope.location = UserService.locationObject;
  $scope.placeObject = UserService.placeObject;
  $scope.updatePlace = UserService.updatePlace;
  $scope.location.dateVisited = new Date();
  $scope.location.dateAdded = UserService.placeObject.place.dateAdded;

  // $scope.submitPlace = UserService.submitPlace;

  $scope.submitPlace = function(placeObject, location){
    placeObject.place.userNotes = location.userNotes;
    console.log("REVISED place object is: ", placeObject);
    UserService.submitAndUpdatePlace(placeObject);
  };


  }]);

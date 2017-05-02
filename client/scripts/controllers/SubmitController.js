// SUBMIT PLACE AS VISITED: TRUE
myApp.controller('SubmitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('SubmitController sourced!');

  var userObject = UserService.userObject;
  $scope.location = UserService.locationObject;
  $scope.placeObject = UserService.placeObject;
  $scope.updatePlace = UserService.updatePlace;

  // $scope.submitPlace = UserService.submitPlace;

  $scope.submitPlace = function(placeObject, location){
    placeObject.place.userNotes = location.userNotes;
    console.log("REVISED place object is: ", placeObject);
    UserService.updatePlace(placeObject);
  };


  }]);

// CORRECT CONTENT TO EDIT

// CLICKING SUBMIT BUTTON AGAIN SENDS COMPLETED EDITED FORM/OBJECT TO VISITED VIEW

// CONFIRMATION THAT PLACE WAS SUBMITTED AS VISITED

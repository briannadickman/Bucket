// EDIT CONTROLLER
myApp.controller('EditController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
  console.log('EditController sourced!');

  var userObject = UserService.userObject;
  $scope.location = UserService.locationObject;
  $scope.placeObject = UserService.placeObject;
  $scope.editPlace = UserService.editPlace;

  }]);

// NG-CLICK BUTTON (TO VISIT AND VISITED VIEWS) WILL BRING UP EDIT VIEW

// CONTECT FOR EDITING IS DIFFERENT THAN SUBMIT OR ADD. MORE SIMILAR TO ADD

// SUBMIT BUTTON TO UPDATE OBJECT AND RETURN TO SCREEN THEY WERE AT

// CONFIRMATION THAT INFORMATION WAS UPDATED

// ADD DELETE BUTTON TO DELETE THIS ITEM(?)

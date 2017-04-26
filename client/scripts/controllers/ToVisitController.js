// TO VISIT CONTROLLER VIEW

myApp.controller('ToVisitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('ToVisitController sourced!');

  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

}]);

// ADD NEW PLACE

// SUBMIT VISITED PLACE

// SORT PLACES BY DATE ADDED

// BRING IN IMAGE(THUMBNAIL) FROM ONLINE(?)

// FILTER PLACES BY LOCATION AND TYPE

// GET MORE INFORMATION ABOUT PLACE

// SEARCH FOR PLACE BY NAME

// EDIT EXISTING PLACE

// DELETE EXISTING PLACE
// ADD DELETE BUTTON TO DELETE THIS ITEM(?)

// VISITED CONTROLLER VIEW
myApp.controller('VisitedController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('VisitedController sourced!');

  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  $scope.getPlaces = UserService.getPlaces;
  $scope.locationList = UserService.locationList;
  $scope.getThisPlace = UserService.getThisPlace;

  $scope.expandPanel = function(){
    console.log('expandPanel clicked!');
    //Utilize Expansion Panel Stuff
    //Add in Do This button too.
  };

  $scope.getPlaces();
}]);

// SORT PLACES BY DATE VISITED

// BRING IN IMAGE(THUMBNAIL) FROM ONLINE(?)

// FILTER PLACES BY LOCATION AND TYPE

// GET MORE INFORMATION ABOUT PLACE

// SEARCH FOR PLACE BY NAME

// EDIT EXISTING PLACE

// DELETE EXISTING PLACE
// ADD DELETE BUTTON TO DELETE THIS ITEM(?)

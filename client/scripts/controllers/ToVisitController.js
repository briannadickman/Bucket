// TO VISIT CONTROLLER VIEW

myApp.controller('ToVisitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
  console.log('ToVisitController sourced!');

  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getPlaces = UserService.getPlaces;
  $scope.locationList = UserService.locationList;
  $scope.getThisPlace = UserService.getThisPlace;


  $scope.expandPanel = function(place){
    UserService.getThisPlace(place);
    console.log('expandPanel clicked with: ', place);
    //Utilize Expansion Panel Stuff
    //Add in Do This button too.
  };

  // MENU OPTION EDIT
  $scope.editPlace = function(){
    console.log('Edit Place clicked!');
  };

  // MENU OPTION DELETE
  $scope.deletePlace = UserService.deletePlace;

  // TYPES OF ESTABLISHMENTS
  $scope.types = ('Restaurant Nightlife Shopping Coffee Beauty Education Pets Religious Arts Entertainment Health Hotels Services').split(' ').map(function(type){
      return {type: type};
  });

  // EXPANSION PANELSß


  // LOAD CARDS ON PAGE LOAD

  $scope.getPlaces();

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

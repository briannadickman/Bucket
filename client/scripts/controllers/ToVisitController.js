// TO VISIT CONTROLLER VIEW

myApp.controller('ToVisitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('ToVisitController sourced!');

  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getPlaces = UserService.getPlaces;
  $scope.locationList = UserService.locationList;

  // $scope.updatePlace = UserService.updatePlace;
  // $scope.updatePlace = function(_id){
  //   console.log('movePlace clicked!', _id);
  //
  //
  // };
  $scope.expandPanel = function(){
    console.log('expandPanel clicked!');
    //Utilize Expansion Panel Stuff
    //Add in Do This button too.
  };




  // EXPANSION PANELS


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

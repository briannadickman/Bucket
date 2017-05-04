// VISITED CONTROLLER VIEW
myApp.controller('VisitedController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
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


  // // MENU OPEN
  // var originatorEv;
  // $scope.openMenu = function($mdMenu, ev) {
  //     originatorEv = ev;
  //     $mdMenu.open(ev);
  //   };

  // MENU OPTION EDIT
  $scope.editPlace = function(){
    console.log('Edit Place clicked!');
  };

  // MENU OPTION DELETE
  $scope.deletePlace = UserService.deletePlace;


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

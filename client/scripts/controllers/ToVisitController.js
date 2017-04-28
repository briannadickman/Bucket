// TO VISIT CONTROLLER VIEW

myApp.controller('ToVisitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
  console.log('ToVisitController sourced!');

  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;
  $scope.getPlaces = UserService.getPlaces;
  $scope.locationList = UserService.locationList;
  // $scope.getID = UserService.getID;
  $scope.getThisPlace = UserService.getThisPlace;

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

  // MENU OPEN
  var originatorEv;
  $scope.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

  // MENU OPTION EDIT
  $scope.editPlace = function(){
    console.log('Edit Place clicked!');
  };

  // MENU OPTION DELETE
  $scope.deletePlace = function(){
    console.log('Delete Place clicked!');
  };



  // EXPANSION PANELS


  // LOAD CARDS ON PAGE LOAD
  console.log(UserService.locationList);

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

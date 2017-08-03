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

  // LOAD CARDS ON PAGE LOAD

  $scope.getPlaces();

}]);

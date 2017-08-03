// VISITED CONTROLLER VIEW
myApp.controller('VisitedController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
  console.log('VisitedController sourced!');

  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  $scope.getPlaces = UserService.getPlaces;
  $scope.locationList = UserService.locationList;
  $scope.getThisPlace = UserService.getThisPlace;

  // MENU OPTION EDIT
  $scope.editPlace = function(){
    console.log('Edit Place clicked!');
  };

  // MENU OPTION DELETE
  $scope.deletePlace = UserService.deletePlace;


  $scope.getPlaces();
  
}]);

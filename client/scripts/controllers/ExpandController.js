// EXPANDED VIEW
myApp.controller('ExpandController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
  console.log('ExpandController sourced!');

  var userObject = UserService.userObject;
  $scope.location = UserService.locationObject;
  $scope.placeObject = UserService.placeObject;
  $scope.updatePlace = UserService.updatePlace;

}]);

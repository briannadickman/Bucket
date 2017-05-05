// EXPANDED VIEW
myApp.controller('ExpandController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
  console.log('ExpandController sourced!');

  var userObject = UserService.userObject;
  $scope.location = UserService.locationObject;
  $scope.placeObject = UserService.placeObject;
  $scope.updatePlace = UserService.updatePlace;

}]);
// NG-CLICK BRINGS USER TO VIEW WITH MORE INFORMATION (POPUP?)

// BUTTON TO RETURN TO PREVIOUS VIEW

// CLICKING ON ADDRESS BRINGS USER TO HTML LINK (MAPS) TO DIRECT THEM TO THE RIGHT LOCATION

// BRING IN IMAGE FROM ONLINE(?)

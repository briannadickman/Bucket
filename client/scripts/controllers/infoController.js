myApp.controller('InfoController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('InfoController Sourced!');
  $scope.logout = UserService.logout;
}]);

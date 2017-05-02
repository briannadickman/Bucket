myApp.controller('HeaderController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService, $mdDialog) {
  console.log('HeaderController sourced!');

  $scope.logout = UserService.logout;

  // MENU OPEN
  var originatorEv;
  $scope.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

  $scope.header = function(){
    console.log('logging out');
  };

  }]);

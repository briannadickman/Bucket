// SUBMIT PLACE AS VISITED: TRUE
myApp.controller('SubmitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('SubmitController sourced!');

  var userObject = UserService.userObject;
  console.log(userObject);

  $scope.visitPlace = UserService.visitPlace;

  }]);

// NG-CLICK: OPEN PLACE FOR EDITING VIEW (SEND TO EDIT WITH CORRECT CONTENT)

// CORRECT CONTENT TO EDIT

// CLICKING SUBMIT BUTTON AGAIN SENDS COMPLETED EDITED FORM/OBJECT TO VISITED VIEW

// CONFIRMATION THAT PLACE WAS SUBMITTED AS VISITED

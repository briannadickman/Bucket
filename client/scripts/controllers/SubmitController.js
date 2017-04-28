// SUBMIT PLACE AS VISITED: TRUE
myApp.controller('SubmitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('SubmitController sourced!');

  var userObject = UserService.userObject;
  console.log(userObject);

  $scope.location = UserService.locationObject;

  $scope.location = {
    user: userObject.userName,
    name: 'Test Name',
    dateAdded: UserService.locationObject.dateAdded,
    dateVisited: new Date(),
    address: UserService.locationObject.address,
    website: UserService.locationObject.website,
    recommender: UserService.locationObject.recommender,
    recNotes: UserService.locationObject.recNotes,
    visited: UserService.locationObject.visited,
    type: UserService.locationObject.type,
    userNotes: ''
  };

  $scope.visitPlace = UserService.visitPlace;

  }]);

// CORRECT CONTENT TO EDIT

// CLICKING SUBMIT BUTTON AGAIN SENDS COMPLETED EDITED FORM/OBJECT TO VISITED VIEW

// CONFIRMATION THAT PLACE WAS SUBMITTED AS VISITED

// SUBMIT PLACE AS VISITED: TRUE
myApp.controller('AddController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('AddController sourced!');

  var userObject = UserService.userObject;
  console.log(userObject);

  $scope.location = {
    user: userObject.userName,
    name: '',
    dateAdded: new Date(),
    dateVisited: '',
    address: '',
    website: '',
    recommender: '',
    recNotes: '',
    visited: false,
    type: '',
    userNotes: ''
  };

  }]);

// NG-CLICK: OPEN PLACE FOR EDITING VIEW (SEND TO EDIT WITH CORRECT CONTENT)

// CORRECT CONTENT TO EDIT

// CLICKING SUBMIT BUTTON AGAIN SENDS COMPLETED EDITED FORM/OBJECT TO VISITED VIEW

// CONFIRMATION THAT PLACE WAS SUBMITTED AS VISITED

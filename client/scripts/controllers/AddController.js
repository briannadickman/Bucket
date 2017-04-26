// ADD NEW PLACE FORM VIEW
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

  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
   'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
   'WY').split(' ').map(function(state) {
       return {abbrev: state};
     });

  $scope.addNewPlace = function(location) {
    console.log('Adding New Place: ', location);
  };
}]);

// SUBMIT FORM TO DATABASE (CREATE)

// CONFIRMATION (ALERT) THAT PLACE WAS ADDED SUCCESSFULLY

// AUTOCOMPLETE FOR SEARCH FUNCTION USING GOOGLE PLACES(?)

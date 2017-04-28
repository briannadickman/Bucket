// ADD NEW PLACE FORM VIEW
myApp.controller('AddController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('AddController sourced!');

  var userObject = UserService.userObject;
  console.log(userObject);

  // $scope.location = {
  //   user: userObject.userName,
  //   name: '',
  //   dateAdded: new Date(),
  //   dateVisited: '',
  //   address: '',
  //   website: '',
  //   recommender: '',
  //   recNotes: '',
  //   visited: false,
  //   type: '',
  //   userNotes: ''
  // };

  $scope.location = UserService.locationObject;

  // STATES
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
   'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
   'WY').split(' ').map(function(state) {
       return {abbrev: state};
     });


  // TYPES OF ESTABLISHMENTS
  $scope.types = ('Restaurant Nightlife Shopping Coffee Beauty Education Pets Religious Arts Entertainment Health Hotels Travel').split(' ').map(function(type){
      return {type: type};
  });

  // SUBMIT FORM TO DATABASE (CREATE)
  $scope.addNewPlace = function(location) {
    $scope.location.dateVisited = new Date();
    $scope.location.visited = false;
    $scope.location.user = userObject.userName;
    console.log('Adding New Place: ', location);
    $http.post('/locations', location).then(function(response){
      console.log(response.data);
    });
  };
}]);



// CONFIRMATION (ALERT) THAT PLACE WAS ADDED SUCCESSFULLY

// AUTOCOMPLETE FOR SEARCH FUNCTION USING GOOGLE PLACES(?)

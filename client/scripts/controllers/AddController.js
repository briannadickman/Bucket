// ADD NEW PLACE FORM VIEW
myApp.controller('AddController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('AddController sourced!');

  var userObject = UserService.userObject;
  $scope.location = UserService.locationObject;
  $scope.location.dateAdded = new Date();

  // STATES
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
   'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
   'WY').split(' ').map(function(state) {
       return {abbrev: state};
     });


  // TYPES OF ESTABLISHMENTS
  $scope.types = ('Restaurant Nightlife Shopping Coffee Beauty Education Pets Religious Arts Entertainment Health Hotels Services Gym Parks').split(' ').map(function(type){
      return {type: type};
  });

  // SUBMIT FORM TO DATABASE (CREATE)
  $scope.addNewPlace = function(location) {
    $scope.location.visited = false;
    $scope.location.user = userObject.userName;
    console.log('Adding New Place: ', location);
    console.log('Adding New PlaceObject: ', UserService.locationObject);
    $http.post('/locations', location).then(function(response){
      console.log(response.data);
    });
    $scope.location = '';
  };
}]);

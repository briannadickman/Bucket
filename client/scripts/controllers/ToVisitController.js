// TO VISIT CONTROLLER VIEW

myApp.controller('ToVisitController', ['$scope', '$http', '$location', 'UserService', function($scope, $http, $location, UserService) {
  console.log('ToVisitController sourced!');

  $scope.userObject = UserService.userObject;
  $scope.logout = UserService.logout;

  $scope.movePlace = function(_id){
    console.log('movePlace clicked!', _id);
    //Send to factory
    
    //Grab whole object

    //Delete current card

  };
  $scope.expandPanel = function(){
    console.log('expandPanel clicked!');
    //Utilize Expansion Panel Stuff
    //Add in Do This button too.
  };
  // $scope.getPlaces = UserService.getPlaces;

  $scope.getPlaces = function(){
    console.log('get that place girl!');
    $http.get('/locations').then(function(response){
      //console.log(response);
      $scope.locationList = response.data;
    });
  };

  // EXPANSION PANELS
//     // async
//     $mdExpansionPanel().waitFor('panelOne').then(function (instance) {
//       instance.expand();
//       instance.collapse({animation: false});
//       instance.remove();
//       instance.isOpen();
//     });
//
//     // sync
//     $mdExpansionPanel('panelOne').expand();
//
//


  // LOAD CARDS ON PAGE LOAD
  $scope.getPlaces();

}]);

// ADD NEW PLACE

// SUBMIT VISITED PLACE

// SORT PLACES BY DATE ADDED

// BRING IN IMAGE(THUMBNAIL) FROM ONLINE(?)

// FILTER PLACES BY LOCATION AND TYPE

// GET MORE INFORMATION ABOUT PLACE

// SEARCH FOR PLACE BY NAME

// EDIT EXISTING PLACE

// DELETE EXISTING PLACE
// ADD DELETE BUTTON TO DELETE THIS ITEM(?)

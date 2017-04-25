var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/tovisit', {
      templateUrl: 'views/templates/tovisit.html',
      controller: 'ToVisitController',
      controllerAs: 'tovisit'
    })
    .when('/visited', {
      templateUrl: 'views/templates/visited.html',
      controller: 'VisitedController',
      controllerAs: 'visited'
    })
    .when('/add', {
      templateUrl: 'views/templates/add.html',
      controller: 'AddController',
      controllerAs: 'add'
    })
    .when('/submit', {
      templateUrl: 'views/templates/submit.html',
      controller: 'SubmitController',
      controllerAs: 'submit'
    })
    .when('/edit', {
      templateUrl: 'views/templates/edit.html',
      controller: 'EditController',
      controllerAs: 'edit'
    })
    .when('/landing', {
      templateUrl: 'views/templates/landing.html',
      controller: 'LandingController',
      controllerAs: 'landing'
    })
    .when('/register', {
      templateUrl: 'views/templates/register.html',
      controller: 'RegisterController',
      controllerAs: 'register'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);

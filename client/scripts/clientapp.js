var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'xeditable']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', '$mdThemingProvider',
      function($routeProvider, $locationProvider, $mdThemingProvider) {

          $mdThemingProvider.theme('default')
            .primaryPalette('bucketpalette', {
              'default': '500', // by default use shade 400 from the pink palette for primary intentions
              'hue-1': 'A100', // use shade 100 for the <code>md-hue-1</code> class //secondar
              'hue-2': '300', // use shade 600 for the <code>md-hue-2</code> class //gray
              'hue-3': '800' // use shade A100 for the <code>md-hue-3</code> class //warn
            });

            $mdThemingProvider.definePalette('bucketpalette', {
                '50': 'fef6ed',
                '100': 'fce8d3',
                '200': 'fbd9b5',
                '300': '535353',
                '400': 'f7be81',
                '500': '171729',
                '600': 'f5ab63',
                '700': 'f3a258',
                '800': 'FFCC30',
                '900': 'f9cb9c',
                'A100': 'F4F4F4',
                'A200': 'a4a4a4',
                'A400': 'dadada',
                'A700': 'ffd8bc',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': [
                  '50',
                  '100',
                  '200',
                  '300',
                  '400',
                  '500',
                  '600',
                  '700',
                  '800',
                  '900',
                  'A100',
                  'A200',
                  'A400',
                  'A700'
                ],
                'contrastLightColors': ['500', 'A100', '800']
              });


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
      controllerAs: 'tovisit',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/visited', {
      templateUrl: 'views/templates/visited.html',
      controller: 'VisitedController',
      controllerAs: 'visited',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/add', {
      templateUrl: 'views/templates/add.html',
      controller: 'AddController',
      controllerAs: 'add',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/submit', {
      templateUrl: 'views/templates/submit.html',
      controller: 'SubmitController',
      controllerAs: 'submit',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/edit', {
      templateUrl: 'views/templates/edit.html',
      controller: 'EditController',
      controllerAs: 'edit',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .when('/landing', {
      templateUrl: 'views/templates/landing.html',
      controller: 'LandingController',
      controllerAs: 'landing'
    })
    .when('/expand', {
      templateUrl: 'views/templates/expand.html',
      controller: 'ExpandController',
      controllerAs: 'expand'
    })
    .when('/places', {
      templateUrl: 'views/templates/places.html',
      controller: 'PlacesController',
      controllerAs: 'places',
      resolve: {
        getuser : ['UserService', function(UserService){
          return UserService.getuser();
        }]
      }
    })
    .otherwise({
      redirectTo: 'landing'
    });
}]);

'use strict';


// Declare app level module which depends on filters, and services
angular.module('fairPayApp', [
  'ngRoute',
  'fairPayApp.filters',
  'fairPayApp.services',
  'fairPayApp.directives',
  'fairPayApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'mainController'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'mainController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

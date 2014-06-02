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
  $routeProvider.when('/', {templateUrl: 'partials/where.html', controller: 'MyCtrl1'});
  $routeProvider.when('/where', {templateUrl: 'partials/where.html', controller: 'MyCtrl1'});
  $routeProvider.when('/salary', {templateUrl: 'partials/salary.html', controller: 'MyCtrl1'});
  $routeProvider.when('/job', {templateUrl: 'partials/job.html', controller: 'MyCtrl1'});
  $routeProvider.when('/sorry', {templateUrl: 'partials/sorry.html', controller: 'fp-sorry'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);



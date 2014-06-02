'use strict';

/* Controllers */

angular.module('fairPayApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$location', function($scope, $location) {
    $scope.nextPage = function() {
      $location.path( "/view2" );
    };

    $scope.prevPage = function() {
      $location.path ("/");
    };

    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
  }])
  .controller('mainController', ['$scope', function($scope) {
    $scope.message = "blah blah";

  }]);

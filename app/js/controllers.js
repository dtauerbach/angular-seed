'use strict';

/* Controllers */

angular.module('fairPayApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$location', 'myService', function($scope, $location, myService) {
    $scope.nextPage = function() {
      $scope.update();
      $location.path( "/view2" );
    };

    $scope.prevPage = function() {
      $scope.update();
      $location.path ("/");
    };

    $scope.user = myService.getData();

    $scope.update = function() {
      myService.setData($scope.user)
    };

    $scope.reset = function() {
      myService.resetData();
    };

  }])
  .controller('mainController', ['$scope', function($scope) {
    $scope.message = "blah blah";

  }]);

'use strict';

/* Controllers */

angular.module('fairPayApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$location', 'myService', function($scope, $location, myService) {
    // NOTE: this is janky. We need to include 'where' here and make this more robust
    $scope.flow = ["/", "/job", "/salary", "/data"];

    $scope.nextPage = function() {
      $scope.update();
      $location.path( $scope.flow[$scope.flow.indexOf($location.path())+1] );
    };

    $scope.prevPage = function() {
      $scope.update();
      $location.path( $scope.flow[$scope.flow.indexOf($location.path())-1] );
    };

    $scope.sorryPage = function() {
      $scope.update();
      $location.path( "/sorry" );
    }

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
  }])
  .controller('fp-sorry', ['$scope', function($scope) {
  }]);

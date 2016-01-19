'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('TaskListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('json/tasks.json').success(function(data) {
      $scope.tasks = data;
    });
  }]);

taskControllers.controller('TaskDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/tasks.json').success(function(data) {
      $scope.tasks = data;
      data.forEach(function(item, i, arr) {
        if (item.id == $routeParams.taskId)
          $scope.num = i;
      });
    });
    $scope.editName=false;
  }]);

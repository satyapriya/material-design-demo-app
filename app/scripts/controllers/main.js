'use strict';

/**
 * @ngdoc function
 * @name ionicDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ionicDemoApp
 */
angular.module('ionicDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

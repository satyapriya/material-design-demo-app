'use strict';

/**
 * @ngdoc function
 * @name ionicDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ionicDemoApp
 */
angular.module('ionicDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

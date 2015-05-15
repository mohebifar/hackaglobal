'use strict';

angular.module('hackaglobalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('city', {
        url: '/city',
        templateUrl: 'app/city/city.html',
        controller: 'CityCtrl'
      });
  });
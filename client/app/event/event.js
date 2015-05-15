'use strict';

angular.module('hackaglobalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('event', {
        url: '/:city/:date',
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl'
      });
  });

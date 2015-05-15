'use strict';

angular.module('hackaglobalApp')
  .controller('MainCtrl', function ($scope, Event) {
    $scope.events = Event.query({
      from: 'now'
    });
  });

'use strict';

angular.module('hackaglobalApp')
  .controller('EventCtrl', function ($scope, $stateParams, Event) {
    $scope.event = Event.show({
      city: $stateParams.city,
      date: $stateParams.date
    });
  });

'use strict';

angular.module('hackaglobalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      })
      .state('adminEvents', {
        url: '/admin/events',
        templateUrl: 'app/admin/event.html',
        controller: 'EventsAdminCtrl'
      })
      .state('adminCities', {
        url: '/admin/cities',
        templateUrl: 'app/admin/city.html',
        controller: 'CitiesAdminCtrl'
      });
  });

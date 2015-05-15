'use strict';

angular.module('hackaglobalApp')
  .factory('City', function ($resource) {
    return $resource('/api/cities/:id/:controller', {
        id: '@_id'
      },
      {
        update: {
          method: 'PUT'
        }
      });
  });

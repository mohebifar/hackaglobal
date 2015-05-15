'use strict';

angular.module('hackaglobalApp')
  .factory('Event', function ($resource) {
    return $resource('/api/events/:id/:controller', {
        id: '@_id'
      },
      {
        update: {
          method: 'PUT'
        },
        show: {
          method: 'GET',
          params: {
            controller: 'show'
          }
        }
      });
  });
